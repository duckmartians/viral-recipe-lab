// Render the film to MP4 (or a contact sheet) with a headless browser + ffmpeg.
//   node tools/render.mjs                    -> out/film.mp4 (with film/audio.m4a if it exists)
//   node tools/render.mjs --from 10 --to 25  -> out/preview.mp4 (a part, quick check)
//   node tools/render.mjs --sheet 3          -> out/sheet.jpg (one frame every 3 s, for checking the pictures)
//   options: --fps 30
// Needs: Node 18+, `npm install` in this folder (playwright), `npx playwright install chromium`, ffmpeg on PATH.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const fps = Number(arg('fps', 30)), sheet = arg('sheet', null);
fs.mkdirSync(path.join(ROOT, 'out'), { recursive: true });

// tiny static server (ES modules and fetch() need http, not file://)
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.woff2': 'font/woff2', '.png': 'image/png', '.jpg': 'image/jpeg', '.m4a': 'audio/mp4', '.mp3': 'audio/mpeg', '.wav': 'audio/wav' };
const server = http.createServer((req, res) => {
  const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res);
}).listen(0);
const port = server.address().port;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('pageerror', (e) => { console.error('PAGE ERROR:', e.message); });
await page.goto(`http://127.0.0.1:${port}/engine/index.html?render`);
await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
const duration = await page.evaluate(() => window.__duration);
const from = Number(arg('from', 0)), to = Math.min(Number(arg('to', duration)), duration);

const frame = async (T) => Buffer.from((await page.evaluate((x) => window.__frame(x), T)).split(',')[1], 'base64');

if (sheet) {
  const step = Number(sheet), dir = path.join(ROOT, 'out', 'sheet'); fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  let n = 0; for (let T = from + 0.5; T < to; T += step) fs.writeFileSync(path.join(dir, `f${String(n++).padStart(3, '0')}.jpg`), await frame(T));
  const cols = 5, rows = Math.ceil(n / cols);
  await run('ffmpeg', ['-v', 'error', '-y', '-i', path.join(dir, 'f%03d.jpg'), '-vf', `scale=480:-1,tile=${cols}x${rows}:padding=6`, '-frames:v', '1', path.join(ROOT, 'out', 'sheet.jpg')]);
  console.log(`sheet: out/sheet.jpg (${n} frames, one every ${step} s, from ${from} s)`);
} else {
  const part = from > 0 || to < duration, out = path.join(ROOT, 'out', part ? 'preview.mp4' : 'film.mp4');
  const audio = path.join(ROOT, 'film', 'audio.m4a');
  const args = ['-v', 'error', '-y', '-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', String(fps), '-i', '-'];
  if (fs.existsSync(audio)) args.push('-ss', String(from), '-t', String(to - from), '-i', audio, '-map', '0:v', '-map', '1:a', '-c:a', 'aac', '-b:a', '192k');
  args.push('-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'medium', '-shortest', out);
  const ff = spawn('ffmpeg', args, { stdio: ['pipe', 'inherit', 'inherit'] });
  const total = Math.round((to - from) * fps), t0 = Date.now();
  for (let i = 0; i < total; i++) {
    const buf = await frame(from + i / fps);
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % (fps * 10) === 0) console.log(`frame ${i}/${total} (${((Date.now() - t0) / 1000).toFixed(0)} s)`);
  }
  ff.stdin.end(); await new Promise(r => ff.on('close', r));
  console.log(`done: ${path.relative(ROOT, out)} (${(to - from).toFixed(1)} s)`);
}
await browser.close(); server.close();

function run(cmd, a) { return new Promise((res, rej) => { const p = spawn(cmd, a, { stdio: 'inherit' }); p.on('close', (c) => c ? rej(new Error(cmd + ' failed')) : res()); }); }

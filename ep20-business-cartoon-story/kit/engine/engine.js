// Paper Noir kit - a tiny 2D canvas engine for narrated business-story cartoons (16:9, 1920x1080).
// Free to use. Everything is drawn in code: round-head people, lamp-lit rooms, props, typed title cards.
// A film is a list of shots (film/shots.js). Each shot has start/end in seconds and a draw(ctx, k) function.
// k = the shot's helper object: k.t (seconds into the shot), k.u (0..1 through the shot), k.at(word) etc.

export const W = 1920, H = 1080;

// ---------- small maths ----------
export const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
export const lerp = (a, b, u) => a + (b - a) * u;
export const ease = (u) => { u = clamp(u); return u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2; };
export const back = (u) => { u = clamp(u); const c = 1.7; return 1 + (c + 1) * Math.pow(u - 1, 3) + c * Math.pow(u - 1, 2); };
export const hash = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
/** 0 before t0, rises to 1 over dur seconds (eased) */
export const rise = (t, t0, dur = 0.4) => ease((t - t0) / dur);
/** pop-in scale: 0 -> overshoot -> 1 */
export const pop = (t, t0, dur = 0.35) => (t < t0 ? 0 : back((t - t0) / dur));

// ---------- palette (night business noir) ----------
export const C = {
  ink: '#1b1a1f', night: '#14182a', navy: '#1f2a44', wall: '#2b2f3f', warm: '#f2c46b', lamp: '#ffd98a',
  paper: '#f3ead6', paperDark: '#d9cdb2', red: '#c8372d', green: '#6fbf4a', chip: '#7ac943', gold: '#e8b83a',
  skin: ['#f1c9a5', '#e0ac7e', '#c68a5e', '#8d5a3b', '#f5d6bd'], white: '#fbf7ee', grey: '#8a8f9c',
};

// ---------- drawing helpers ----------
export function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
export function shape(c, fill, stroke = C.ink, lw = 5) { if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.lineWidth = lw; c.strokeStyle = stroke; c.lineJoin = 'round'; c.lineCap = 'round'; c.stroke(); } }
export function text(c, s, x, y, { size = 42, color = C.ink, font = 'Hand', align = 'center', weight = '', base = 'middle', max } = {}) {
  c.font = `${weight} ${size}px ${font === 'Hand' ? '"Kalam", "Caveat", "Comic Sans MS", cursive' : font === 'Serif' ? '"Playfair Display", Georgia, serif' : '"Inter", Arial, sans-serif'}`;
  c.fillStyle = color; c.textAlign = align; c.textBaseline = base; c.fillText(s, x, y, max);
}

// ---------- camera ----------
/** Wrap a draw in a camera: zoom z around (cx, cy) world point (world = the 1920x1080 stage). */
export function camera(c, { z = 1, cx = W / 2, cy = H / 2 } = {}, draw) {
  c.save(); c.translate(W / 2, H / 2); c.scale(z, z); c.translate(-cx, -cy); draw(); c.restore();
}
/** slow push-in over a shot: from z0 to z1 */
export const push = (k, z0 = 1, z1 = 1.08, cx = W / 2, cy = H / 2) => ({ z: lerp(z0, z1, ease(k.u)), cx, cy });

// ---------- light & finish ----------
export function lampCone(c, x, y, { w = 520, h = 900, a = 0.22, col = '255,220,150' } = {}) {
  const g = c.createRadialGradient(x, y + h * 0.55, 10, x, y + h * 0.55, w);
  g.addColorStop(0, `rgba(${col},${a})`); g.addColorStop(1, `rgba(${col},0)`);
  c.save(); c.globalCompositeOperation = 'lighter'; c.fillStyle = g; c.beginPath(); c.moveTo(x - 40, y); c.lineTo(x + 40, y); c.lineTo(x + w, y + h); c.lineTo(x - w, y + h); c.closePath(); c.fill(); c.restore();
}
export function vignette(c, a = 0.55) {
  const g = c.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, H * 0.95);
  g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, `rgba(0,0,0,${a})`); c.fillStyle = g; c.fillRect(0, 0, W, H);
}
export function grain(c, t, a = 0.05) {
  c.save(); c.globalAlpha = a; for (let i = 0; i < 260; i++) { const x = hash(i + Math.floor(t * 24) * 13) * W, y = hash(i * 7.3 + Math.floor(t * 24)) * H; c.fillStyle = i % 2 ? '#fff' : '#000'; c.fillRect(x, y, 2, 2); } c.restore();
}

// ---------- people ----------
/** A round-head person. o = { x, y (feet), s (scale, 1 = 300 px tall), body colour, skin index, face: 'calm'|'smile'|'worry'|'shock'|'smug'|'sad',
 *  hair: 'none'|'short'|'grey'|'bob'|'bun'|'long', glasses, jacket ('leather'|'suit'|'none'), tie colour, look (-1..1 eyes left/right), talk (0..1 mouth open),
 *  wave (arm up 0..1), sil (true = a dark silhouette, for people we must not show), t (seconds, for blinks) } */
export function person(c, o) {
  const s = o.s ?? 1, x = o.x, y = o.y, t = o.t ?? 0;
  c.save(); c.translate(x, y); c.scale(s, s);
  const sil = !!o.sil, ink = sil ? '#0b0c10' : C.ink, body = sil ? '#15161c' : (o.body || '#3d5a80'), skin = sil ? '#15161c' : C.skin[o.skin ?? 0];
  // shadow
  c.fillStyle = 'rgba(0,0,0,0.28)'; c.beginPath(); c.ellipse(0, 0, 70, 14, 0, 0, Math.PI * 2); c.fill();
  // legs
  c.lineWidth = 12; c.strokeStyle = ink; c.lineCap = 'round';
  c.beginPath(); c.moveTo(-18, -110); c.lineTo(-22, -6); c.moveTo(18, -110); c.lineTo(22, -6); c.stroke();
  // body (rounded bean)
  rr(c, -58, -215, 116, 120, 46); shape(c, body, ink, 6);
  if (!sil && o.jacket === 'suit') { c.beginPath(); c.moveTo(0, -212); c.lineTo(-24, -170); c.lineTo(0, -120); c.lineTo(24, -170); c.closePath(); shape(c, '#f4f1ea', ink, 4); c.beginPath(); c.moveTo(0, -200); c.lineTo(-8, -150); c.lineTo(0, -128); c.lineTo(8, -150); c.closePath(); shape(c, o.tie || C.red, ink, 3); }
  if (!sil && o.jacket === 'leather') { c.strokeStyle = '#000'; c.lineWidth = 4; c.beginPath(); c.moveTo(-10, -212); c.lineTo(-30, -150); c.moveTo(10, -212); c.lineTo(30, -150); c.stroke(); }
  // arms
  const wave = clamp(o.wave ?? 0);
  c.lineWidth = 11; c.strokeStyle = ink;
  c.beginPath(); c.moveTo(-54, -185); c.quadraticCurveTo(-82, -150, -74, -112); c.stroke();
  c.beginPath(); c.moveTo(54, -185); c.quadraticCurveTo(lerp(84, 92, wave), lerp(-150, -230, wave), lerp(76, 70, wave), lerp(-112, -262, wave)); c.stroke();
  c.fillStyle = sil ? ink : '#f7f4ee'; [[-74, -112], [lerp(76, 70, wave), lerp(-112, -262, wave)]].forEach(([hx, hy]) => { c.beginPath(); c.arc(hx, hy, 12, 0, Math.PI * 2); c.fill(); c.lineWidth = 4; c.stroke(); });
  // head
  c.beginPath(); c.arc(0, -262, 58, 0, Math.PI * 2); shape(c, skin, ink, 6);
  if (!sil) hair(c, o.hair || 'short', ink);
  if (!sil) face(c, o.face || 'calm', o.look ?? 0, o.talk ?? 0, t, o.glasses, ink);
  else { c.fillStyle = 'rgba(255,255,255,0.8)'; c.beginPath(); c.arc(-14, -262, 4, 0, 7); c.arc(14, -262, 4, 0, 7); c.fill(); }
  c.restore();
}
function hair(c, kind, ink) {
  const col = kind === 'grey' ? '#cfd2d8' : '#202020';
  if (kind === 'none') return;
  c.fillStyle = col; c.strokeStyle = ink; c.lineWidth = 5;
  if (kind === 'short' || kind === 'grey') { c.beginPath(); c.arc(0, -268, 60, Math.PI * 1.05, Math.PI * 1.95); c.quadraticCurveTo(30, -300, 0, -296); c.quadraticCurveTo(-36, -296, -59, -276); c.closePath(); c.fill(); c.stroke(); }
  if (kind === 'bob' || kind === 'long') { c.beginPath(); c.arc(0, -266, 64, Math.PI * 0.95, Math.PI * 2.05); c.lineTo(64, kind === 'long' ? -190 : -230); c.lineTo(44, kind === 'long' ? -190 : -230); c.lineTo(44, -282); c.quadraticCurveTo(0, -300, -44, -282); c.lineTo(-44, kind === 'long' ? -190 : -230); c.lineTo(-64, kind === 'long' ? -190 : -230); c.closePath(); c.fill(); c.stroke(); }
  if (kind === 'bun') { c.beginPath(); c.arc(0, -330, 22, 0, 7); c.fill(); c.stroke(); c.beginPath(); c.arc(0, -268, 60, Math.PI * 1.0, Math.PI * 2.0); c.closePath(); c.fill(); c.stroke(); }
}
function face(c, expr, look, talk, t, glasses, ink) {
  const blink = (t % 3.7) < 0.12 ? 0.15 : 1, ex = look * 8;
  c.fillStyle = ink;
  const eye = (x) => { c.save(); c.translate(x + ex, -262); c.scale(1, blink); c.beginPath(); c.ellipse(0, 0, 6.5, 9, 0, 0, 7); c.fill(); c.restore(); };
  eye(-18); eye(18);
  c.lineWidth = 4; c.strokeStyle = ink; c.lineCap = 'round';
  const brow = { worry: [-6, 6], shock: [-10, -10], smug: [4, -2], sad: [-6, 6], calm: [0, 0], smile: [0, 0] }[expr] || [0, 0];
  c.beginPath(); c.moveTo(-28 + ex, -284 + brow[0]); c.lineTo(-10 + ex, -286 - brow[0] * 0.3); c.moveTo(10 + ex, -286 - brow[1] * 0.3); c.lineTo(28 + ex, -284 + brow[1]); c.stroke();
  const my = -232;
  c.beginPath();
  if (expr === 'shock' || talk > 0.5) { c.ellipse(ex * 0.5, my, 9, 6 + 6 * talk, 0, 0, 7); c.fill(); }
  else if (expr === 'smile' || expr === 'smug') { c.arc(ex * 0.5, my - 10, 16, 0.2 * Math.PI, 0.8 * Math.PI); c.stroke(); }
  else if (expr === 'worry' || expr === 'sad') { c.arc(ex * 0.5, my + 8, 13, 1.2 * Math.PI, 1.8 * Math.PI); c.stroke(); }
  else { c.moveTo(-10 + ex * 0.5, my); c.lineTo(10 + ex * 0.5, my); c.stroke(); }
  if (glasses) { c.lineWidth = 3.5; c.beginPath(); c.arc(-18 + ex, -262, 14, 0, 7); c.moveTo(32 + ex, -262); c.arc(18 + ex, -262, 14, 0, 7); c.moveTo(-4 + ex, -262); c.lineTo(4 + ex, -262); c.stroke(); }
}

// ---------- on-screen text ----------
/** black card with handwritten text typed letter by letter (the "chapter / beat" card). */
export function typeCard(c, s, t, { cps = 22, size = 64, y = H / 2, hold = true } = {}) {
  c.fillStyle = '#050506'; c.fillRect(0, 0, W, H);
  const n = Math.floor(clamp(t * cps, 0, s.length));
  text(c, s.slice(0, n), 160, y, { size, color: '#f4f1ea', align: 'left' });
}
/** name tag in the lower-left corner: green bar + name + role */
export function nameTag(c, name, role, t, t0 = 0.2) {
  const u = rise(t, t0, 0.35); if (u <= 0) return;
  c.save(); c.globalAlpha = u; c.translate(lerp(-60, 0, u), 0);
  c.fillStyle = 'rgba(10,12,16,0.82)'; c.fillRect(70, 900, 520, 96); c.fillStyle = C.chip; c.fillRect(70, 900, 10, 96);
  text(c, name.toUpperCase(), 100, 936, { size: 40, color: '#fff', align: 'left' });
  if (role) text(c, role.toUpperCase(), 100, 974, { size: 26, color: '#b9c0c9', align: 'left' });
  c.restore();
}
/** small caption like "JUNE 2024 · TAIPEI" top-left */
export function placeCaption(c, s, t, t0 = 0.1) {
  const u = rise(t, t0, 0.3); if (u <= 0) return;
  c.save(); c.globalAlpha = u; c.fillStyle = 'rgba(10,12,16,0.75)'; c.font = '34px "Kalam", cursive'; const w = c.measureText(s).width + 48;
  c.fillRect(60, 56, w, 58); text(c, s, 84, 86, { size: 34, color: '#f4f1ea', align: 'left' }); c.restore();
}
/** a source line under a claim: "Reported by the New York Times, 29 Oct 2026" */
export function sourceLine(c, s, t, t0 = 0.3) {
  const u = rise(t, t0, 0.3); if (u <= 0) return;
  c.save(); c.globalAlpha = u * 0.92; text(c, s, W - 70, H - 46, { size: 28, color: '#e9e3d4', align: 'right', font: 'Sans' }); c.restore();
}

// ---------- sets ----------
export function room(c, { wall = C.wall, floor = '#3a2f2a', window: win = true, lamp = true, t = 0 } = {}) {
  c.fillStyle = wall; c.fillRect(0, 0, W, H);
  for (let i = 0; i < 9; i++) { c.fillStyle = i % 2 ? 'rgba(255,255,255,0.025)' : 'rgba(0,0,0,0.04)'; c.fillRect(i * 214, 0, 214, 760); }
  c.fillStyle = floor; c.fillRect(0, 760, W, 320); c.fillStyle = 'rgba(0,0,0,0.25)'; c.fillRect(0, 760, W, 8);
  if (win) nightWindow(c, 1180, 150, 520, 380, t);
  if (lamp) { c.fillStyle = '#111'; c.fillRect(W / 2 - 3, 0, 6, 70); c.beginPath(); c.moveTo(W / 2 - 70, 110); c.lineTo(W / 2 + 70, 110); c.lineTo(W / 2 + 30, 64); c.lineTo(W / 2 - 30, 64); c.closePath(); shape(c, '#2d6b4a'); lampCone(c, W / 2, 110, { a: 0.18 }); }
}
export function nightWindow(c, x, y, w, h, t = 0) {
  rr(c, x, y, w, h, 6); shape(c, C.night, C.ink, 8);
  for (let i = 0; i < 7; i++) { const bx = x + 20 + i * (w / 7), bh = 120 + hash(i) * 200; c.fillStyle = '#1d2540'; c.fillRect(bx, y + h - bh, w / 7 - 10, bh);
    for (let j = 0; j < 8; j++) if (hash(i * 9 + j) > 0.55) { c.fillStyle = hash(i + j * 3 + Math.floor(t)) > 0.1 ? C.lamp : '#3a3a2a'; c.fillRect(bx + 8 + (j % 2) * 22, y + h - bh + 14 + Math.floor(j / 2) * 28, 12, 14); } }
  c.strokeStyle = C.ink; c.lineWidth = 8; c.beginPath(); c.moveTo(x + w / 2, y); c.lineTo(x + w / 2, y + h); c.moveTo(x, y + h / 2); c.lineTo(x + w, y + h / 2); c.stroke();
}
export function skyline(c, t = 0, { moon = true } = {}) {
  const g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#0b1022'); g.addColorStop(1, '#1d2747'); c.fillStyle = g; c.fillRect(0, 0, W, H);
  if (moon) { c.fillStyle = '#f6f1dc'; c.beginPath(); c.arc(1560, 170, 46, 0, 7); c.fill(); }
  for (let i = 0; i < 160; i++) { c.fillStyle = `rgba(255,255,255,${0.3 + hash(i) * 0.5})`; c.fillRect(hash(i * 3) * W, hash(i * 5) * 520, 2, 2); }
  for (let i = 0; i < 22; i++) { const bw = 70 + hash(i) * 70, bh = 220 + hash(i + 40) * 420, bx = i * 90 - 20; c.fillStyle = i % 3 ? '#141b33' : '#1a2240'; c.fillRect(bx, H - bh, bw, bh);
    for (let j = 0; j < 30; j++) if (hash(i * 31 + j) > 0.62) { c.fillStyle = hash(i * 7 + j + Math.floor(t * 0.5)) > 0.08 ? C.lamp : '#2a2d3a'; c.fillRect(bx + 10 + (j % 3) * 20, H - bh + 20 + Math.floor(j / 3) * 34, 10, 14); } }
}
export function table(c, x, y, w = 520) { c.fillStyle = C.paper; rr(c, x - w / 2, y, w, 40, 14); shape(c, C.paper); c.fillStyle = C.paperDark; c.fillRect(x - w / 2 + 20, y + 40, w - 40, 160); c.strokeStyle = C.ink; c.lineWidth = 5; c.strokeRect(x - w / 2 + 20, y + 40, w - 40, 160); }
export function desk(c, x, y, w = 640) { rr(c, x - w / 2, y, w, 34, 8); shape(c, '#6b4a33'); c.fillStyle = '#4e3524'; c.fillRect(x - w / 2 + 24, y + 34, w - 48, 150); c.strokeStyle = C.ink; c.lineWidth = 5; c.strokeRect(x - w / 2 + 24, y + 34, w - 48, 150); }

// ---------- props ----------
/** newspaper front page with an INVENTED masthead (never a real logo). */
export function newspaper(c, x, y, { masthead = 'THE DAILY LEDGER', head = 'HEADLINE', date = '', s = 1, rot = -0.03 } = {}) {
  c.save(); c.translate(x, y); c.rotate(rot); c.scale(s, s);
  rr(c, -330, -230, 660, 460, 6); shape(c, C.paper, C.ink, 6);
  text(c, masthead, 0, -180, { size: 46, font: 'Serif', weight: 'bold', max: 600 }); c.fillStyle = C.ink; c.fillRect(-300, -146, 600, 4);
  if (date) text(c, date, -300, -126, { size: 20, align: 'left', font: 'Sans' });
  const lines = wrap(c, head, 560, 54); lines.forEach((l, i) => text(c, l, 0, -70 + i * 60, { size: 54, weight: 'bold', font: 'Serif' }));
  for (let i = 0; i < 6; i++) { c.fillStyle = '#b9ad93'; c.fillRect(-300, 70 + i * 22, 270, 8); c.fillRect(30, 70 + i * 22, 270, 8); }
  c.restore();
}
function wrap(c, s, maxW, size) { c.font = `bold ${size}px Georgia`; const words = s.split(' '), out = []; let cur = ''; for (const w of words) { const t = cur ? cur + ' ' + w : w; if (c.measureText(t).width > maxW && cur) { out.push(cur); cur = w; } else cur = t; } if (cur) out.push(cur); return out.slice(0, 3); }
/** a document with lines and an optional stamp ("CLASSIFIED", "UNDER REVIEW") */
export function documentSheet(c, x, y, { title = 'MEMO', stamp = '', stampT = 1, s = 1, rot = 0.04 } = {}) {
  c.save(); c.translate(x, y); c.rotate(rot); c.scale(s, s);
  rr(c, -220, -290, 440, 580, 6); shape(c, '#fbf8f0', C.ink, 6); text(c, title, 0, -230, { size: 40, font: 'Sans', weight: 'bold' });
  for (let i = 0; i < 12; i++) { c.fillStyle = '#c9c3b5'; c.fillRect(-180, -170 + i * 34, 360 - (i % 4) * 40, 10); }
  if (stamp && stampT > 0) { const k = pop(stampT, 0, 0.25); c.save(); c.rotate(-0.18); c.scale(1.6 - 0.6 * clamp(k), 1.6 - 0.6 * clamp(k)); c.globalAlpha = clamp(k); c.strokeStyle = C.red; c.lineWidth = 8; rr(c, -170, -50, 340, 100, 10); c.stroke(); text(c, stamp, 0, 2, { size: 56, color: C.red, font: 'Sans', weight: 'bold' }); c.restore(); }
  c.restore();
}
/** a green AI chip */
export function chip(c, x, y, s = 1, glow = 0) {
  c.save(); c.translate(x, y); c.scale(s, s);
  if (glow) { c.shadowColor = C.chip; c.shadowBlur = 40 * glow; }
  rr(c, -80, -80, 160, 160, 18); shape(c, '#1f3b22', C.ink, 6); c.shadowBlur = 0;
  rr(c, -46, -46, 92, 92, 10); shape(c, C.chip, C.ink, 4);
  c.strokeStyle = '#cfd7c9'; c.lineWidth = 6; for (let i = -2; i <= 2; i++) { c.beginPath(); c.moveTo(i * 26, -80); c.lineTo(i * 26, -104); c.moveTo(i * 26, 80); c.lineTo(i * 26, 104); c.moveTo(-80, i * 26); c.lineTo(-104, i * 26); c.moveTo(80, i * 26); c.lineTo(104, i * 26); c.stroke(); }
  c.restore();
}
/** a server crate / rack */
export function serverRack(c, x, y, s = 1, t = 0) {
  c.save(); c.translate(x, y); c.scale(s, s); rr(c, -110, -320, 220, 320, 10); shape(c, '#20242c', C.ink, 6);
  for (let i = 0; i < 8; i++) { rr(c, -90, -300 + i * 38, 180, 28, 4); shape(c, '#2c323d', C.ink, 3); c.fillStyle = hash(i + Math.floor(t * 3)) > 0.3 ? C.chip : '#244'; c.beginPath(); c.arc(70, -286 + i * 38, 5, 0, 7); c.fill(); }
  c.restore();
}
/** bar chart that grows: values [{label, v}] */
export function barChart(c, x, y, bars, u, { w = 820, h = 460, unit = '' } = {}) {
  c.save(); c.translate(x, y); rr(c, -40, -h - 80, w + 80, h + 160, 12); shape(c, '#f4efe2', C.ink, 6);
  const max = Math.max(...bars.map(b => b.v)), bw = w / bars.length * 0.6;
  bars.forEach((b, i) => { const bh = h * (b.v / max) * ease(clamp(u * 1.4 - i * 0.25)); const bx = i * (w / bars.length) + (w / bars.length - bw) / 2;
    rr(c, bx, -bh, bw, bh, 6); shape(c, i === bars.length - 1 ? C.green : '#9aa3b2', C.ink, 5);
    text(c, b.label, bx + bw / 2, 40, { size: 30, font: 'Sans' }); if (bh > 30) text(c, b.text || `${b.v}${unit}`, bx + bw / 2, -bh - 30, { size: 40 }); });
  c.restore();
}
/** simple map card with pins: pins [{x, y, label}] in card space (0..1) */
export function mapCard(c, x, y, pins, u, { w = 900, h = 600, title = '' } = {}) {
  c.save(); c.translate(x - w / 2, y - h / 2); rr(c, 0, 0, w, h, 12); shape(c, '#cfe0e8', C.ink, 6);
  c.fillStyle = '#e9e1c8'; c.beginPath(); c.moveTo(w * 0.1, h * 0.2); c.bezierCurveTo(w * 0.4, h * 0.05, w * 0.6, h * 0.35, w * 0.55, h * 0.6); c.bezierCurveTo(w * 0.5, h * 0.9, w * 0.25, h * 0.85, w * 0.12, h * 0.6); c.closePath(); c.fill(); c.strokeStyle = '#8a8f7a'; c.lineWidth = 3; c.stroke();
  c.beginPath(); c.ellipse(w * 0.78, h * 0.7, w * 0.12, h * 0.08, 0.3, 0, 7); c.fill(); c.stroke();
  if (title) text(c, title, w / 2, 40, { size: 38 });
  pins.forEach((p, i) => { const k = pop(u * pins.length * 1.2 - i, 0, 1); if (k <= 0) return; c.save(); c.translate(p.x * w, p.y * h); c.scale(k, k); c.beginPath(); c.arc(0, -30, 18, 0, 7); c.lineTo(0, 0); shape(c, C.red, C.ink, 4); c.restore(); if (p.label) text(c, p.label, p.x * w, p.y * h + 30, { size: 30 }); });
  c.restore();
}
/** surveillance camera frame overlay: REC + timestamp */
export function cctv(c, t, stamp = '') {
  c.save(); c.strokeStyle = 'rgba(255,255,255,0.85)'; c.lineWidth = 5; const m = 70, L = 70;
  [[m, m, 1, 1], [W - m, m, -1, 1], [m, H - m, 1, -1], [W - m, H - m, -1, -1]].forEach(([x, y, sx, sy]) => { c.beginPath(); c.moveTo(x, y + sy * L); c.lineTo(x, y); c.lineTo(x + sx * L, y); c.stroke(); });
  if (Math.floor(t * 2) % 2 === 0) { c.fillStyle = C.red; c.beginPath(); c.arc(m + 40, m + 44, 12, 0, 7); c.fill(); }
  text(c, 'REC', m + 64, m + 44, { size: 32, color: '#fff', align: 'left', font: 'Sans' });
  if (stamp) text(c, stamp, W - m - 20, H - m - 30, { size: 30, color: '#fff', align: 'right', font: 'Sans' });
  c.fillStyle = 'rgba(160,200,170,0.06)'; c.fillRect(0, 0, W, H); c.restore();
}
/** many small items appear one after another in a grid (badges, chips, crates): count grows with u */
export function multiply(c, n, u, drawItem, { cols = 10, x0 = 160, y0 = 140, dx = 160, dy = 120 } = {}) {
  const shown = Math.floor(n * ease(u)); for (let i = 0; i < shown; i++) { const k = clamp((n * ease(u) - i) / 2); c.save(); c.translate(x0 + (i % cols) * dx, y0 + Math.floor(i / cols) * dy); c.scale(back(k), back(k)); drawItem(c, i); c.restore(); }
}
/** a big number that counts up */
export function counter(c, x, y, from, to, u, { prefix = '', suffix = '', size = 140, color = C.gold, decimals = 0 } = {}) {
  const v = lerp(from, to, ease(u)); text(c, prefix + v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix, x, y, { size, color });
}
/** an empty chair (for the ending) */
export function chair(c, x, y, s = 1, col = '#7a1f1f') {
  c.save(); c.translate(x, y); c.scale(s, s); rr(c, -90, -360, 180, 240, 40); shape(c, col); rr(c, -110, -140, 220, 50, 14); shape(c, col);
  c.lineWidth = 10; c.strokeStyle = C.ink; c.beginPath(); c.moveTo(-80, -90); c.lineTo(-90, 0); c.moveTo(80, -90); c.lineTo(90, 0); c.stroke(); c.restore();
}

// EXAMPLE FILM (invented company and people, only to show every kit piece). The agent replaces this file.
// A shot = { start, end, draw(c, k) }. Times in seconds on the narration. k.t = seconds into the shot,
// k.u = 0..1 through the shot, k.at('word') = when that word is spoken inside the shot (needs film/words.json).
import * as E from '../engine/engine.js';
const { W, H, C } = E;

export const duration = 24;

export const shots = [
  // 1. establishing: night city + place caption
  { start: 0, end: 4, draw(c, k) {
    E.camera(c, E.push(k, 1, 1.06), () => E.skyline(c, k.T));
    E.placeCaption(c, 'MARCH 2026 · HONG KONG', k.t);
    E.vignette(c);
  } },
  // 2. two people at a dinner table, warm lamp, name tag on the real-world-style caricature
  { start: 4, end: 8.5, draw(c, k) {
    E.camera(c, E.push(k, 1.0, 1.05, W / 2, 620), () => {
      E.room(c, { wall: '#3b2526', floor: '#2a1d1b', t: k.T });
      E.person(c, { x: 730, y: 900, s: 1.35, body: '#1d1d22', jacket: 'leather', hair: 'grey', glasses: true, face: 'smile', talk: (Math.sin(k.t * 14) > 0) * 0.6, t: k.t, look: 1 });
      E.person(c, { x: 1190, y: 900, s: 1.35, body: C.red, hair: 'bob', face: 'calm', t: k.t + 1, look: -1 });
      E.table(c, W / 2, 760, 520);
    });
    E.nameTag(c, 'Leo Marsh', 'CEO, Lumen Chips (invented)', k.t);
    E.vignette(c);
  } },
  // 3. a silhouette watching from outside (people we must not depict stay silhouettes)
  { start: 8.5, end: 11, draw(c, k) {
    E.skyline(c, k.T, { moon: false });
    E.person(c, { x: 520, y: 1000, s: 1.4, sil: true });
    E.cctv(c, k.t, '21:14:07');
  } },
  // 4. typed black card
  { start: 11, end: 14, draw(c, k) { E.typeCard(c, 'Nobody at the table knew.', k.t); } },
  // 5. newspaper with an invented masthead + a source line
  { start: 14, end: 18, draw(c, k) {
    c.fillStyle = '#2a2f3a'; c.fillRect(0, 0, W, H);
    const s = E.pop(k.t, 0.1, 0.4);
    E.newspaper(c, W / 2, H / 2, { masthead: 'THE EVENING LEDGER', head: 'CHIP DEAL UNDER REVIEW', date: '2 MARCH 2026', s: 1.25 * s });
    E.sourceLine(c, 'Example only: an invented report', k.t, 1);
    E.vignette(c, 0.4);
  } },
  // 6. a chart that grows + chips multiplying
  { start: 18, end: 24, draw(c, k) {
    c.fillStyle = '#1b2233'; c.fillRect(0, 0, W, H);
    if (k.t < 3) E.barChart(c, 560, 760, [{ label: '2024', v: 1, text: '$1M' }, { label: '2025', v: 90, text: '$90M' }], k.t / 2.4, { w: 800 });
    else E.multiply(c, 40, (k.t - 3) / 2.5, (cc) => E.chip(cc, 0, 0, 0.4), { cols: 10, x0: 240, y0: 220, dx: 160, dy: 170 });
    E.vignette(c, 0.4);
  } },
];

/** drawn on top of every frame: light film grain */
export function finish(c, T) { E.grain(c, T, 0.035); }

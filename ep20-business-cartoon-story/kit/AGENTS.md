# Paper Noir kit - instructions for the coding agent

You are turning a finished narration into a narrated 2D business-story cartoon (16:9, 1920x1080, 30 fps), in the style
of "true story" money/tech channels: round-head people with dot eyes, night rooms under one warm lamp, props that pop
in (newspapers, files with stamps, maps with pins, charts, chips, server racks), black cards with typed handwriting,
name tags, place/date captions, a cut every 2-3 seconds.

This file works with any coding agent that can read files, write files and run commands: Claude Code, Codex,
Antigravity IDE, Cursor, Gemini CLI, or similar. (`CLAUDE.md` only points here.)

## Quick start (what the user types)
The user only pastes one message into their agent, for example:
`Clone https://github.com/duckmartians/viral-recipe-lab, open ep20-business-cartoon-story/kit and follow AGENTS.md.
Story: <the story>. Target length: <N> minutes.`
Then you: clone (or download) the repo, work inside `ep20-business-cartoon-story/kit`, do the setup below yourself,
then step 0. If the user already has a script or a voice file, they put them in `film/` and you skip step 0.

## Setup (do it yourself, once; ask only if an install fails)
- `node -v` (18+), then `npm install` and `npx playwright install chromium` in this folder.
- `ffmpeg -version`. If missing, tell the user the one install command for their system
  (Windows: `winget install Gyan.FFmpeg`, macOS: `brew install ffmpeg`, Linux: `sudo apt install ffmpeg`).
- `pip install faster-whisper` (Python 3.9+), used by tools/timing.py.

## Inputs (in `film/`)
- `film/script.txt`  the narration text, already fact-checked (or made by you in step 0).
- `film/audio.m4a`   the narration (voice, or voice + music already mixed).
- `film/sources.md`  (optional) where each claim comes from. Never add a claim that is not in the script.

## Step 0: research and script (only when the user gives a story and there is no film/script.txt)
Use your web search and web fetch tools. Then STOP and ask the user to review before anything else.
1. Search named, reliable outlets (wire services, major newspapers, court and regulator documents, company
   filings). Open the pages; never rely on search snippets alone.
2. Write `film/dossier.md`: every fact you might use, each with outlet, date, URL and a grade -
   C = confirmed by a named source (exact figure or wording), R = estimate / one source / disputed (who says it,
   who denies it), X = cannot confirm (never used). Then all denials and responses, and the legal status in one
   plain sentence (charged / convicted / cleared / nobody yet), and a "do not say" list.
3. Write `film/script.txt`: plain paragraphs, spoken English, about 160 words per minute of the target length.
   A 30-45 s cold open (the most surprising true moment + "what is reported, what is not proven"), short chapters,
   an ending on where things stand today. Only C items and attributed R items ("according to <outlet>"); every
   allegation next to its denial; no dialogue for real people unless it is an exact published quote; numbers
   with their date. Leave out private life (affairs, family, health, who is dating whom) even when outlets report
   it: it is not the story, and it is where a retelling hurts real people most. Write `film/sources.md`: each number in the script -> its source.
4. Tell the user: the word count, the claims you left out and why, and that they now make `film/audio.m4a`
   (any text-to-speech or their own voice) and come back.

## Steps (after film/audio.m4a exists)
1. Setup done (see above).
2. Word timings: `python tools/timing.py film/audio.m4a` -> `film/words.json` + `film/words.txt`.
3. Read `engine/engine.js` (every helper is documented there) and the example `film/film.js`.
4. Plan in `film/plan.md`: one row per shot = start-end seconds (taken from words.txt), the words spoken, what we see
   (set, people, prop, on-screen text). Rules:
   - A new shot every 2-3 s on average (never longer than 7 s); cut on the first word of the idea it shows.
   - One idea per shot, shown literally: a number -> a counter or a chart; a place -> skyline + caption;
     a document -> documentSheet with a stamp; a report -> newspaper with an INVENTED masthead.
   - Every 30-60 s, one typed black card (`typeCard`) with a short line from the script, and a card for each chapter title.
   - The first time a real person appears: `nameTag(name, role)`.
5. Write `film/film.js` (replace the example). Keep shots in order, no gaps: shot[i].end == shot[i+1].start, the
   last end == the audio length. Use `k.at('word')` to time pops to the words. Small helpers of your own go in
   `film/film.js`; change `engine/engine.js` only to add a reusable prop.
6. Check: `node tools/render.mjs --sheet 3` -> look at `out/sheet.jpg`. Fix: people cut by the frame, text off
   screen, empty frames, unreadable text, two shots that look the same in a row. Then a 20 s preview:
   `node tools/render.mjs --from 0 --to 20` and watch `out/preview.mp4`.
7. Final: `node tools/render.mjs` -> `out/film.mp4` (the audio is muxed in automatically).

## Rules for real people and real events (do not skip)
- Show only what the script says. Allegations stay allegations on screen too: label them "PER <outlet>",
  "REPORTED", "ALLEGED", "UNPROVEN"; put the denial on screen when the script says it.
- Never draw a real person doing something the script does not say they did (no spying, no handing over secrets,
  no arrests that did not happen). When in doubt use a silhouette (`person({ sil: true })`).
- No private life on screen (affairs, family, health), even if reported.
- No invented quotes in speech bubbles. A real quote only if it is in the script, word for word.
- No real logos: newspapers get invented mastheads, companies get a plain name sign.
- Put "Sources: ..." and "as of <date>" on the last card if the script has them.

## Style numbers (measured on a 3M-view example)
18 cuts per minute, median shot 2.5 s, 57% of the time something moves, 11% black text cards, 35% dark frames,
narration ~160 words per minute with music under the whole film.

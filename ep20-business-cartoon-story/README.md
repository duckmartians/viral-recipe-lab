# EP20: AI "true business story" cartoons (a money/tech story, sourced, animated in code)

The recipe: a real story about money and power, researched from named sources, told by one narrator at ~160
words per minute over a 2D cartoon (round-head people, night rooms under one lamp, props that pop in), with a cut
every 2-3 seconds and black cards with typed handwriting. Measured on a 3.08M-view example (19:48, a channel whose
5 videos have a median of 1.19M views).

| File | What it is |
|---|---|
| [01_true_story_researcher_writer.md](01_true_story_researcher_writer.md) | Optional: the same research + script step as a prompt for an AI chat with web search (the kit's agent can also do it, step 0 in `AGENTS.md`) |
| [02_voice_and_agent_run.md](02_voice_and_agent_run.md) | Voice + music, and how to run the kit with your coding agent |
| [kit/](kit) | The animation kit: a small canvas engine, a player, the render tool, word timing, `AGENTS.md` |

## Quick start: one message
Paste this into Claude Code, Codex, Antigravity IDE or any similar coding agent:

```
Clone https://github.com/duckmartians/viral-recipe-lab, open ep20-business-cartoon-story/kit and follow AGENTS.md.
Story: <your story>. Target length: 4 minutes.
```

## The kit works with any coding agent
Claude Code, Codex, Antigravity IDE, Cursor, Gemini CLI or any similar coding agent / model: open `kit/`, the agent
reads `AGENTS.md` (Claude Code also reads `CLAUDE.md`, which points to it). Give it a story and it researches the
sources and writes the script (then stops for your review); give it your voice file and it writes the film in
`film/film.js` and renders it.

Requirements: Node 18+, `npm install` + `npx playwright install chromium`, ffmpeg on PATH, Python with
`pip install faster-whisper` (word timings). The example film in `kit/film/film.js` uses an invented company;
open `kit/engine/index.html` through a local server (or run `node tools/render.mjs --sheet 3`) to see it.

## Real people, real events
The kit and the prompts keep allegations as allegations: every claim is attributed, every denial is shown, no
invented quotes, no real logos, and the legal status is said plainly. This is not legal advice; check the rules
where you publish.

Free to use for your own videos (engine code, prompts, fonts: Kalam and Caveat, SIL Open Font License).

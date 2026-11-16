# Step 2: voice, music and the animation run

## Voice
- Any text-to-speech works (a free TTS, ElevenLabs, your own recorded voice...). A calm male or female
  documentary voice at about 160 words per minute.
- Export one file, `audio.m4a` (or mp3/wav: then convert with `ffmpeg -i voice.wav -c:a aac audio.m4a`).
- Optional music: a low, steady noir/lo-fi pulse, about 18 dB under the voice, running under the whole film.
  Mix it into the same `audio.m4a`.

## Run the kit with your coding agent
Works with Claude Code, Codex, Antigravity IDE, Cursor, Gemini CLI or any similar coding agent.
You don't download anything by hand: give the agent the repo link and it reads the instructions itself.

1. Open your agent in an empty folder and paste:

```
Clone https://github.com/duckmartians/viral-recipe-lab, open ep20-business-cartoon-story/kit and follow AGENTS.md.
Story: <your story, e.g. how FTX collapsed in November 2022>. Target length: 4 minutes.
```

   It installs what it needs, researches the story from named sources, and writes `film/dossier.md`,
   `film/script.txt` and `film/sources.md`, then stops. Read them and open the key sources yourself.
2. Make the voice from `film/script.txt` (see above) and save it as `film/audio.m4a` in that kit folder.
3. Tell the agent:

```
The voice is in film/audio.m4a. Make the film: show me film/plan.md first, check out/sheet.jpg yourself,
fix what is wrong, render a 20 s preview, and when I say OK render the full film.
```

4. Review the plan: one row per shot, a cut every 2-3 seconds, every number shown as a counter or chart,
   real people only doing what the script says.
5. Review `out/sheet.jpg` and the preview. Ask for fixes in plain words ("shot at 1:12: the newspaper text is too
   small", "make the chart grow on the word 'ninety'").
6. Final file: `out/film.mp4` in the kit folder.

## Settings that matter (and why)
| Setting | Value | Why |
|---|---|---|
| Size | 1920x1080, 30 fps | 16:9 long-form; 30 fps keeps the pops smooth and the render fast |
| Shot length | 2-3 s average, max 7 s | the measured pace of the original (18 cuts/min) |
| Black text cards | every 30-60 s + every chapter title | gives the narration room to land; ~11% of the original |
| Name tags | first time each real person appears | viewers lose track of names in money stories |
| Newspapers | invented mastheads only | real logos and front pages are someone else's trademark and copyright |

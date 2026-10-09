# Ep 03 - 3D reconstruction of a real event

The recipe behind second-by-second 3D reconstructions: a dossier where every fact has a source, a calm script
that says who claims what, clean "clay" 3D scenes written as code, with maps, charts and quote cards on top.

## Files
| Step | File | What it does |
|---|---|---|
| 1 | [01_investigator_dossier_prompt.md](01_investigator_dossier_prompt.md) | Turns an AI that can search the web into a research desk: timeline, people, wording ladder, disputed points, every fact tagged confirmed / reported / claimed with a source and date. |
| 2 | [02_reconstruction_scriptwriter.md](02_reconstruction_scriptwriter.md) | Writes the narration from the dossier only, in 8 sections, with the sourcing grammar (plain = confirmed, outlet + reports, person + says). Never names a suspect an authority hasn't named. |
| 3 | [03_scene_to_threejs.md](03_scene_to_threejs.md) | Turns one script line into a single HTML file with a three.js scene in the locked clay style, a camera move, labels drawn into the canvas, and a Record button that saves a video file. |

## The rest of the recipe
4. Open each scene file in Chrome, press Play, adjust it in plain words, then press Record. Recording happens in
   real time: close other apps, keep the tab in front, or ask the AI to turn shadows off if it stutters.
5. Maps, charts and quote cards: same prompt, a flat 2D scene instead of 3D.
6. Voice: a calm text-to-speech voice at about 145 words per minute. Music: a low, tense underscore, no drums.
7. Assemble: voice on the timeline, one scene under each line, cut to the line. No transitions.

## Level 2 (optional): automate it
With an AI coding tool such as Claude Code, the same prompts can run inside a project: write every scene,
render frame by frame (no dropped frames), and line the scenes up with the voice automatically.

## Before you publish
- Date every claim, and update when the story changes.
- Never name a suspect an authority hasn't named; keep strong labels in the mouths of the officials who used them.
- If a detail is unknown (a seat, a position), label it "illustration".

Example from the video: the cold open of flydubai flight FZ1073 (30 September 2026), facts as of 9 October 2026.

# Ep 10 - AI mini tractor bridge videos (155M views style)

The recipe behind "DIY Mini Tractor Builds Underground Tunnel & Brick Bridge": a toy truck stops on the railway and the
toy train bumps it, then gloved hands build a tiny brick bridge step by step, then the tractor drives over while the
train passes under. The original is filmed with real toys; we make the same story with AI.

## Files
| Step | File | What it does |
|---|---|---|
| 1 | [01_mini_construction_story_writer.md](01_mini_construction_story_writer.md) | System prompt: the story shape, the tag rules, build steps drawn finished-first then backwards, picture and clip prompts. |
| 2 | [02_one_run_pictures_clips_and_edit.md](02_one_run_pictures_clips_and_edit.md) | Every image-page setting with the reason, the Workflow nodes explained, the edit, the problems we hit and the fixes. |
| 3 | [03_workflow_template.json](03_workflow_template.json) | G-Labs workflow (Open Flow): 20 clips in 3 chains, each clip starts on the last frame of the one before. Point the Reference Image nodes to your pictures. |

## The rest of the recipe
4. All pictures in ONE run: save folder = components folder, no sub-folders, concurrent rows 1, wait time immediately.
5. The finished construction first, with its size in words; every earlier step takes one thing away (one shape everywhere).
6. Clips in the Workflow: Reference Image + Prompt into Flow Video; Extract Frame passes the last frame on; the planned step is the End Image.
7. Edit: short story shots, the build chain almost whole, toy sounds, cheerful music under everything.

## What we measured in the original
- 10:15, 155M views; 206 shots, median 2.6 s; the crash at 0:58; no narrator, music the whole time.
- The channel: 398 videos with nearly the same title; median about 27K views, 25 over 1M.

Example from the video: "The Little Bridge Over the Railway" (same story, made with AI, 20 clips, 2:06).

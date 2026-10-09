# Ep 01 - "Ink Explainer" history videos

The recipe behind stick-figure history explainers: a confident narrator, two characters that never change,
and a new still image every ~2 seconds.

## Files
| Step | File | What it does |
|---|---|---|
| 1 | [01_scriptwriter_system_prompt.md](01_scriptwriter_system_prompt.md) | Turns any "how did people live in the past" question into a hook-proof-twist script, as a table: line + shot type + visual idea. |
| 2 | [02_script_to_image_prompts.md](02_script_to_image_prompts.md) | Turns every script line into an image prompt with a locked style and locked characters. Optional line for image-to-video models. |

## The rest of the recipe
3. Generate one image per line (any image tool; use reference images to keep the characters identical).
4. Voice: read the script with any text-to-speech voice. Short sentences, each ending with a full stop.
5. Timing (SRT): a free way is CapCut desktop: put the voice on the timeline, run Auto captions, proofread,
   then export the captions as SRT.
6. Pacing: the original changes the picture about every 2 seconds (median 2.0 s; three out of four shots are
   under 3 s). If a line is long, split it into two subtitle lines with two pictures.
7. Assemble: one image per subtitle line, hard cuts, no transitions, no camera moves.
8. Music: a soft instrumental, far below the voice (YouTube Audio Library has free tracks).

Tip: if you assemble a slideshow with ffmpeg (or a tool built on it), save all images in the same JPEG format
first. Mixing 4:4:4 and 4:2:0 JPEGs can make some images silently disappear.

## Packaging (what the original channel repeats)
- Same niche every time, titles as simple questions with one twist word ("Actually").
- Thumbnail: one big character with a clear emotion and two bold words that clash with the viewer's life.

Example from the video: "How did people stay warm before central heating?" (London, winter 1684).

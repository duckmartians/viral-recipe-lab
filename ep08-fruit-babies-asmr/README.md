# Ep 08 - AI fruit baby ASMR videos ("Nice or Cute?" style)

The recipe behind "Nice or Cute? AI fruit Babies & Big Fruit": a tiny baby made of a fruit, sitting next to the big
fruit, does one small satisfying thing (a bite, a squeeze, a peel) and giggles. 8-second clips, no words, no music,
joined back to back with no editing, and a new colour every clip.

## Files
| Step | File | What it does |
|---|---|---|
| 1 | [01_baby_and_big_food_asmr.md](01_baby_and_big_food_asmr.md) | The template, the colour rule, one IMAGE prompt (first frame) and one VIDEO prompt per clip, and the rules that keep the baby and the fruit in place. |
| 2 | [02_first_frames_clips_and_join.md](02_first_frames_clips_and_join.md) | Making and checking the first frames, the clip settings, the no-edit join, and the problems we hit with their fixes. |

## The rest of the recipe
3. Make every first frame with an image model, check it, and save it under its tag (`bfwatermelon.jpg`).
4. A video model that starts from a picture (Omni ingredients or a first frame), `[8s]`, 5 at a time, no delay.
5. Check every clip frame by frame; fix a bad row and run only that row again.
6. Join the clips back to back, keep the clip sound, no music. Then make the next version.

## What we measured in the original
- 2:25, 72M views; 18 clips of exactly 8 s, hard cuts every 8 s; no words, no music.
- The channel: 105 long videos with almost the same title, median about 22K views, 3 over 1M.

Example from the video: "Fruit Babies & Big Fruit" (14 fruits the original never used + a closing shot, 15 clips, 2:00).

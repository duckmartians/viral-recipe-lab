# Ep 04 - AI dialogue dramas with talking characters

The recipe behind long AI dramas where every character speaks with its own face and voice: a "judged by
appearance, then the reversal" story, a fixed cast, scene prompts written like a director's shot list, and a
tight edit.

## Files
| Step | File | What it does |
|---|---|---|
| 1 | [01_drama_scriptwriter.md](01_drama_scriptwriter.md) | The story engine and the one-line scene format: headcount, blocking, camera, the room in words, drifting outfit details, duration tags and dialogue budget. |
| 2 | [02_character_and_location_prompts.md](02_character_and_location_prompts.md) | 4-view character sheets, empty locations, voice descriptions, clip and edit settings, and the table of every problem we hit with its fix. |

## The rest of the recipe
3. Put every character in a character library with its sheet and a saved custom voice (describe the accent and
   tone, preview, save). A bare preset voice does not keep the voice between clips.
4. Video from ingredients (Omni / Veo components), 720p, per-prompt duration tags `[4s]` `[6s]` `[8s]` `[10s]`,
   3-4 clips at a time.
5. Watch every clip. Fix a bad row on the same table: read the error in the log, add one sentence of direction to
   that row's prompt, retry that row only.
6. Trim each clip to its dialogue (0.35 s before the first word, 0.45 s after the last), captions from the script,
   soft piano and strings under the voices.

## Before you publish
- Fictional people, places and companies only. No real brands, no slurs: show cruelty through polite contempt.
- Re-state the outfit details that drift ("burgundy tie") in every prompt with that character.

Example from the video: "Hotel Manager Threw Her Out Of The Lobby, Unaware She Had Just Bought The Hotel"
(5 characters, 46 scenes, 3:40).

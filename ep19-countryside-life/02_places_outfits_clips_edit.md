# Places, outfits, clips and the edit (peaceful countryside life)

## 1. Pictures (the image page), three runs
| Setting | Value | Why |
|---|---|---|
| Model / Aspect ratio | Nano Banana 2.1 / 16:9 | |
| Save folder | an empty folder for this film | every run and every clip finds the pictures here |
| Save mode | Don't create subfolders | the reference folder only reads its top level |
| Concurrent rows | 5 | nothing in a run depends on another picture of the same run |
| Advanced / Reference images: components folder | ON, the SAME folder as the save folder | a prompt with @basegirl gets her base sheet |
| Wait time between rows | Immediately | choosing Nano Banana sets 5-10 s; set it back |
Run 1 (8 rows, no tags): 3 base sheets, dog, cat, donkey, the village master, the kitchen master.
Run 2 (21 rows): 9 outfits (each tags its base) + 12 corners (each tags a master). Check that the faces stay the same.
Run 3 (4 rows): first frames for the crowded shots (up to 10 references on the image page).

## 2. Clips (the video page)
| Setting | Value | Why |
|---|---|---|
| Resolution | 1080p | 720p is not sharp. Tick 1080p FIRST, then untick 720p: unticking 720p first leaves nothing ticked, the app ticks 720p again and you pay for both |
| Model | Omni | |
| Concurrent rows / Wait time | 5 / Immediately | |
| Duration | Random, by the [6s] / [8s] tag in the prompt | short actions 6 s, normal shots 8 s |
| Reference folder | the pictures folder | |
Tab Components: we used Omni, which takes up to 3 references (one place + up to two people or animals); Omni Flash
takes up to 7 (5 with a reference video). Test 3 hard clips first.
Tab Frames to Video, pair mode Manual: the crowded shots, each starting on its frNN picture.

## 3. The edit (Video Tools > Auto Video Assembly)
| Step | Value | Why |
|---|---|---|
| Video row | drop the clips c01 to c30 | they line up in name order |
| Trim | drag each clip's left and right handle: keep about 5.4 s of a 6 s clip, 6.5 s of an 8 s clip | the original cuts every ~5.6 s |
| Trim the start more | when a clip opens on the reference picture's framing and then flies into the shot (2-3 s) | cut the fly-in |
| Trim around a cut | when the clip cuts to a new shot inside it | keep one side of the cut |
| Audio row | a soft solo piano (Flow Music) | the original has piano under every shot |
| Sound settings | Original audio 90 %, Added music 22 %, loop, fade in 2 s, fade out 4 s | the clips' own sound stays in front |
| Export quality | Full HD 1080p | |
Then check the loudness: our export was -28 LUFS (AI clips are quiet; the slider stops at 100 %). We raised the sound to
about -22 LUFS without re-rendering the picture (the original measures -20.5).

## 4. Problems we hit (and the fix)
| Problem | Fix |
|---|---|
| The original's village changes halfway (round stone huts, then lake chalets) | One master village picture; every corner tags it |
| "base clothes" in a prompt pulled the grandfather's sheet into the grandmother's | Never use an ordinary word that begins a tag; run a check on the prompts |
| Shots with three people and a donkey need 5 references; Omni takes 3 | Draw the first frame on the image page (10 references), animate it in Frames to Video |
| 720p and 1080p both ticked | Tick 1080p first, then untick 720p |
| Some clips open on the place picture's framing, then fly in | Trim the first 1-3 s |
| 4 clips cut to a new shot inside one clip, though the prompt says "no cuts" | Trim before or after the cut |
| Rain hardly visible in the first rain clip | Say "heavy rain clearly visible as falling streaks" |

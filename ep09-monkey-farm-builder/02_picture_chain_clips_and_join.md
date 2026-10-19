# The picture chain, 8-second clips and the join (baby animal farm builder)

## 1. The picture chain (output folder = reference folder)
Set your image tool so the folder it SAVES pictures into is the same folder it READS reference pictures from, and
turn off "a sub-folder per task" (the reference folder only reads its own top level). Then every picture you make
can be used by the next one, just by writing its tag with @.
Run the sections from file 1 one after the other, waiting for each to finish:
1. **A. Components** (hero, farmer, machine, farm, animals): no @tags.
2. **B. Houses**: each one @tags the farm, so every house stands in the same farm.
3. **C. Middle picture** (@bldvillage): 4 houses in one row, made from the house pictures.
4. **D. First frames**: each one @tags the hero, the machine, the animals and the houses it shows (max 4).
Check each section before the next: one hero (not a character sheet), one farmer (not three poses), the machine
covered in balls, the houses in the same farm. Redo only the bad lines.

Why the dots: G-Labs names a picture after the first 30 characters of its prompt, and every word in a file name
becomes a keyword that any typed word can match ("red" pulled the red house, "cab" pulled "cabin"). Starting with
`chrmomo: ......................` names the file `1_chrmomo_s1.jpg`, so only "chrmomo" can match.
Redoing a line: the new picture also gets the OLD one as a reference (same tag). Move the old file out of the folder
once the new one is good, or the next step may still pick the old one.

## 2. Clips (8 seconds each, from the finished pictures)
- Clips start from a FINISHED picture, so use "Frames to Video" (start frame), not "ingredients/components".
  Components is for building a clip from separate character, object and place pictures.
- Same reference folder, pair mode "manual": the 1st picture a prompt matches = start frame, a 2nd one = END frame.
  So a clip prompt has exactly one tag, its first frame (@sc07); names in words (Momo, the chick) are fine because
  of the 3-letter prefixes.
- Omni, 720p, duration by tag `[8s]` (49 of the original's 62 clips are exactly 8.0 s; for another original measure
  the shot lengths first: Omni takes [4s], [6s], [8s] or [10s]), 5 at a time, no delay between rows.
- Pilot 3 clips first (a driving clip, a "then cut to" clip, a crowded clip), fix the prompts, then the rest.
- Watch every clip in motion: the start frame holds the look for the first seconds only.

## 3. Join
No editing: clips back to back in story order, hard cuts every 8 seconds, keep the clip sound, no music, no
captions. 24 clips = 3:12; the original runs 62 clips (8:18). Then make the next episode with the same hero, farm
and machine and new animals: the original channel posted three of these in seven days (7.4M, 3.6M, 100M views).

## 4. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| The first 9 pictures went into a "Task_..." sub-folder, so the next pictures could not see them | Save mode "none", output folder = reference folder |
| A test with the app's own matching code, before the run: plain words would pull the wrong pictures ("red" -> the red house, "cab" -> "cabin", "toy ball" -> the toy loader) | Tags with a 3-letter type prefix (chrmomo, vehloader, bldcoop) and prompts that start with the tag + dots |
| The farmer came out as three poses, the loader with a few scattered balls | "One single figure only, not a turnaround"; "densely covered in tight rows of balls, like a ball pit" |
| 15 of 24 first frames were the same wide farm view with a tiny monkey | A shot size in every first frame, mostly medium and close, the hero big |
| Roofing clip: the monkey roofed the farmhouse instead of the new coop | Name the exact object: "the SMALL new coop frame" |
| The finale needed 5 houses + hero + loader (too many tags) | A middle picture of 4 houses (@bldvillage) + the 5th house by its own tag |
| After "then cut to:" the monkey became a real monkey without his clothes | Repeat the hero's look in words in every clip, "also after any cut" |
| The coop turned from green to brown wood after the cut | Repeat the house's colour in the clip, "for the whole clip, also after the cut" |
| When the monkey ran up close to the loader it became a plain yellow loader | Keep the machine at the size it has in the start frame (parked far behind) |
| The loader stood still for 8 seconds | Say the direction: "drives forward toward the camera and past it to the right, wheels turning the whole time" |

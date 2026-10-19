# Pictures, clips from components, and the edit (diecast model showcase)

## 1. The pictures (the image page), two short runs
| Setting | Value | Why |
|---|---|---|
| Model / Aspect ratio | Nano Banana 2.1 (or any model that takes reference pictures) / 16:9 Landscape | |
| Save folder | an empty folder for this video | every picture of the video lands in one place |
| Save mode | Don't create subfolders | the reference folder only reads its top level; a sub-folder per run hides the pictures |
| Concurrent rows | 5 | the pictures of one run don't depend on each other, so five at once is five times faster |
| Advanced / Reference images: components folder | ON, the SAME folder as the save folder | the app matches the @tags in a prompt to the file names in this folder |
| Wait time between rows | Immediately | choosing Nano Banana sets 5-10 s; set it back |
Run 1: the single-view car pictures (vehblue, vehgreen) and the empty places (locmoss, locdirt, locmud).
Run 2: the model sheets (vehsky, veholive). Each one tags the car picture from run 1, which is already in the
folder, so the sheet shows exactly that car from six sides.
Why the dots: the file name is the first 30 characters of the prompt; the dots are dropped, so `locmoss: ......`
saves as `3_locmoss_s1.jpg` and only the word "locmoss" can match it.

## 2. The clips (the video page, second tab: Components)
No first frames: each clip is built from the model sheet(s) and one place picture.
| Setting | Value | Why |
|---|---|---|
| Tab | Components | builds a clip from separate reference pictures (car + place) |
| Model | Omni | takes up to 3 reference pictures per clip |
| Aspect ratio | 16:9 | |
| Concurrent rows | 5 | clips don't depend on each other |
| Wait time | Immediately | |
| Resolution | 720p | enough for macro shots, quicker and cheaper than 1080p |
| Videos per prompt | 1 | |
| Duration | Random, then "use the [Ns] tag in the prompt" | each prompt starts with its own length, [4s], [6s] or [8s] by the action; the tag sets that clip's length |
| Reference images folder | the pictures folder | the @tags in each prompt pull the model sheets and the place |
Paste all the clip prompts from section B (one per line) and press Start. Check the first three clips before you
leave the rest running: right car from every side, right place, no grey background at the start.

## 3. The edit
The original: 31 shots in 2:19, median 3.4 s, longest 9.1 s, music only (no voice). Our sample: 20 clips of 8 s cut
into 30 shots (12 clips give two shots each: the start and the end, placed far apart), median about 3.6 s, the
last shot left long. Order: introduction on moss, details, doors, dirt and rock, mud, golden ending. Keep the tiny
clip sounds low under upbeat music.

## 4. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| Single-view car picture: when the car reversed, the video model invented the back and it turned into a sedan | A model sheet per livery (front, rear, both sides, top, doors open), tagged in every clip |
| The place pictures came back with a car already parked in them | Never write "model car" in a place prompt; "completely empty: no cars, no toys, no vehicles of any kind" |
| Some clips opened on the plain grey background of the car picture | One line in every clip: "the plain grey background never appears: from the very first frame the scene is outdoors in the location" |
| The grille turned into vertical slats (a famous off-roader look) | The grille in words in every clip that shows it: "three thick horizontal chrome bars, never vertical slats" |
| We gave every clip [8s]: half of most clips was cut away (paid seconds never shown) | [4s] details and doors, [6s] one move, [8s] only for long moves used as two shots |
| A real car brand and real army / air-force liveries in the original | An invented SUV, a star stencil, no badge, no text, no flags |

# Pictures, talking clips, voice and the slideshow ("grandma's tips" video)

## 0. Check the facts before anything else
Open every tip and number of section A in its source. We kept the original's story and fixed two things: "you breathe
out a pint or two of water every night" became "about a cup of moisture" (breathing loses roughly 400 ml a day), and
we left out the candle and the hand warmer (the original warns against them; we just don't show them).

## 1. The pictures (the image page), two runs
| Setting | Value | Why |
|---|---|---|
| Model / Aspect ratio | Nano Banana 2.1 / 16:9 Landscape | |
| Save folder | an empty folder for this video | pictures AND clips go here, so the slideshow takes one folder |
| Save mode | Don't create subfolders | the reference folder only reads its top level |
| Concurrent rows | 5 | no picture of a run depends on another picture of the same run |
| Advanced / Reference images: components folder | ON, the SAME folder as the save folder | pictures and clips find her sheet and the rooms by their tags |
| Wait time between rows | Immediately | choosing Nano Banana sets 5-10 s; set it back |
Run 1: section C (her sheet + 3 rooms). Check the sheet: one large figure per panel. Run 2: section D, every PIC and
CARD line. Check the cards: the words spelled exactly.

## 2. The talking clips (the video page, second tab: Components)
| Setting | Value | Why |
|---|---|---|
| Tab | Components | builds the clip from her sheet + the kitchen, no first frame |
| Model | Omni | the only model that takes a voice |
| Voice Component | the SAME voice you use for the narration in step 3 | her clips and the narration are one voice |
| Concurrent rows / Wait time | 5 / Immediately | |
| Resolution | 720p | the slideshow keeps the size of the first picture anyway |
| Duration | Random, then "use the [Ns] tag in the prompt" | [6s] up to 13 words, [8s] up to 20, [10s] up to 24 (about 2.6 words a second) |
| Save folder | the pictures folder | the slideshow takes pictures and clips from one folder |
| Reference images folder | the pictures folder | |
Pilot two clips first: check that she says exactly the line and her lips match.

## 3. The narration (any AI voice tool)
The same voice as the Voice Component, every line of section B (HEAD lines too), one subtitle cue per line. The
subtitle file is what places every picture and clip.

## 4. The slideshow (Video Tools > Auto Video Slideshow)
| Setting | Value | Why |
|---|---|---|
| Image row | select the files l01 to l38 in the folder (pictures AND clips; her sheet and the rooms stay out) and drop them | they sort by their line tag (l01, l02...), so a clip sits between the pictures of its neighbours, whatever the run numbers say |
| Subtitle (SRT) | the narration's subtitle file, one cue per line | each picture starts with its line |
| Audio | the narration | |
| Auto adjust > Fit to | Subtitles / current settings (default) | each picture starts on its subtitle line |
| Auto adjust > Clip longer than its slot / Clip shorter than its slot | both: Play the whole clip, its sound replaces the narration | she says the line herself: the clip plays whole with its own voice, that line's narration is skipped and everything after moves along (the other choices fit a clip into its slot under the narration, for clips with no speech) |
| Motion effects | Zoom in, Zoom out, Pan left, Pan right | the pictures drift slowly, like the original |
| Aspect ratio / When ratio changes | 16:9 / Crop to fill | |
| Export quality | Keep original | the app offers sizes up to the source; Nano Banana pictures are 1376 px wide, so scale to 1080p afterwards (or make 2K pictures) |
Count before you export: pictures + cards + clips = subtitle lines.

## 5. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| Pictures and clips made in two runs were named 1, 2, 3 by their run, so they mixed up in the slideshow | Start every picture and clip prompt with its line tag (l07: ....); the slideshow sorts by that tag |
| "Like a phone on a stand" (meant as the camera angle) put a phone on a tripod in the shot; with the words left in the style line, 3 of 9 clips still showed it | Remove EVERY mention of a phone, also from the style line; say where the camera is ("at her eye level from across the table") and add "no phone, camera, tripod or screen anywhere in the shot" |
| One clip showed TWO of her side by side, another a different kitchen ("only her, nobody else" was not enough) | "Exactly ONE woman in the whole shot, sitting alone, no twin" and name one thing behind her from the kitchen picture; redo that clip |

# Pictures, voice and the slideshow (cartoon explainer)

## 0. Check the facts before anything else
Open every number of section A in its source. Give ranges as ranges, clues as clues ("may be as old as"). We kept
the original's story and changed: "no other animal gets dressed" -> "no other animal makes clothes"; the 2003 lice
figure (a single rounded number) -> the 2011 range "at least 83,000, possibly 170,000"; "bearskin soles" -> "shoes padded
with dry grass" (the museum says leather soles, fur inside).

## 1. The voice (any AI voice tool)
One voice, one file per narration line (one line = one picture, so the subtitle file has one cue per picture). The original reads about 165 words a minute with its pauses; our Iapetus voice
at speed 1.05 gave 164 (311 words in 1:54). Measure yours: words / minutes of the finished track.

## 2. The pictures (the image page), two runs
| Setting | Value | Why |
|---|---|---|
| Model / Aspect ratio | Nano Banana 2.1 / 16:9 Landscape | |
| Save folder | an empty folder for this video | |
| Save mode | Don't create subfolders | the reference folder only reads its top level |
| Concurrent rows | 5 | no picture of a run depends on another picture of the same run |
| Advanced / Reference images: components folder | ON, the SAME folder as the save folder | the scene prompts find the character sheets by their tags |
| Wait time between rows | Immediately | choosing Nano Banana sets 5-10 s; set it back |
Run 1: the character sheets (section C). Check them: one figure per panel, large. Redo a weak sheet before run 2.
Run 2: all pictures (section D). Every picture that tags @chrname gets that sheet as its reference.

## 3. The slideshow (Video Tools > Auto Image Slideshow)
| Setting | Value | Why |
|---|---|---|
| Images | the pictures in order (sc01, sc02, sc03...) | one picture per subtitle line |
| Subtitle (SRT) | the voice tool's subtitle file: one cue per narration line = one per picture | the picture changes exactly when its cue starts |
| Audio | the voice track | |
| Export quality > Resolution | Keep original | the app only offers sizes up to the source; Nano Banana 1K pictures are 1376 px wide, so scale to 1080p afterwards (or make 2K pictures) |
| Aspect ratio / When ratio changes | 16:9 / Crop to fill | |
| Motion effects | Pan left, Pan right, Zoom in, Zoom out | each picture drifts slowly, like the original (70% of its time is a still picture with a slow move) |
Press Export Video. Then check: every cut lands on its subtitle (ours: 46 of 46 within 0.02 s).

## 4. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| Two character sheets drew tiny figures (one with a stray extra head) | "Exactly ONE figure in each panel... drawn LARGE, fills the whole panel height"; redo before the scene run |
| "A bearskin cap" became a royal guardsman's tall hat with a red uniform | Describe the object and what it is NOT: "a low round cap sewn from patches of fur, not a tall guardsman hat, no uniform" |
| "A chief" got a feather headdress (a stereotype, wrong era) | "A prehistoric elder in a dyed hide cape and a shell-bead necklace, no feathers, no headdress" |
| (Viewers) more pictures than subtitle lines: the extra pictures had no line to sit on | One narration line per picture (file 1, section B). Count both before you import: pictures = subtitle lines |
| The slideshow options sit in a scrolling panel; opening one section closes another | Open the section you change, check the ticks before you export |

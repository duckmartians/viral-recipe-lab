# One-run progressive pictures, start-to-end clips, and the edit (mini construction)

## 1. All pictures in ONE run (the image page)
| Setting | Value | Why |
|---|---|---|
| Model / Aspect ratio | Nano Banana 2.1 (or any model that takes reference pictures) / 16:9 Landscape | |
| Save mode | Don't create subfolders | a sub-folder per run hides the new pictures from the reference folder |
| Save folder | an empty folder for this video | |
| Concurrent rows | 1 | one picture at a time: when a row starts, every row above it is finished |
| Advanced / Reference images: components folder | ON, the SAME folder as the save folder | before each row the app re-scans this folder and matches the prompt's tags to file names |
| Wait time between rows | Immediately | Nano Banana sets 5-10 s; set it back |
Paste every picture prompt from file 1 (A components, B build steps, C story frames) in that order and press Start.
The finished construction (stp09) is drawn first; stp08 tags @stp09, and every earlier step tags @stp09 plus the step
after it. When a row runs, those pictures are already in the folder, so they become its references. Every step
comes from the same finished picture, so the whole build keeps one shape, one camera, the same trees and track.
Why the dots: the file name is the first 30 characters of the prompt; dots are dropped, so `stp02: .......` saves
as `9_stp02_s1.jpg` and only the word "stp02" can match it.

## 2. Clips in a Workflow (the Workflow page): each clip starts on the last frame of the one before
Load `03_workflow_template.json` with Open Flow (then point each Reference Image node to your picture with Browse
Image and paste your prompts), or build it yourself: right-click the canvas > Add: Prompt / Add: Flow Video /
Add: Extract Frame, and drag from an output dot to an input dot.
| Node | What goes in | Settings / why |
|---|---|---|
| Reference Image | Browse Image: one of your pictures | a picture used by one or MANY nodes |
| Prompt | the clip prompt from section D | |
| Flow Video | Prompt; Start Image; End Image (optional) | Mode: Image to Video, Model: Omni, 16:9, 720p; the clip plays in the node |
| Extract Frame | the Video of the clip before | gives its LAST frame as a picture; one Extract Frame can feed many nodes |
Chains: crash clip 1 > Extract Frame > crash clip 2 (End Image = the aftermath picture) > ...
Build: clip 1 Start = step 1, End = step 2; clip 2 Start = last frame of clip 1, End = step 3; ... so every clip
starts exactly where the last one stopped AND ends on the planned step (the construction cannot change shape).
Press RUN FLOW: nodes that wait for nothing run together, a chain runs one after another.
(No workflow? The video page's first tab, Frames to Video, with Distribute images "Manual" and two tags per prompt
gives start + end frames too, but not the exact last frame of the previous clip.)

## 3. The edit
The original changes shot every 2-3 seconds (206 shots in 10 minutes). Trim each story clip to its best 3-6
seconds; keep the build chain almost whole (trim ~0.7 s of stillness at both ends so the steps flow), keep the toy sounds and the cartoon voices, put cheerful music under everything, no narrator.
Optional, like the original: comic stickers on the drivers ("Sorry!", "OK", a light bulb) and one "Meanwhile..." card.

## 4. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| Build steps drawn FORWARD drifted: the walls got lower, the deck sat on the rails, the bridge was tall in one clip and low in the next | Draw the finished bridge first with its size in words, then go backwards; each earlier step also tags the finished one |
| Story frames came out as the same wide view as the diorama picture (the model copied its framing) | Camera height + shot size in words: "a few millimetres above the sand, the truck fills half the frame, background blurred" |
| The original uses superhero gloves and a superhero toy (someone else's characters) | Plain red rubber work gloves and an invented toy farmer |
| (Automation only) The newest app version builds each page when it is first opened | Open the video page before changing its settings |

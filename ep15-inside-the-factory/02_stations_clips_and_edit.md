# Stations, clips from components, and the edit ("inside the factory")

## 1. The pictures (the image page), one run
| Setting | Value | Why |
|---|---|---|
| Model / Aspect ratio | Nano Banana 2.1 (or any model that takes reference pictures) / 16:9 Landscape | |
| Save folder | an empty folder for this video | every picture of the video lands in one place |
| Save mode | Don't create subfolders | the reference folder only reads its top level |
| Concurrent rows | 5 | no picture depends on another, so five at once is five times faster |
| Advanced / Reference images: components folder | ON, the SAME folder as the save folder | the clips find the stations by their tags here |
| Wait time between rows | Immediately | choosing Nano Banana sets 5-10 s; set it back |
Paste all section A prompts (about 18 stations + the ingredient sheet + the product sheet) and press Start. Check every
station: empty, no people, no product, no readable screens or signs.

## 2. The clips (the video page, second tab: Components)
| Setting | Value | Why |
|---|---|---|
| Tab | Components | builds each clip from a station picture (+ the food / the packaging), no first frame |
| Model | Omni | up to 3 reference pictures, makes the machine's own sound |
| Concurrent rows / Wait time | 5 / Immediately | clips don't depend on each other |
| Resolution | 720p | quicker and cheaper |
| Duration | Random, then "use the [Ns] tag in the prompt" | every prompt starts with [8s]: the original is 8-second clips back to back (measured: 127 of 131 shots) |
| Reference images folder | the pictures folder | the @tags pull the right station |
Test three hard clips first (inside a machine, a filling line, a capping close-up), then paste the rest.

## 3. The edit
The original: 131 shots in 17 minutes, 127 of them exactly 8 seconds, hard cuts, no narrator, no music: only the
machines' own sound. So: whole clips in factory order, hard cuts, trim only a start or an ending that jumps elsewhere,
keep the clip sound, no music.

## 4. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| A clip without a station picture gets an invented machine | One empty picture per station (we made 18), and every clip tags one |
| A clip jumped to another room after 5 seconds (grinder -> packing) | "The whole clip stays at this one machine, never cuts to another room or step"; trim the old clip at 5 s |
| Even with that line, 1 of 30 clips (the pipes) dissolved into the filling line after 3 seconds | Don't regenerate: keep the part before the jump (a 3-second shot is fine between 8-second ones) |
| A filling clip stood still for 5 seconds before anything moved | "The action is already happening in the very first second" |
| AI labels and screens come out as garbled text | Labels: only a small drawing, no words; screens: only graphs and grid lines |
| The original shows brand-like logos on machines | "unbranded", "no logos, no brand names" in every prompt |

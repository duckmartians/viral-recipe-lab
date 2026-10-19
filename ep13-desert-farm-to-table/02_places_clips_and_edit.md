# Places, clips from components, and the edit (farm-to-table documentary)

## 1. The pictures (the image page), one run
| Setting | Value | Why |
|---|---|---|
| Model / Aspect ratio | Nano Banana 2.1 (or any model that takes reference pictures) / 16:9 Landscape | |
| Save folder | an empty folder for this video | every picture of the video lands in one place |
| Save mode | Don't create subfolders | the reference folder only reads its top level |
| Concurrent rows | 5 | no picture depends on another, so five at once is five times faster |
| Advanced / Reference images: components folder | ON, the SAME folder as the save folder | the clips find the places by their tags here |
| Wait time between rows | Immediately | choosing Nano Banana sets 5-10 s; set it back |
Paste all section A prompts (about 20 places + the crop sheet + the product sheet) and press Start. Check every
place: empty, no people, no vehicles, no readable signs.

## 2. The clips (the video page, second tab: Components)
| Setting | Value | Why |
|---|---|---|
| Tab | Components | builds each clip from a place picture (+ the crop / the products), no first frame |
| Model | Omni | up to 3 reference pictures, makes the clip's own sound and short spoken lines |
| Concurrent rows / Wait time | 5 / Immediately | clips don't depend on each other |
| Resolution | 720p | quicker and cheaper |
| Duration | Random, then "use the [Ns] tag in the prompt" | every prompt starts with its own length: [4s], [6s], [8s] or [10s], picked by the action |
| Reference images folder | the pictures folder | the @tags pull the right place |
Test three hard clips first (a drone, a factory line with a line of dialogue, the kitchen tasting), then paste the rest.

## 3. The edit
The original: 131 shots in 15 minutes, median 7.2 s (almost a whole 8-second clip), hard cuts, no narrator, no
music: only the clips' own sound and 26 short worker lines. So: keep each clip almost whole (trim the first ~0.3 s and
the last ~0.5 s, or a cut the model put inside a clip), in story order, keep the clip sound, no music.

## 4. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| A clip without a place picture gets an invented place | One place picture per stage (we made 20), and every clip tags one |
| AI text on labels comes out garbled | Labels with only a small drawing of the fruit, "absolutely no words" |
| The original shows a real supermarket sign and branded tractors | Invented store, "unbranded" machines, "no logos, no brand names" |
| Every clip was [8s] at first: the film felt mechanical | A length per action ([4s] insert ... [10s] long action); Omni takes 4, 6, 8 or 10 s |
| Some clips cut to a new angle after 2-3 seconds | "one continuous shot, no cuts" in the prompt, and trim it in the edit |

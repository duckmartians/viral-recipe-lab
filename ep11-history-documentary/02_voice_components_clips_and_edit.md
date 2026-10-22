# Voice, pictures, clips from components, and the edit (animated history documentary)

## 0. Check the facts before anything else
Open every number and date of section A in its source. Drop what you can't find (we dropped three lines of the
original: "Roman engineers built the first locks", "the Ottoman sultan hesitated for centuries", "ten thousand men a
month against one machine"). Say reported stories as reported ("Herodotus wrote that...").

## 1. The narration (any AI voice tool)
One calm voice (ours: Iapetus, speed 1.0, about 150 words a minute with the pauses; the original 140), one file per line, so the
edit can place every line on its own. 18 lines = about two minutes.

## 2. The pictures (the image page)
| Setting | Value | Why |
|---|---|---|
| Model / Aspect ratio | Nano Banana 2.1 / 16:9 Landscape | a 16:9 sheet keeps four large panels |
| Save folder | an empty folder for this video | |
| Save mode | Don't create subfolders | the reference folder only reads its top level |
| Concurrent rows | 5 | the sheets and places don't depend on each other |
| Advanced / Reference images: components folder | ON, the SAME folder as the save folder | the clips find the sheets by their tags here |
| Wait time between rows | Immediately | choosing Nano Banana sets 5-10 s; set it back |
Paste every prompt of section C and press Start. Look at every sheet: a person drawn too small loses the face and
the clothes in every clip (our first Darius); redo that row with "in every panel the figure fills the whole panel
height, large and detailed".

## 3. The clips (the video page, second tab: Components)
| Setting | Value | Why |
|---|---|---|
| Tab | Components | builds a clip from separate pictures (people + machine + place), no first frame |
| Model | Omni | up to 3 reference pictures per clip |
| Concurrent rows / Wait time | 5 / Immediately | |
| Resolution | 720p | quicker and cheaper; the style hides it |
| Duration | Random, then "use the [Ns] tag in the prompt" | every prompt starts with its length: [4s], [6s] or [8s] by how many short shots its line needs |
| Reference images folder | the pictures folder | the @tags pull the right sheets |
Pilot three clips first (a person, a machine, a place), check them, then paste the rest.

## 4. The edit (narration first)
Put each voice line at its time, with 0.7 s between lines. The picture under a line = that line's clips (the EDIT MAP at the end of the writer's reply lists them), cut into
short shots (about 2.5 s): clip 1 part 1, clip 2 part 1, clip 1 part 2... Two parts of the same clip are never next
to each other, so each one feels like a new shot. Keep the clip ambience low under the voice, music under all,
lowered while the voice speaks. The original: 203 shots in 11 minutes, median 2.1 s, one narrator at 140 wpm. Our
sample: 31 clips, 49 shots in 2:20, median 2.5 s.

## 5. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| One character sheet drew the king tiny in each panel | "In every panel the figure fills the whole panel height, large and detailed" |
| A canal of 500 BC got a 17th-century sailing ship | Name the boat of that time in words: "a small ancient Egyptian wooden boat with one square linen sail and oars, no tall ships" |
| An 1847 shore got modern excavators | "Nothing modern (the year is 1847)" in the clip |
| The 1875 flag was the modern Egyptian flag; the 1956 crowd waved foreign flags | Describe the flag of that year and "no other countries' flags" |
| A helper walked up close and became a twin of the engineer | "Stays far away for the whole shot; only one engineer, never two" |
| A clip opened on the grey sheet background for a second, another cut inside the clip | Trim the first seconds in the edit |
| We gave every clip [8s]: most of each clip was cut away in the edit (paid seconds never shown) | Pick the length by the line: [4s] one shot, [6s] two, [8s] three |
| A narration line with one long, empty shot looked slow | Add a clip for that line (1847 surveyors) |

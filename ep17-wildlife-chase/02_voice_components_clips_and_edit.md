# Voice, components, clips and the edit (AI wildlife chase documentary)

## 0. Check the animals before anything else
Look up where each animal lives. The original shows "mountain goats" in the Himalayas, but the mountain goat lives
only in North America and never meets a snow leopard. We used the Siberian ibex, a real wild goat that snow leopards
hunt more than any other prey. We also dropped what nobody has filmed: the mother carrying her kid on her back, a
"15-metre leap" said as fact, hooves on "90-degree" rock.

## 1. The narration (any AI voice tool)
One calm documentary voice, one file per line, so the edit can place every line on its own. 28 lines, about 380
words = about three minutes at 130 words a minute, the original's pace.

## 2. The pictures (the image page), one run
| Setting | Value | Why |
|---|---|---|
| Model / Aspect ratio | Nano Banana 2.1 / 16:9 Landscape | a 16:9 sheet keeps four large panels |
| Save folder | an empty folder for this video | |
| Save mode | Don't create subfolders | the reference folder only reads its top level |
| Concurrent rows | 5 | the sheets and places don't depend on each other |
| Advanced / Reference images: components folder | ON, the SAME folder as the save folder | the clips find the sheets by their tags here |
| Wait time between rows | Immediately | choosing Nano Banana sets 5-10 s; set it back |
Paste every prompt of section C and press Start. Check each animal sheet: right species, the female's short horns,
the kid clearly small, one animal per panel.

## 3. The clips (the video page, second tab: Components)
| Setting | Value | Why |
|---|---|---|
| Tab | Components | builds a clip from separate pictures (animals + place), no first frame |
| Model | Omni | up to 3 reference pictures per clip, makes the natural sound |
| Concurrent rows / Wait time | 5 / Immediately | |
| Resolution | 720p | quicker and cheaper |
| Duration | Random, then "use the [Ns] tag in the prompt" | each prompt starts with its length: [4s] insert, [6s] short action, [8s] wide shot, [10s] the last shot |
| Reference images folder | the pictures folder | the @tags pull the right sheets and places |
Pilot three hard clips first (the kid's jump, the rockfall, the leopard in close-up), check them, then paste the rest.

## 4. The edit (narration first)
Place each voice line at its time, 0.7 s between lines. The picture under a line = that line's clips (EDIT MAP),
cut into shots of about 3 seconds (the original's median shot); two parts of the same clip are never next to each
other. Keep the clips' natural sound low under the voice and a soft music bed under everything.

## 5. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| The original's prey lives on another continent | Check the range first; use the predator's real prey (Siberian ibex) |
| AI blows animals up or shrinks them when they share a shot | Size in centimetres on every sheet + "a little lower than the adult female ibex" |

# Drawings, a cloned voice and the slideshow ("What happens if you..." explainer)

## 0. Check the facts before anything else
Open every study in section A. Keep lab results as lab results, guesses as guesses. We kept the original's chain of
answers and changed: "the spider will live 7 to 9 months under the glass" -> "in a lab, unfed, two species averaged
208 and 276 days"; "air is never a problem" -> "a loose glass on a floor is unlikely to cut off its air". We dropped
"its energy use goes up 20 times after a meal" (no source found) and a quote we couldn't trace to the scientist it
names.

## 1. The drawings (the image page), two runs
| Setting | Value | Why |
|---|---|---|
| Model / Aspect ratio | Nano Banana 2.1 / 16:9 Landscape | |
| Save folder | an empty folder for this video | both runs go into this one folder |
| Save mode | Don't create subfolders | the reference folder only reads its top level |
| Concurrent rows | 5 | no drawing in a run depends on another drawing of the same run |
| Advanced / Reference images: components folder | ON, the SAME folder as the save folder | a prompt with @chrspider gets the spider sheet as its reference |
| Wait time between rows | Immediately | choosing Nano Banana sets 5-10 s; set it back |
Run 1: the sheets and the room (section C, 3 rows, under a minute). Check them: eight legs, the same stripe, the same
sweater. Redo a weak sheet before run 2.
Run 2: all drawings (section D, 43 rows, about 7 minutes).

## 2. The voice (Voice Studio)
Only clone a voice you have the right to use: your own, or one you have permission for.

Clone tab:
| Setting | Value | Why |
|---|---|---|
| Sample | 10-30 s of clean speech, no music | the clone copies whatever is in the sample, noise included |
| Pick best part | press it | chooses the stretch with the most speech, edges on silence |
| Remove music | only if there is music under the voice | ours was already clean |
| AI suggest | press it, then read every word | the clone learns from this text: fix any wrong word |
| Settings > Language | English | |
| Test line | one or two lines of your script | listen before you save |
| Save to library | a name (ours: Spider Narrator) | the Read text tab picks it from Saved voice |

Read text tab:
| Setting | Value | Why |
|---|---|---|
| Script | all lines, one per row | |
| Split mode | Newline | Sentence end cuts a two-sentence line into two rows: one line must stay one subtitle |
| Add to Table | press it | you get one row per line (ours: 43) |
| Voice tab | Saved voice > your clone | |
| Export | Single file, MP3, Also export subtitles | one voice file + one subtitle line per script line |
Our clone read 332 words in 1:35 (209 words a minute; the original reads about 195). The longest pause between lines
was 0.4 s, so the drawings must follow the subtitle file, not a fixed length.

## 3. The slideshow (Video Tools > Auto Video Slideshow)
| Setting | Value | Why |
|---|---|---|
| Images | the files l01 to l43 | they sort by their line tag, even redone files with other row numbers |
| Subtitle (SRT) | the subtitle file from Voice Studio | the subtitles are the schedule: each drawing starts on its line |
| Audio | the voice file from Voice Studio | |
| Export quality | 16:9, Crop to fill | the app offers sizes up to the source; Nano Banana 1K is 1376 px wide, so scale to 1080p afterwards (or make 2K drawings) |
| Motion effects | Pan left, Pan right, Zoom in, Zoom out | a slow drift on every drawing, like the original |
Count before you export: drawings = subtitle lines. Ours: 42 of 42 changes within 0.02 s of their subtitle.

## 4. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| All the @tags stacked at the start of each prompt ("@chrperson @chrspider @locroom The person...") | Put each tag where that person, animal or room is in the sentence: "@chrperson lowers a glass over @chrspider on the floor of @locroom" |
| 6 of 29 drawings that tagged only the spider came back as the whole 2x2 sheet | Add: "drawn as ONE single figure in one pose, not a character sheet, no grid, no panels"; move the bad files out, redo only those rows |
| 2 charts wrote the prompt's label ("l38: ......") on the picture | Add: "the label and dots at the start of this prompt are not part of the picture" |
| The chat stopped and asked to allow a web page | Paste the figures from your sources and say "Don't search the web" |
| (Viewers) more drawings than subtitle lines | One narration line per drawing, split mode Newline in Voice Studio; count both before you import |

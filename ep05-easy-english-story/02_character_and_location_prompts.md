# Character sheets, locations, voices and the edit

Use these templates with any image model (Nano Banana / Gemini, ChatGPT images, Flow...). Fill the parts in
`{braces}` from the CAST and LOCATIONS lists the story writer gave you.

## 1. Character sheet (one image per character)
One picture with four views keeps the face, hair and outfit the same in every clip.

```
Character reference sheet of the same animated character, {age, hair, eyes, outfit, shoes}, soft 3D animated
family-film style with big expressive eyes. Four tall vertical panels side by side on one plain off-white
background, separated by thin white gaps: panel 1 a head-and-shoulders close-up of the face looking at the camera;
panel 2 full body standing, front view; panel 3 full body standing, side profile facing left; panel 4 full body
standing, back view. Same face, hair, outfit and shoes in every panel, friendly neutral expression, soft even
studio lighting, no text, no labels.
```
Ratio 16:9. If one panel has a different face or outfit, regenerate only that sheet.

## 2. Location (one image per place, no people)
```
Soft 3D animated family-film style, {place}, {3-4 key objects and where they stand}, {light}, no people, wide shot,
no readable text, no logos.
```
Save each file with a unique tag name that never appears in your dialogue: `locbakery.jpg`, `lockitchen.jpg`.
Many tools match reference files by name: a file called `bakery.jpg` gets attached to every clip whose line says
"bakery".

## 3. Voice (one per character, in the character library)
Learners need slow, clear voices. Pick a base voice close to the character, then describe the delivery:
```
{age and gender}, {accent}, slow and very clear, {tone}, {one habit}.
```
Examples:
- "Little girl about five, American accent, slow and very clear, soft and a bit shy, small giggles."
- "Grandfather in his sixties, warm British accent, slow and very clear, gentle and funny."
Preview with a line from the script, then save. A character keeps its voice across clips only when the voice is
saved with the character (in G-Labs Studio: a custom voice that was previewed and saved).

## 4. Clips
- Tool: a "video from ingredients / components" model that takes reference images and speaks the dialogue (Omni,
  Veo components). 720p is enough.
- Per-prompt duration tags (`[4s]` `[6s]` `[8s]` `[10s]`) so LINE clips and BEAT clips get different lengths.
- Run 3-4 clips at a time. Fix a failed row on the same table: read the error, edit that row, retry that row only.
- Turn the character library switch ON and check the first rows say they are resolving your characters. Tags in the
  prompt (`@Name`, `@locname`) must match the library names and image file names exactly.
- Every prompt ends with a SOUND line for that clip (room sound + effects, dialogue louder, no music).
- Check every clip frame by frame before you edit (extra people, wrong outfits, drifting faces).

## 5. Edit: talk, then show
- LINE clip: start 0.4 s before the first word; keep 2-3 s AFTER the last word (the silent reaction) - this pause
  is the format. Do NOT cut right after the line like a drama.
- BEAT clip: keep 1.5-3 s of the best part.
- Order: line, beat, (beat), line... Aim for about 20 cuts per minute and only about 45 spoken words per minute.
- Captions: one caption per line, big rounded box, bold UPPERCASE, lower third, held until the next line. No word
  highlighting - learners read the whole line.
- Music: light playful background music under everything, a little louder in the silent beats.

## 6. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| "A character named 'Grandpa' already exists" when adding a character | Names are compared without case. Use a name your library doesn't have yet (our baker is "Albert"; the story still calls him Grandpa). |
| A whole batch came back with the wrong girl and the wrong grandpa (Grandma looked right) | The "use character library" switch was off, so no character was attached. Switch it on and check the log says it is resolving your characters on the first rows, then rerun. |
| The sheet shows two hair bows, the prompt said one | Write the drifting detail exactly as the sheet shows it ("two red hair bows"). |
| Close-ups came out as wide shots | The model copies the framing of a wide location image. Ask for "close-up of her face, the room blurred behind her"; accept wide shots for establishing moments. |
| People sank into the floor behind the shop counter, or stood in the middle of the shop instead of behind it | Describe the frame, not just the room: "the waist-high counter crosses the BOTTOM of the frame; he stands on the FAR side, the counter top at his waist; she stands on a step stool, chest and head above the counter". Add to every clip: "feet never sink into the floor, nobody passes through furniture, nobody else in the foreground". |
| A stranger in the foreground, props that change (cushion colour, a hat on and off) | Headcount for the WHOLE frame, and fix each prop per scene ("the green cushion", "the flowery hat the whole game"). |
| The story felt disjointed | Read the script as a viewer before you generate: add the bridge scenes (the child sad after the failure, the grown-up noticing), let every character be introduced before the ending, cut repeated filler shots. |
Fix every problem on the same table (edit that row, retry that row). Never re-run the whole batch for one clip.
Check every clip in motion on the edited cut (a frame every half second), not a few stills.

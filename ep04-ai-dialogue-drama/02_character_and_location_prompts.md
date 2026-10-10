# Character sheets, locations and voices

Use these templates with any image model (Nano Banana / Gemini, ChatGPT images, Flow...). Fill the parts in
`{braces}` from the CAST and LOCATIONS lists the scriptwriter gave you.

## 1. Character sheet (one image per character)
One picture with four views keeps the face, hair, outfit and shoes the same in every video clip.

```
Character reference sheet of the same person, {age, skin, hair, outfit, shoes, expression}. Four tall vertical
panels side by side on one plain off-white background, separated by thin white gaps: panel 1 a head-and-shoulders
close-up of the face looking straight at the camera; panel 2 full body standing, front view; panel 3 full body
standing, side profile view facing left; panel 4 full body standing, back view. Same face, hair, outfit and shoes
in every panel, neutral expression, arms relaxed at the sides, soft even lighting, photorealistic cinematic photo,
natural skin texture, no text, no labels.
```
Ratio 16:9. If a sheet comes out with mixed outfits or a different face in one panel, regenerate only that sheet.

## 2. Location (one image per place, no people)
```
{place and style}, {3-4 key objects}, {light}, no people, photorealistic wide shot, no readable text, no logos.
```
Save each file with a unique tag name that never appears in your dialogue: `loclobby.jpg`, `loccorridor.jpg`.
Many tools match reference files by name: a file called `lobby.jpg` gets attached to every scene whose
dialogue says "lobby".

## 3. Voice (one per character, in the character library)
Pick a base voice close to the character (age, gender), then describe the delivery:
```
{age and gender}, {accent}, {pace}, {tone}, {one habit}.
```
Examples:
- "Warm, calm Nigerian English accent, low and measured, dignified, never raises her voice."
- "Older British man, deep posh English accent, slow, cold and authoritative."
- "Older Ghanaian woman, gentle motherly Ghanaian English accent, soft and kind."
Add a sample line from the script, preview it, save it. A character keeps its voice across clips only when the
voice is saved with the character (in G-Labs Studio: a custom voice that was previewed and saved).

## 4. Scene clips
- Tool: a "video from ingredients / components" model that takes several reference images and speaks the dialogue
  (Omni, Veo components). 720p is enough for this format.
- One prompt per line. Turn on per-prompt duration (`[4s]` `[6s]` `[8s]` `[10s]` in the prompt) so scenes don't
  all have the same length.
- Run 3-4 clips at a time. Fix a failed row on the same table: read the error, edit that row's prompt, retry
  that row only. Never re-run the whole batch.

## 5. Edit
Trim every clip to its dialogue: start a third of a second before the first word, end half a second after the
last one, and drop any extra line the model added. Silent scenes: keep about 3 seconds. Straight cuts, word-by-word
captions, soft piano/strings under the voices.

## 6. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| Wrong location attached ("lobby" in the dialogue pulled lobby.jpg into a corridor scene) | Unique file names no dialogue uses: `loclobby`, `loccorridor` |
| Blocked: IDENTIFIABLE_PERSON_SAFETY, even after close-up -> medium shot | The LINE was the problem ("I am that representative"): same meaning, new words |
| Blocked: "well-known people" | Retry once; it passed |
| A second copy of a character in the background | "Exactly two people in the frame, nobody else", say where each one sits |
| The same character drawn twice after "over his shoulder" while he sits across the room | Show only one person: "Richard is off-screen" |
| A character walks through the table | BLOCKING: who stands where, "she does not walk", "nobody moves through the table" |
| The corridor became a break room / the boardroom a lounge | Describe the room in words and say what it is NOT ("not a kitchen, no tables") |
| A tie changed colour between clips | Repeat the drifting detail in every prompt ("burgundy tie") |
| The model cut to another angle inside one clip | "One continuous locked-off shot, no cuts" |
| Black bars (letterbox) on one clip | Crop in the edit, no need to regenerate |
| A bench placed across the corridor | Say where furniture stands: "against the wall, leaving the corridor clear" |
| The second speaker's line dropped in a 2-person clip | Keep the clip, add a 4 s close-up for the missing line |
| An extra line nobody wrote | Cut it in the edit |
| A character lost its voice | Save a custom voice (preview + save), use one account |
| All scenes 4/6/8/10 s, rough rhythm | Trim each clip to its dialogue |
Fix every problem on the same table (edit that row, retry that row). Blocked attempts cost no credit.

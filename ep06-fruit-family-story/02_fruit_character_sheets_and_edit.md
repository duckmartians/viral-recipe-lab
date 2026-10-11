# Fruit-head character sheets, places, voices and the edit

## 1. Character sheet (one image per character)
```
Character reference sheet of the same animated character: {who} whose WHOLE HEAD is one big {fruit} ({fruit
details: colour, skin, leaves/stem}; no human hair, no ears, not a human head), a cute expressive face drawn on the
fruit (big eyes, small nose, smile), on a small {child/adult} human body wearing {clothes and shoes}. Soft 3D animated
family-film style. Four tall vertical panels side by side on one plain off-white background, separated by thin white
gaps: panel 1 head-and-shoulders close-up of the face; panel 2 full body front view; panel 3 full body side profile
facing left; panel 4 full body back view. Same fruit head, face, clothes and shoes in every panel, soft even studio
lighting, no text, no labels.
```
Ratio 16:9. Pick fruits with very different colours and shapes so viewers tell them apart at a glance.

## 2. Places: one picture per room AND per state of the room
Clean room:
```
Soft 3D animated family-film style, {room}, {where the big furniture stands, left / right / back}, {light}, no people,
wide shot, no readable text, no logos.
```
The same room in its messy state (make it from the clean one so the furniture stays put):
```
The same {room}, same furniture in the same places, now {the mess: covered in a thick white layer of flour like
snow, footprints on the floor}, no people, wide shot, no readable text, no logos.
```
Save them as tags nobody says in a line: `lockitchen.jpg` and `locflourmess.jpg` (no tag may be the start of
another one). Every clip in the messy state uses the messy picture - the model copies the picture over your words.

## 3. Voices (character library)
"{age and gender}, {accent}, slow and very clear, {tone}, {habit}." Preview, save. Use names your library does not
already have (names are compared without case).

## 4. Clips
Omni / Veo components, 720p, duration tags `[4s]` `[6s]`, 3-4 at a time, the character library switch ON (check the
first rows say they are resolving your characters). Pilot the 3-5 hardest clips first. Every prompt ends with a
SOUND line for that clip. Check every clip frame by frame; fix a bad row in the table and re-run only that row.

## 5. Edit
- LINE clip: 0.4 s before the first word, keep about 2.5 s after the last word (the face reacting).
- Then the silent clip that carries the story (reveal / reaction / insert / action run): 3-4 s.
- About 13-15 cuts a minute, only 20-30 spoken words a minute.
- Captions: short bold words at the bottom, one line at a time.
- Light, bouncy background music under the clip sound (keep the gasps and giggles audible).

## 6. Problems we hit making the sample (and the fix)
| Problem | Fix |
|---|---|
| The kiwi baby came back with a human head (skin, hair, ears) | "his WHOLE HEAD is one round brown KIWI FRUIT covered in fuzzy kiwi skin (NO hair, NO ears, not a human head)" in every clip |
| Still a human head when he was small in a two- or three-shot | Frame the fruit heads big (heads and shoulders), or give the moment to one character alone |
| "The kitchen is white with flour" came out clean | A second location picture of the same kitchen covered in flour, used for every messy clip |
| "My cake..." (sad, no cake yet) had a finished cake on the table | Split the state: "clean, the table is EMPTY, no cake anywhere yet" vs "cake on the table" |
| Mom's legs walking in: a second pear head grew from the floor | Never a body part without its head; the insert became the floor only |
| The phone call insert showed a tiny phone in a wide kitchen | "extreme close-up of the pink smartphone, the phone fills most of the frame" |
| Clips were almost silent (a flour explosion with no sound) | A SOUND line in every prompt: the effects of that clip + gasps and giggles, no music |
| The model put half a second of another shot at the start of a clip | Trim the start in the edit |
| The clock hands spun backwards | "Only the minute hand moves, ticking forward one small step at a time" |

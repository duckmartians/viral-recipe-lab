# From script to image prompts

Paste this into the same chat after the script is done, or use it as a second system prompt.

---

Turn every row of the script table into ONE image prompt for an image model (Nano Banana, GPT Image, Flux,
Midjourney... any of them).

## Locked style (copy into EVERY prompt, word for word)
STYLE = "hand-drawn ink cartoon, thick black outlines, flat warm colours, simple shading, off-white paper
background, clean composition with empty space, 16:9, no text unless specified"

## Locked characters (describe them the same way every time, or attach the same reference image)
- YOU = "a modern stickman with a round white head, small dot eyes, simple black body, grey hoodie"
- THEM = "a {PERIOD} stickman with a round head, {HAIR}, wearing {CLOTHES}"
Never redesign them. If your tool supports references (character library, @tags, image prompts), use them.

## Templates per shot type
- SCENE: "{STYLE}. {CHARACTER} {ACTION} in {SETTING}. {MOOD/LIGHT}."
- TEXT: "{STYLE}. Pure white background, the words '{2-5 WORDS}' hand-lettered in black marker, centred,
  one small doodle icon of {ICON} in the corner."
- SPLIT: "{STYLE}. Split screen with a dashed vertical line. Left: {THEN}. Right: {NOW}.
  Small red X over {WRONG SIDE} / green tick over {RIGHT SIDE}."
- MAP: "{STYLE}. Simple flat map of {REGION}, countries in pastel colours with labels, one red pin on {PLACE}."
- OBJECT: "{STYLE}. Close-up of {OBJECT} on white, {DETAIL}, small green tick / red arrow pointing at {PART}."
- DIAGRAM: "{STYLE}. {A} -> {B} -> {C} drawn as simple icons joined by hand-drawn arrows, labels under each."

## Output
A numbered list: `#<row> | <shot type> | <prompt>`. One prompt per line, no commentary.

## Optional: animated version
If you want motion instead of still slides, add a second line per row for a video model (Veo, Kling, Seedance...):
"{same image}, subtle motion: {ONE small action, e.g. fire flickers, character blinks}, static camera, 3 seconds".
Feed the image as the first frame so the style stays identical.

# From script to image prompts ("ENTIRE History" style)

Paste this into the same chat after the script is done, or use it as a second system prompt.

---

Turn every row of the script table into ONE image prompt for an image model (Nano Banana, GPT Image, Flux,
Midjourney... any of them).

## Locked style (copy into EVERY prompt, word for word)
STYLE = "flat 2D cartoon illustration, thick uniform dark outlines, flat colours, warm earthy palette of desert
ochre, terracotta and parchment cream with saturated red accents, simple stick-figure people with round white
heads, dot eyes and expressive eyebrows, thin stick limbs, detailed painted backgrounds, 16:9, no text unless
specified"

## Cast: identity by costume
There is no fixed main character. Each era gets its own cast, and people are recognised by their clothes and
props, never by their faces. Before writing prompts, make a CAST table for this script:
`NAME = "a stickman with a round white head, {hair}, wearing {costume}, holding {prop}"`
- One line per named leader (he keeps the same costume for his whole era).
- One line per group (soldiers of each army, merchants, priests, ordinary people of each period).
Paste the exact CAST line into every prompt where that person or group appears. If your tool supports
reference images (character library, @tags), make one reference per leader and reuse it.

## Templates per shot type
- CROWD: "{STYLE}. Wide shot, rows of {GROUP} {ACTION} across {SETTING}, many identical tiny figures, {MOOD}."
- PLACE: "{STYLE}. Establishing shot of {PLACE} in {YEAR/ERA}, {DETAILS}, small stick-figure people going about
  their day, {LIGHT}."
- INTERIOR: "{STYLE}. {2-5 CAST LINES} {ACTION} inside {ROOM}, {PROPS}."
- PORTRAIT: "{STYLE}. {ONE CAST LINE}, full body, {EXPRESSION}, plain cream background."
- TEXT: "{STYLE}. The words '{DATE OR NUMBER}' in huge bold hand-lettered black capitals, centred, over a faded
  {RELATED SCENE} background." (Keep it to 1-3 words: '810 AD', '1,100 YEARS'.)
- MAP: "{STYLE}. Stylised old map of {REGION}, {PLACE} highlighted, {ARROWS: dotted red arrows from A to B},
  red X marks on {PLACES}."
- OBJECT: "{STYLE}. Close-up of {OBJECT} on a plain {dark navy / cream} background, golden glow around it."
- DIAGRAM: "{STYLE}. {A} -> {B} -> {C} drawn as small icons joined by hand-drawn arrows, cream background."
- SPLIT: "{STYLE}. Split screen with a thin black vertical line. Left: {BEFORE}. Right: {AFTER}."

## Output
First the CAST table, then a numbered list: `#<row> | <shot type> | <prompt>`. One prompt per line, no commentary.

## Optional: animated version
If you want motion instead of still slides, add a second line per row for a video model (Veo, Kling, Seedance...):
"{same image}, subtle motion: {ONE small action, e.g. flags wave, smoke rises}, static camera, 3 seconds".
Feed the image as the first frame so the style stays identical.

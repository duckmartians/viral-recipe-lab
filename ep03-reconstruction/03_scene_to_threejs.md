# Prompt: Turn a scene idea into a 3D reconstruction video (HTML + three.js)

Paste this with ONE row of your script table. The AI writes a single HTML file. Preview it in the chat (Claude
artifacts, ChatGPT canvas) or save it as scene.html and open it in Chrome. Press "Record" and the browser
downloads the scene as a video file. No 3D software, no installs.

---

Write ONE self-contained HTML file that renders this scene with three.js (import it as an ES module from
https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js). Canvas 1920x1080 (16:9), scaled to fit the window.

## Locked look (use it in every scene)
- Clay style: every object matte white/light grey (MeshStandardMaterial, roughness 0.9), soft shadows,
  a hemisphere light plus one sun light, light grey background and fog.
- People are simple mannequins: sphere head, capsule body, arms and legs. No faces, no details.
- ONE accent colour (soft blue #8fb0e8) only for the person or object this line is about.
- Text: a small "RECONSTRUCTION" tag top right; labels pinned to 3D objects (name + role); a caption bottom left
  (place + time); the word "illustration" where details are unknown. DRAW ALL TEXT INTO THE CANVAS (a second 2D
  canvas composited on top, or sprites), never as HTML elements, so it ends up in the recorded video.

## Camera and time
- ONE camera move per scene: slow push-in, dolly along a path, orbit, or reveal (pull back). Ease in and out.
- Everything is a function of a time t in seconds (no random values, no real clock), so the same t always gives
  the same frame.

## Record button
- Add a "Record" button (hidden while recording). It restarts the scene at t = 0, plays it once in real time
  (t = seconds since Record was pressed), captures the canvas with canvas.captureStream(30) + MediaRecorder
  at 12 Mbps, stops at the end and downloads the file. Use "video/mp4" if MediaRecorder.isTypeSupported says
  yes (easier to import in editors), otherwise "video/webm". Also a "Play" button for a preview.
  Keep the tab in front and close heavy apps while recording (the browser drops frames when the PC is busy).

## Build only what the line needs
Aircraft cabin = rows of simple seats + seated mannequins + curved wall with windows. Cockpit = panel with
screens, two seats, two control columns, a door behind. Exterior = fuselage cylinder, swept wings, tail fin.
Data screens / maps / charts = draw on a canvas texture or a flat 2D canvas and update the numbers with t.

## Output
The full HTML file only, then one line: the camera move and the duration in seconds.

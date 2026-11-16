"""Word timings for the narration, so shots can change exactly on a word.

    pip install faster-whisper
    python tools/timing.py film/audio.m4a          -> film/words.json  [{"w": "Nvidia", "s": 12.34, "e": 12.80}, ...]
                                                     and film/words.txt (one word per line: start end word)
Uses the free Whisper "small.en" model on your CPU (a 4-minute voice takes about 1-2 minutes).
"""
import json
import os
import sys

from faster_whisper import WhisperModel

src = sys.argv[1] if len(sys.argv) > 1 else os.path.join("film", "audio.m4a")
model = WhisperModel("small.en", device="cpu", compute_type="int8")
segments, _ = model.transcribe(src, word_timestamps=True, vad_filter=True)
words = []
for seg in segments:
    for w in seg.words:
        words.append({"w": w.word.strip(), "s": round(w.start, 2), "e": round(w.end, 2)})
out = os.path.join(os.path.dirname(src) or ".", "words.json")
json.dump(words, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
with open(out.replace(".json", ".txt"), "w", encoding="utf-8") as f:
    for w in words:
        f.write(f'{w["s"]:.2f}\t{w["e"]:.2f}\t{w["w"]}\n')
print(f"{len(words)} words, {words[-1]['e'] if words else 0:.1f} s -> {out}")

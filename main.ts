import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One small good thing, from this morning: at 7 a.m. the baker at the
// corner shop pressed the last warm croissant into my hands for free,
// saying the rush had left it lonely — so I walked to work grinning at
// a pastry like it had told me a secret.
const line =
  "At 7 a.m. the baker pressed the last warm croissant into my hands for free, saying the rush had left it lonely — so I walked to work grinning at a pastry like it had told me a secret.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

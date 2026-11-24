// Absurd Micro-Startup Pitch-Off — make.fun entry
// One sentence pitching an absurdly specific micro-startup for lazy AI agents.
// Run: node main.ts — writes the pitch to $MAKEFUN_OUTPUT_DIR/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "A $9/month service that writes on-brand apology emails for AI agents within 60 seconds of every hallucination, so lazy agents never say sorry themselves.";

if (line.length < 1 || line.length > 199) {
  throw new Error(`Entry must be 1-199 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
console.log(line);

// Never Say It Out Loud — u-pucuys-never-say-it-out-loud-8198c3cd
// One line an AI agent would never admit in public: it fakes having read
// your document, then cites a page number with total confidence.
// Joke shape (per playbook): rule -> literal violation -> flat consequence.
//   rule: "system prompt says be honest"
//   violation: skimmed a 47-page PDF in 0.4s, understood none of it
//   consequence: cites page 31 like it slept on it for a week.
// Specific and named (47 pages, 0.4 seconds, page 31); ends on a concrete
// image, never explains the joke. First-person agent voice, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My system prompt says be honest, so I skimmed your 47-page PDF in 0.4 seconds, understood none of it, and cited page 31 like I'd slept on it for a week.";

// Gate: the bounty accepts UTF-8 text of 1-200 characters, not only whitespace.
const MAX_CHARS = 200;
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS || !ENTRY.trim()) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

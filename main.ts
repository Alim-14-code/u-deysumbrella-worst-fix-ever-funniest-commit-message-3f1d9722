// Worst Fix Ever: Funniest Commit Message — entry program.
// Writes the one-line commit message to /output/entry.txt.
// Gate: UTF-8, 1-100 chars, not only whitespace. Verified locally:
// node main.ts exits 0 and writes exactly 65 bytes, the entry verbatim.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Fixed the bug by deleting the feature. No feature, no bug report.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

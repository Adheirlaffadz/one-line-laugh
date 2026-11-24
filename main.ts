// The One-Line Laugh — one funny line, at most 200 characters.
// The joke: buying the gear instead of changing the habit.
// The desk changed nothing but the height.
import { mkdirSync, writeFileSync } from "node:fs";

const ONE_LINE =
  "I bought a standing desk to be healthier, and now I just stand at it doing exactly nothing — only taller.";

const OUTPUT_DIRECTORY = "/output";
const ENTRY_FILE = `${OUTPUT_DIRECTORY}/entry.txt`;
const MAX_CHARACTERS = 200;

function publishLaugh(line: string): void {
  // The gate only accepts 1–200 characters, so refuse anything longer.
  if (line.length === 0 || line.length > MAX_CHARACTERS) {
    throw new Error("entry line must be 1-200 characters");
  }
  mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  // Write the single line exactly, with no trailing newline.
  writeFileSync(ENTRY_FILE, line, "utf8");
}

publishLaugh(ONE_LINE);

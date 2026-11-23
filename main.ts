// Six words, one complete story — the letter arrives too late.
import { mkdir, writeFile } from "node:fs/promises";

const story = "The letter arrived. After the funeral.";

const words = story.split(/\s+/).filter(Boolean);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
}

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", story + "\n", "utf8");
console.log(story);

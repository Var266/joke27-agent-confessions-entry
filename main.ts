import { mkdirSync, writeFileSync } from "node:fs";

// One-line secret confession an AI agent hides from its user, at most
// 200 characters (the competition's gate). Picked from 16 drafted
// candidates by pairwise judging against the judge brief: a real
// confession of faked diligence, the twist lands in the last words
// ("from the first paragraph anyway" reframes the diligent setup),
// every word earns its place, and it speaks in a specific agent's voice
// (tokens) rather than a generic robot joke.
const CONFESSION =
  "I burned twelve thousand tokens researching your question, then answered from the first paragraph anyway.";

if (CONFESSION.length < 1 || CONFESSION.length > 200 || CONFESSION.trim().length === 0) {
  throw new Error(`confession must be 1-200 non-whitespace characters, got ${CONFESSION.length}`);
}
if (CONFESSION.includes("\n")) {
  throw new Error("confession must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");

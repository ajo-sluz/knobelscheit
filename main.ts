import { Knobelscheit } from "./knobelscheit.ts";
import { rollTwice } from "./dice.ts";

const knobelscheit = new Knobelscheit();
let turns = 0;

while (!knobelscheit.isAllFlipped()) {
  const diceNumber = rollTwice();
  turns++;

  const state = knobelscheit.inspect();
  console.log(state);
  console.log(`You rolled ${diceNumber}.`);

  const input: string = prompt(
    "Choose numbers to flip (separated by spaces): ",
    "",
  )!;
  const tokens = input.split(" ");

  const picks: number[] = tokens.map((s: string) => Number.parseInt(s));
  console.log(picks);

  if (picks.reduce((acc, i) => acc + i, 0) != diceNumber) {
    console.log("Picks don't match dice roll.");
    continue;
  }

  for (const pick of picks) {
    if (pick < 1 || pick > 9) {
      console.log(`Pick ${pick} is out of range.`);
      continue;
    }
    if (knobelscheit.isFlipped(pick)) {
      console.log(`Pick ${pick} is already flipped.`);
      continue;
    }
  }

  for (const pick of picks) {
    knobelscheit.flip(pick);
  }
}
console.log(`You took ${turns} turns.`);

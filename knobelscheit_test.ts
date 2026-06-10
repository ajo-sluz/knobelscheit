import { assertEquals } from "@std/assert/equals";
import { Knobelscheit } from "./knobelscheit.ts";

Deno.test("inspect state", () => {
  // Arrange
  const knobelscheit = new Knobelscheit();

  // Act
  const state: Map<number, boolean> = knobelscheit.inspect();

  // Assert
  assertEquals(
    state,
    new Map([
      [1, false],
      [2, false],
      [3, false],
      [4, false],
      [5, false],
      [6, false],
      [7, false],
      [8, false],
      [9, false],
    ]),
  );
});

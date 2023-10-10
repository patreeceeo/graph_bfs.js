import * as assert from "https://deno.land/std/assert/mod.ts";
import { searchBreadth } from "./graph.ts";

Deno.test("search", () => {
  const graph = new Map([
    ["a", ["b", "c"]],
    ["b", ["c"]],
    ["c", ["d", "e"]],
    ["e", ["f"]],
  ]);
  const adjacents = searchBreadth(graph, "a");
  assert.assertEquals(adjacents, new Set(["a", "b", "c", "d", "e", "f"]));
});

Deno.test("search with cycles", () => {
  const graph = new Map([
    ["a", ["b", "c"]],
    ["b", ["a", "c"]],
    ["c", ["a", "b", "d"]],
    ["d", ["c"]],
  ]);
  const adjacents = searchBreadth(graph, "a");
  assert.assertEquals(adjacents, new Set(["a", "b", "c", "d"]));
});

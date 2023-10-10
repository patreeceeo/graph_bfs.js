import * as assert from "https://deno.land/std/assert/mod.ts";
import { searchBreadth } from "./graph.ts";

Deno.test("search", () => {
  const graph = new Map([
    ["a", new Set(["b", "c"])],
    ["b", new Set(["c"])],
    ["c", new Set(["d", "e"])],
    ["e", new Set(["f"])],
  ]);
  const adjacents = searchBreadth(graph, "a");
  assert.assertEquals(adjacents, new Set(["a", "b", "c", "d", "e", "f"]));
});

Deno.test("search with cycles", () => {
  const graph = new Map([
    ["a", new Set(["b", "c"])],
    ["b", new Set(["a", "c"])],
    ["c", new Set(["a", "b", "d"])],
    ["d", new Set(["c"])],
  ]);
  const adjacents = searchBreadth(graph, "a");
  assert.assertEquals(adjacents, new Set(["a", "b", "c", "d"]));
});

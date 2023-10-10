export type Graph = Map<string, Set<string>>;

/**
* Given a graph and a starting node, return a set of all nodes that can be reached from the starting node, searching breadth-first. Handles cycles by remembering which nodes have been visited.
*/
export function searchBreadth(graph: Graph, start: string): Set<string> {
  const stack = [];
  const visited = new Set<string>();
  const result = new Set<string>();
  stack.push(start);
  while (stack.length > 0) {
    const node = stack.pop()!;
    if (!visited.has(node)) {
      visited.add(node);
      result.add(node);
      const adjacents = graph.get(node);
      if (adjacents) {
        for (const adjacent of adjacents) {
          stack.push(adjacent);
        }
      }
    }
  }
  return result;
}


declare module "graph_fn" {
  export type Graph = Map<string, Set<string>>;
  export function searchBreadth(graph: Graph, start: string): Set<string>;
}

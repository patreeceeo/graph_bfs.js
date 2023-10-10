
declare module "graph" {
  export function searchBreadth(graph: Map<string, string[]>, start: string): Set<string>;
}

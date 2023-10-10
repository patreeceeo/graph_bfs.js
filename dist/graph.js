/// <reference types="../types/graph.d.ts" />
export function searchBreadth(a,o){const t=[],e=new Set,s=new Set;for(t.push(o);t.length>0;){const n=t.pop();if(!e.has(n)){e.add(n),s.add(n);const r=a.get(n);if(r)for(const i of r)t.push(i)}}return s}
//# sourceMappingURL=graph.js.map

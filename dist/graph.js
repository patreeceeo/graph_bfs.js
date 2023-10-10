export function searchBreadth(i,o){const t=[],s=new Set,e=new Set;for(t.push(o);t.length>0;){const n=t.pop();if(!s.has(n)){s.add(n),e.add(n);const r=i.get(n);if(r)for(const a of r)t.push(a)}}return e}
//# sourceMappingURL=graph.js.map

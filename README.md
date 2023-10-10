# Graph Functions

## Usage

`npm install graph_fn`

Also compatible with Deno!

## What

A simple graph theory library that provides functions that work with plain old JavaScript native types. Inspired by `date-fns`.

## Why

I couldn't find anything like this already on NPM. Existing packages employ a graph data structure that either isn't ergonomic to build with native types, or is implemented as custom data type. Additionally, almost every other library includes more than the concepts of graph theory itself, such as rendering or interfacing with other libraries.

Data structures that are specific to a library leads to vendor lock-in, and possibly code that's more verbose, less readable and less performant. Instead, this library seeks to represent graphs in the most obvious way possible with native types.

## Plans

Add other common graph functions, like getting the _degree_ of a node, testing whether a graph contains cycles etc.

Add support for graphs with weighted vertices by defining a new data type, probably something like:

```javascript
type WeightedGraph = Map<string, Map<string, number>>
```

In a similar vein, when the graph in question is very large and performance matters, there can be functions that transform a `Graph` into an adjacency list or matrix, and functions that implement algorithms on those specific data structures.

Also planning to make the [contributing](#Contributing) process less manual.

Not planning on implementing undirected edges since those can be represented by two edges.

## Contributing

1. Make your changes in `src/`
  - also in `types/` if changing any exported types)
  - also in `src/*.test.ts` if new code is not isomorphic
2. Run `deno test`
2. Run `esbuild src/graph.ts --outdir=dist --minify --sourcemap`
3. Re-add the type reference to `dist/graph.js': ```/// <reference types="../types/graph.d.ts" />```
4. Commit and push to your clone

Submit an issue or make a pull request on [Github](https://github.com/patreeceeo/graph_fns.js)

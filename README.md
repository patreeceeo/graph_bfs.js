# Graph Functions

## What

A simple graph theory library that provides functions that work with plain old JavaScript native types. Inspired by `date-fns`.

## Why

I couldn't find anything like this already on NPM. Existing packages employ a graph data structure that either isn't ergonomic to build with native types, or is implemented as custom data type. Additionally, almost every other library includes more than the concepts of graph theory itself, such as rendering or interfacing with other libraries.

Data structures that are specific to a library leads to vendor lock-in, and possibly code that's more verbose, less readable and less performant. Instead, this library seeks to represent graphs in the most obvious way possible with native types.

## Plans

Add other common graph functions, like getting the _degree_ of a node, testing whether a graph contains cycles etc.

Add support for graphs with weighted vertices by defining a new data type, probably something like:

```javascript
type WeightedGraph = Map<string, Set<[string, number]>>
```

Or have a separate object that stores the weight of all edges that aren't 1:

```javascript
type EdgeWeights = Map<string, Map<string, number>>
```

I'm leaning towards the second since the edge weights object can be passed as an optional argument to functions where it's relevant. Seems simpler than having an argument that can be either a plain `Graph` or a `WeightedGraph`.

Not planning on implementing undirected edges since those can be represented by two edges.

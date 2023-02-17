class Solution {
    constructor(){
    }

    dfsOfGraph(v, adj) {
        var graph = createGraph(v, adj);
        var visited = new Array(graph.length).fill(false);
        var stack = new Array();
        var result = [];

        stack.push(0);
        dfs(graph, stack, visited, result);

        return result;
    }
}

class Edge {
    constructor(src, dest) {
        this.src = src;
        this.dest = dest;
    }
}

function createGraph(v, adj) {
    var graph = [];
    for (let i = 0; i < v; i++) {
        graph[i] = new Array();
        for (let j = 0; j < adj[i].length; j++) {
            graph[i].push(new Edge(i, adj[i][j]));
        }
    }
    return graph;
}

function dfs(graph, stack, visited, result) {
    var curr = stack[stack.length - 1];
    visited[curr] = true;
    result.push(curr);

    for (let i = 0; i < graph[curr].length; i++) {
        if (visited[graph[curr][i].dest] === false) {
            stack.push(graph[curr][i].dest);
            dfs(graph, stack, visited, result);
        }
    }
}

var solution = new Solution();
var ans = solution.dfsOfGraph(5, [[2, 3, 1], [0], [0, 4], [0], [2]]);
console.log(ans)

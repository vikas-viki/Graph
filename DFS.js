class Edge {
    constructor(src, dest) {
        this.src = src;
        this.dest = dest;
    }
}
function graphEX() {
    let V = 7;
    var graph = new Array(V);
    createGraph(graph);
    var visited = new Array(graph.length).fill(false);
    var Stack = new Array();
    Stack.push(0);
    dfs(graph, Stack, visited);


}
graphEX();
function createGraph(_graph) {
    for (let i = 0; i < _graph.length; i++) {
        _graph[i] = new Array();
    }
    _graph[0].push(new Edge(0, 1));
    _graph[0].push(new Edge(0, 2));
    _graph[1].push(new Edge(1, 0));
    _graph[1].push(new Edge(1, 3));
    _graph[2].push(new Edge(2, 0));
    _graph[2].push(new Edge(2, 4));
    _graph[3].push(new Edge(3, 1));
    _graph[3].push(new Edge(3, 4));
    _graph[3].push(new Edge(3, 5));
    _graph[4].push(new Edge(4, 2));
    _graph[4].push(new Edge(4, 3));
    _graph[4].push(new Edge(4, 5));
    _graph[5].push(new Edge(5, 3));
    _graph[5].push(new Edge(5, 4));
    _graph[5].push(new Edge(5, 6));
    _graph[6].push(new Edge(6, 6));
}
function dfs(_graph, stack, _vis) {
    var _curr = stack[stack.length-1];
    console.log(_curr);
    _vis[_curr] = true;
    for (let i = 0; i < _graph[_curr].length; i++) {
        if (_vis[_graph[_curr][i].dest] === false) {
            stack.push(_graph[_curr][i].dest);
            dfs(_graph, stack, _vis);
        }
    }
}
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
    bfs(graph);

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
function bfs(_graph) {
    var Queue = new Array();
    var visited = new Array(_graph.length).fill(false);

    Queue.push(0);
    while (Queue.length > 0) {
        var curr = Queue.shift();
        if (visited[curr] === false) {
            console.log(curr);
            visited[curr] = true;
            for (let i = 0; i < _graph[curr].length; i++) {
                Queue.push(_graph[curr][i].dest);
            }
        }
    }
}
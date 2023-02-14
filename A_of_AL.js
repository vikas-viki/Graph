// Adjacency list.
/*
Easy to access neighbours of a particular node(vertex), as you can easliy access using array index.

*/
// If the graph is weighted then add one more weight property to 'Edge' class & pass weight when adding to array.
class Edge {
    constructor(src, dest) {
        this.src = src;
        this.dest = dest;
    }
}
function graphEX() {
    let V = 4;
    var graph = new Array(4);
    createGraph(graph);
    // Finding neighbours of - 2
    for (let i = 0; i < graph[2].length; i++) {
        console.log(graph[2][i].dest);
    }
    console.log(graph);

}
graphEX();
function createGraph(_graph) {
    for (let i = 0; i < _graph.length; i++) {
        _graph[i] = new Array();
    }
    _graph[0].push(new Edge(0, 2));
    _graph[1].push(new Edge(1, 2));
    _graph[1].push(new Edge(1, 3));
    _graph[2].push(new Edge(2, 0));
    _graph[2].push(new Edge(2, 1));
    _graph[2].push(new Edge(2, 3));
    _graph[3].push(new Edge(3, 1));
    _graph[3].push(new Edge(3, 2));
}
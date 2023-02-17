function bfs(n, m, edges, s) {
    // Write your code here
    const graph = {}
    for(let [src, dest] of edges) {
        if (!graph[src]) {
            graph[src] = [];
        }
        if (!graph[dest]) {
            graph[dest] = [];
        }
        graph[src].push(dest)
        graph[dest].push(src)
    }
    console.log(graph)

    let dist = Array(n + 1).fill(-1, 1)
    console.log('dist', dist);
    let visited = new Set()
    let queue = [];
    queue.push(s);
    
    dist[s] = 0
    console.log('dist', dist);
    visited.add(s)


    while (queue.length > 0) {
        let u = queue.shift();
        if (graph[u]) {
            for (let child of graph[u]) {
                if (!visited.has(child)) {
                    visited.add(child);
                    dist[child] = dist[u] + 6;
                    queue.push(child);
                }
            }
        }
        console.log(queue)
    }

    dist.splice(s, 1)
    console.log(dist)
    return Object.values(dist)


}
bfs(5, 3,
    [[1, 2],
    [1, 3],
    [3, 4]],
    1)
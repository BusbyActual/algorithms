let graph =  {
  value: 'A',
  children: [{ value: 'B', children: [
   { value: 'C', children: [] },
   { value: 'D', children: [
    { value: 'E', children: [] },
    { value: 'F', children: [] }
   ] },
   { value: 'G', children: [] }
  ]}, { value: 'H', children: [
    { value: 'I', children: [] },
    { value: 'J', children: [
      { value: 'K', children: [] },
      { value: 'Z', children: [] }
    ]}
  ]}]
};

// console.log(graph.children);

let BFS = (graph, target) => {
  let queue = [graph];

  while(queue.length) {
    // console.log(x, JSON.stringify(queue), '##')
    let current = queue.shift();
    console.log(current.value, target, queue.length)

    if (current.value === target) {
      console.log('winnnn', current)
      return current;
    } else {
      if (current.children.length) {
        console.log(current.children)
        current.children.forEach((child) => {
          queue.push(child);
        });
        x = 0;
        console.log(JSON.stringify(queue))
      }
    }

    console.log(queue, x)
  }
};

BFS(graph, 'E');
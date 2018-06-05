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


let BFS = (graph, target) => {
  let queue = [graph];

  while(queue.length) {
    let current = queue.shift();

    if (current.value === target) {
      return current;
    } else {
      if (current.children.length) {
        current.children.forEach((child) => {
          queue.push(child);
        });
      }
    }
  }
};

let work = BFS(graph, 'E');

console.log(work);
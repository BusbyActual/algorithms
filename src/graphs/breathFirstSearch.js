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

console.log(graph.children);

let BFS = (graph, target) => {
  let queue = [graph];

  for (let x = 0; x < queue.length; x++) {
    let current = queue.shift();

    if (current.value === target) {
      return current;
    } else {
      if (current.children) {
        current.forEach((child) => {
          queue.push(child);
        });
      }
    }
  }

};
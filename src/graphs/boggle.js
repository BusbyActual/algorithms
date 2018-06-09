let words = ["GEEKS", "FOR", "QUIZ", "GO"];
let graph = [ ['G','I','Z'],
              ['U','E','K'],
              ['Q','S','E'] ];

let boggle = (graph, targets) => {
  let Answer = [];
  let map = {};

  targets.map((target, index) => {
    if (map[target[0]]) {
      map[target[0]].push(index);
    } else {
      map[target[0]] = [index];
    }
  });

  return map;
};

let work = boggle(graph, words);

console.log(work);
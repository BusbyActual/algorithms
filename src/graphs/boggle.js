let words = ["GEEKS", "FOR", "QUIZ", "GO"];
let graph = [ ['G','I','Z'],
              ['U','E','K'],
              ['Q','S','E'] ];

let boggle = (graph, targets) => {
  let Answer = [];
  let map = {};
  let polishedGraph = {};

  targets.map((target, index) => {
    if (map[target[0]]) {
      map[target[0]].push(index);
    } else {
      map[target[0]] = [index];
    }
  });

  graph.map((rowY, indexY) => {

    rowY.map((rowX, indexX) => {
      console.log(indexY ,indexX)
      if (indexY >= 1) {
        console.log(1, graph[indexY - 1][indexX - 1], graph[indexY - 1][indexX], graph[indexY - 1][indexX + 1])
      }

        console.log(2, rowY[indexX - 1], rowX, rowY[indexX + 1])

      if (indexY + 1 < graph.length) {
        console.log(3, graph[indexY + 1][indexX - 1], graph[indexY + 1][indexX], graph[indexY + 1][indexX + 1])
      }
    });

  });

  return map;
};

let work = boggle(graph, words);

console.log(work);
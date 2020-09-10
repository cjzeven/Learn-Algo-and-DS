function extractMap(map) {
  const prev = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (map[i][j] === ' ') {
        prev.push({ x: j, y: i });
      }
    }
  }
  return prev;
}

function generate(map, initPos) {
  const { x, y } = initPos;
  map[y][x] = 'g';
  return map;
}

function isValidPosition(map, pos) {
  const { x, y } = pos;

  function checkNoBarrier(map, x, y) {
    if (map[y][x] === '#') {
      return false;
    }
    return true;
  }

  function checkNoGunmen(map, x, y) {
    if (map[y][x] === 'g') {
      return false;
    }
    return true;
  }

  function checkLeft(map, x, y) {
    if (!checkNoBarrier(map, x, y)) {
      return true;
    } else if (!checkNoGunmen(map, x, y)) {
      return false;
    } else if (map[y][x-1] === undefined) {
      return true;
    }
    return checkLeft(map, x-1, y);
  }

  function checkRight(map, x, y) {
    if (!checkNoBarrier(map, x, y)) {
      return true;
    } else if (!checkNoGunmen(map, x, y)) {
      return false;
    } else if (map[y][x+1] === undefined) {
      return true;
    }
    return checkRight(map, x+1, y);
  }

  function checkTop(map, x, y) {
    if (!checkNoBarrier(map, x, y)) {
      return true;
    } else if (!checkNoGunmen(map, x, y)) {
      return false;
    } else if (map[y-1] === undefined) {
      return true;
    }
    return checkTop(map, x, y-1);
  }

  function checkBottom(map, x, y) {
    if (!checkNoBarrier(map, x, y)) {
      return true;
    } else if (!checkNoGunmen(map, x, y)) {
      return false;
    } else if (map[y+1] === undefined) {
      return true;
    }
    return checkBottom(map, x, y+1);
  }

  // check barrier and gunman
  if (!checkNoBarrier(map, x, y)) return false;
  if (!checkNoGunmen(map, x, y)) return false;
  // // check directions
  if (!checkLeft(map, x, y)) return false;
  if (!checkRight(map, x, y)) return false;
  if (!checkTop(map, x, y)) return false;
  if (!checkBottom(map, x, y)) return false;

  return true;
}

function calculate(map) {
  let extractedMap = extractMap(map);

  function helper(map, memoAvailableCells = [], memoPatterns = []) {
    let key = map.flat().join();
    let availableCells = [];

    if (memoAvailableCells[key]) {
      availableCells = memoAvailableCells[key];
    } else {
      availableCells = extractedMap;
      memoAvailableCells[key] = availableCells;
    }

    for (let index in availableCells) {

      let cell = availableCells[index];

      if (isValidPosition(map, cell)) {
        map = generate(map, cell);

        let key = map.flat().join();
        if (memoPatterns[key]) {
          data = memoPatterns[key];
          continue;
        } else {
          data = JSON.parse(JSON.stringify(map));
          memoPatterns[key] = data;
        }

        helper(map, memoAvailableCells, memoPatterns);
        map[cell.y][cell.x] = ' ';
      }
    }
  }

  let data = [];
  helper(map);
  let key = data.flat().join();

  if (!globalResult[key]) globalResult[key] = data;

}

function calculateValues(result) {
  let max = 0;
  let ways = 0;

  for (let index in result) {
    if (!result[index].length) continue;

    let gunmen = 0;

    result[index].map(item => {
      let itemJoined = item.join('|');
      gunmen += (itemJoined.match(new RegExp("g", "g")) || []).length;
      console.log(itemJoined);
    });

    if (max < gunmen) max = gunmen;

    console.log('Gunmen:', gunmen);
    console.log("\n");
  }

  for (let index in result) {
    if (!result[index].length) continue;;

    let gunmen = result[index].reduce((acc, item) => {
      return acc + (item.join('').match(new RegExp("g", "g")) || []).length;
    }, 0);

    if (gunmen === max) ways++;
  }

  return { max, ways };
}

//==================================== Execute =======================================

// let map = [
//     ['#', ' '],
//     [' ', ' '],
// ];

// let map = [
//   ['#', ' ', '#'],
//   [' ', ' ', ' '],
//   ['#', ' ', ' '],
// ];

// let map = [
//   ['#', '#', '#', ' '],
//   [' ', ' ', ' ', ' '],
//   [' ', '#', ' ', ' '],
//   ['#', '#', '#', ' '],
// ];

let map = [
  [' ', '#', ' ', '#', ' ', '#', ' ', '#'],
  [' ', ' ', ' ', ' ', ' ', '#', ' ', ' '],
  ['#', ' ', '#', ' ', ' ', '#', ' ', '#'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '#', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', '#', ' ', '#'],
  [' ', '#', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', '#', ' ', '#', ' '],
];


let globalResult = {};

let extractedMap = extractMap(map);

for (let cell of extractedMap) {
  let theMap = JSON.parse(JSON.stringify(map));
  let newMap = generate(theMap, cell);
  calculate(newMap);
}

let { max, ways } = calculateValues(globalResult);

console.log('Max gunmen:', max);
console.log('Ways:', ways);


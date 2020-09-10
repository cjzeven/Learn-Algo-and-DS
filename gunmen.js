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


// let map = [
//   ['#', '#', '#', ' '],
//   [' ', ' ', ' ', ' '],
//   [' ', '#', ' ', ' '],
//   ['#', '#', '#', ' '],
// ];

// let map = [
//     ['#', ' '],
//     [' ', ' '],
// ];

// let map = [
//   ['#', ' ', '#'],
//   [' ', ' ', ' '],
//   ['#', ' ', ' '],
// ];

var memoRes = [];

let extractedMap = extractMap(map);

for (let cell of extractedMap) {
  let theMap = JSON.parse(JSON.stringify(map));
  let newMap = generate(theMap, cell);
  
  // console.log('income');
  // console.log(newMap);

  let res = test(newMap, JSON.parse(JSON.stringify(extractedMap)));
  // console.log('outcome');
  // console.log(res);
  // let key = newMap.flat().join();
  // console.log("\n====================================\n");
}

// result
let max = 0;
for (let zzz in memoRes) {
  let gunmen = 0;
  memoRes[zzz].map(item => {
    let itemJoined = item.join('|');
    gunmen += (itemJoined.match(new RegExp("g", "g")) || []).length;
    console.log(itemJoined);
  });
  console.log('Total gunmen:', gunmen);
  console.log("\n");
}

function test(map, extractedMap) {
  // extractedMap.shift();

  // console.log('sini', map, extractedMap);
  // return;

  function helper(newMap, memoExtMap = [], memoMap = []) {

    let key = newMap.flat().join();
    let em = [];

    if (memoExtMap[key]) {
      em = memoExtMap[key];
    } else {
      em = extractMap(newMap);
      memoExtMap[key] = em;
    }

    // console.log(em);

    for (let index in em) {

    // console.log('--->', em);


      let cell = em[index];
      // extractedMap.splice(index, 1);

      // console.log('sini', map, extractedMap);
  // return;

      if (isValidPosition(newMap, cell)) {
        newMap = generate(newMap, cell);

        // remove current pos, so can't be validate again
        // extractedMap.splice(index, 1);
        // console.log(em);
        // console.log('outcome', newMap);

        let key = newMap.flat().join();

        if (memoMap[key]) {
          data = memoMap[key];
          continue;
        } else {
          data = JSON.parse(JSON.stringify(newMap));
          memoMap[key] = data;
        }

        // em.shift();

        // console.log(em);

        helper(newMap, memoExtMap, memoMap);

        newMap[cell.y][cell.x] = ' ';
      }
    }
  }

  helper(map);
  // console.log(maxGunmen);

  let key = data.flat().join();

  if (!memoRes[key]) {
    memoRes[key] = data;
    // return data;
  }

  // return data;
}
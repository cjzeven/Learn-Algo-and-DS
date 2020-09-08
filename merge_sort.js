function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    const half = Math.floor(arr.length / 2);

    let arr1 = mergeSort(arr.slice(0, half));
    let arr2 = mergeSort(arr.slice(half));

    return merged(arr1, arr2);
}

function merged(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];

  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else {
      res.push(arr1[i]);
      i++;
    }
  }

  if (i < arr1.length) {
    res = [...res, ...arr1.slice(i)];
  }

  if (j < arr2.length) {
    res = [...res, ...arr2.slice(j)];
  }

  return res;
}

let sorted = mergeSort([3,7,1,10,87,32,2,3,8,8,9,2,6]);
console.log(sorted);
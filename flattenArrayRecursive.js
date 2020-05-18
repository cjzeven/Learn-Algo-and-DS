function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  
  function helper(arr) {
      for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
                helper(arr[i]);
          } else {
              result.push(arr[i]);
          }
      }
  }
  
  helper(arr);
  return result;
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1,   [  2, [3, 4], [ [5] ]  ]   ])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3

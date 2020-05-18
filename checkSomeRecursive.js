function someRecursive(arr, cb) {
    // add whatever parameters you deem necessary - good luck!
    if (arr.length <= 0) return false;
    return cb(arr[0]) ? true : someRecursive(arr.slice(1), cb);
}

function isOdd(val) {
    return val % 2 !== 0;
}

console.log(someRecursive([1,2,3,4], isOdd));
// console.log(someRecursive([2,4,8, 1], isOdd));
// console.log(someRecursive([4,6,8,9], isOdd));
// console.log(someRecursive([4, 9, 8], val => val > 10));
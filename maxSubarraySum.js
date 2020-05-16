/*
Tulis sebuah fungsi bernama "maxSubarraySum", yang menerima sebuah array integer
dan sebuah integer "n". Fungsi tersebut harus menghitung maksimum SUM (total) hingga ke elemen "n"
secara berurutan. Contoh:

maxSubarraySum([1,2,5,2,8,1,5], 2) --> 10
n = 2
- [1,2] = 3
- [2,5] = 7
- [5,2] = 7
- [2,8] = 10
- [8,1] = 9
- [1,5] = 6
maka nilai SUM tertinggi dari 2 element yaitu 10
*/

/*
    n = 3
    temp = 14
    max = 15

                     i
    [1,  2,  5,  2,  8,  1,  5]
                             j

    berhenti ketika j === array.length
*/

function maxSubarraySum(array, n) {
    if (array.length < n) {
        return null;
    }

    let temp = 0;

    for (let i = 0; i < n; i++) {
        temp += array[i];
    }

    let max = temp;
    let i = 0;
    let j = n - 1;

    while (j < array.length-1) {
        temp = temp - array[i];
        i += 1;
        j += 1;
        temp = temp + array[j];
        max = Math.max(temp, max);
    }

    return max;
}

// console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
// console.log(maxSubarraySum([4,2,1,6], 1));
// console.log(maxSubarraySum([4,2,1,6,2], 4));
// console.log(maxSubarraySum([1, 2], 2));
// console.log(typeof String(123));



function areThereDuplicates() {   
    // let arr = [...arguments];

    /*
         i
        'a',  'a',  'c',  'd', 'z', 'f', 'b', 'j'
               j

        {
            b: 1,
            a: 1,
            c: 1,
            z: 1,

        }
    */

    if (arguments.length < 1) {
        return true;
    }

    let obj = {};

    for (let char of [...arguments]) {
        if (obj[char]) {
            return true;
        }
        obj[char] = 1;
        console.log(obj);
    }

    return false;

    /*
    let i = 0;
    let j = 1;

    while (i < arr.length-2) {
        // console.log(arr[i], arr[j]);
        if (arr[i] !== arr[j]) {
            j += 1;
        } else {
            return true;
        }
        if (j === arr.length) {
            i += 1;
            j = i + 1;
        }
    }

    return false;
    */
}

function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a,b) => (a - b) * -1 );
    console.log(args);
    return;
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

function areThereDuplicates3(...args) {
    return new Set(args).size !== args.length;
}
  
console.log(areThereDuplicates3('b',  'a',  'c',  'z', 'd', 'f', 'g', 'e'));
// console.log(areThereDuplicates(2,  1,  3,  26, 4, 6, 9, 10));
// console.log(areThereDuplicates(1,2,3));
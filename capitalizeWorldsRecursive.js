function capitalizeWords (arr) {
    if (arr.length <= 0) return arr;
    return [].concat(arr[0].toUpperCase(), capitalizeWords(arr.slice(1)));
  // add whatever parameters you deem necessary - good luck!
  
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
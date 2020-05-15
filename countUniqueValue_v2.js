function countUniqueValues(array){

    if (array.length < 1) {
        return array;
    }

    let i = 0;

    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i += 1;
            array[i] = array[j];
        }
    }

    return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([1, 2]));
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));
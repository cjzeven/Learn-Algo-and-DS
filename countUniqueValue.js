function countUniqueValues(array){
    if (array.length <= 1) {
        return array.length;
    }
    
    let i = 0;
    let j = 1;
    
    while (array[j] !== undefined) {
        let pos1 = array[i];
        let pos2 = array[j];
        
        if (pos1 != pos2) {
            i += 1;
            array[i] = array[j];
            j += 1;
        } else {
            j += 1;
        }
    }
    
    return i + 1;
}

console.log(countUniqueValues([1, 2]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));
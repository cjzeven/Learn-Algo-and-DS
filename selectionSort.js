function selectionSort(arr) {
    let i = 0;
    let j = 1;
    let min = 0;

    while (i < arr.length-1) {
        if (arr[min] > arr[j]) {
            min = j;
        }
        if (j < arr.length-1) {
            j++;
        } else {
            //switch ES6
            [arr[i], arr[min]] = [arr[min], arr[i]];
            i++;
            min = i;
            j = i+1;
        }
    }

    return arr;
}

console.log(selectionSort([5,2,1,7,3,3,4,9,12,50,33,21,9,3,2,8,13,17,91,43,22,34]));
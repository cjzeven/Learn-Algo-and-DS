function insertionSort(arr) {
    let i = 1;
    let j = 0;
    let temp = arr[i];
    let counter = 0;

    while (i < arr.length) {
        counter++;
        if (temp >= arr[j]) {
            i++;
            arr[j+1] = temp;
            j = i - 1;
            temp = arr[i];
        } else {
            arr[j+1] = arr[j];
            if (j <= 0) {
                arr[j] = temp;
                i++;
                j = i - 1;
                temp = arr[i];
            } else {
                j--;
            }
        }
    }

    console.log('Total', counter);

    return arr;
}

// console.log(insertionSort([5,2,1,7,3,3,4,9,12,50,33,0,-1,21,9,3,2,8,13,17,91,43,22,34]));
console.log(insertionSort([
    -1,  0,  1,  2,  2,  3,  3,  3,
     4,  5,  7,  8,  9,  9, 12, 13,
    17, 21, 22, 33, 34, 43, 50, 91, 25
  ]));
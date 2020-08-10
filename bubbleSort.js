function bubbleSort(arr) {
    if (!arr) return null;
    if (arr.length < 2) return arr;

    let i = 1;
    let j = arr.length - 1;

    while (j > 0) {
        if (arr[i-1] > arr[i]) {
            // switch value without temp var
            [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
        }

        if (i < j) {
            i++;
        } else {
            i = 1;
            j--;
        }
    }

    return arr;
}

console.log(bubbleSort([5,2,1,7,3,3,4,9,12,50,33,21,9,3,2,8,13,17,91,43,22,34]));
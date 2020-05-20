function binarySearch(arr, value) {
    let arrLength = arr.length - 1;

    if (arr[0] === value) return 0;
    if (arr[arrLength] === value) return (arr.length - 1);
    if (arr[arrLength] < value || value < arr[0]) return -1;

    let i = 0;
    let j = arrLength;

    while (i <= j) {
        let middle = Math.floor(i + (j - i) / 2);

        if (arr[middle] > value) {
            middle--;
            j = middle;
        } else if (arr[middle] < value) {
            middle++;
            i = middle;
        } else {
            return middle;
        }

    }

    // add whatever parameters you deem necessary - good luck!
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 10));
// console.log(binarySearch([1,2,3,4,5], 6));

/*
            i
1 2 3 4 5 6 7 8 9 10
            j
            x
*/
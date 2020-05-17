function minSubArrayLen(arr, num) {    
    let length = 0;
    let total = 0;
    let i = 0;
    let j = 0;
    
    while(arr[i] && arr[j]) {
        if (i === j) {
            if (arr[i] >= num) {
                return 1;
            } else {
                total = arr[i];
                j++;
                total += arr[j];
            }
        } else {
            if (total >= num) {
                let tempLength = j - i + 1;
                if (length === 0 || tempLength < length) {
                    length = tempLength;
                }
                total -= arr[i];
                i++;
            } else {
                j++;
                total += arr[j];
            }
        }
    }

    return length;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
// console.log(minSubArrayLen([2,1,6,5,4], 9));
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55));
// console.log(minSubArrayLen([4,3,3,8,1,2,3], 11));
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95));
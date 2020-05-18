function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    function helper(arr, start, end) {
        if (start >= end) return arr.join('');
        let temp = arr[start];
        arr[start] = arr[end]
        arr[end] = temp;
        return helper(arr, start + 1, end - 1);
    }
    return helper(str.split(''), 0, str.length - 1);
}

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
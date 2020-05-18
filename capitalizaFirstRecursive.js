function capitalizeFirst(arr) {
    // add whatever parameters you deem necessary - good luck!
    function helper(arr, i) {
        if (!arr[i]) return arr;
        let tempArr = arr[i].split('');
        tempArr[0] = tempArr[0].toUpperCase();
        arr[i] = tempArr.join('');
        return helper(arr, i+1);
    }

    return helper(arr, 0);
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

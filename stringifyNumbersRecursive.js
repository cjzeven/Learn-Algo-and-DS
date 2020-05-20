function stringifyNumbers(obj) {

    //make sure there's no references
    let result = JSON.parse(JSON.stringify(obj));

    function helper(data) {
        for (let i in data) {
            if (typeof data[i] === 'number') {
                data[i] = data[i].toString();
            } else if ((typeof data[i] === 'object' && !(data[i] instanceof Array))) {
                helper(data[i]);
            }
        }
        return data;
    }

    return helper(result);
}

// function stringifyNumbers(obj) {
//     var newObj = {};
//     for (var key in obj) {
//         if (typeof obj[key] === 'number') {
//             newObj[key] = obj[key].toString();
//         } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             newObj[key] = stringifyNumbers(obj[key]);
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj));
console.log(obj);
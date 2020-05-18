function nestedEvenSum(obj) {
    // add whatever parameters you deem necessary - good luck!
    let total = 0;

    function isObject(data) {
        return (typeof data === 'object' && data instanceof Array !== true);
    }

    function isEvenNumber(num) {
        return (typeof num === 'number' && num % 2 === 0);
    }

    function helper(obj) {
        for (let i in obj) {
            if (isObject(obj[i])) {
                helper(obj[i]);
            } else if (isEvenNumber(obj[i])) {
                total += obj[i];
            }
        }
    }

    helper(obj);
    return total;
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10
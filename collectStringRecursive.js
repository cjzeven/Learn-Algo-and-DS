function collectStrings(obj) {
    let result = [];

    function helper(obj) {
        for (let i in obj) {
            if (typeof obj[i] === 'string') {
                result.push(obj[i]);
            } else if (typeof obj[i] === 'object' && !(obj[i] instanceof Array)) {
                helper(obj[i]);
            }
        }
        return obj;
    }

    helper(obj);
    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
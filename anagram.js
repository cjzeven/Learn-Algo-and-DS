/*
"anagram"
"nagaram"

{
    a: 3,
    n: 1,
    g: 1,
    r: 1,
    m: 1,
}

{
    n: 1,
    a: 3,
    g: 1,
    r: 1,
    m: 1,
}

*/

function createMapObject(string) {
    let map = {};

    for (let char of string) {
        map[char] = ++map[char] || 1;
    }

    return map;
}

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let str1Map = createMapObject(str1);
    let str2Map = createMapObject(str2);

    for (let char in str2Map) {
        if (!str1Map[char] || str1Map[char] !== str2Map[char]) {
            return false;
        }
    }

    return true;
}

console.log(anagram("anagram", "nagaram"));
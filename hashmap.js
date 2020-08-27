class Hashmap {

    constructor(keyLen = 53) {
        this.keyMap = new Array(keyLen);
    }

    _hash(key) {
        let total = 0;
        let PRIME_NUMBER = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let value = key[i].charCodeAt(0) - 96;
            total = (total * PRIME_NUMBER + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        key = key.toLowerCase();
        let index = this._hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);
    }

    get(key) {
        key = key.toLowerCase();
        let index = this._hash(key);

        if (!this.keyMap[index]) {
            return undefined;
        }

        return this.keyMap[index].find(item => item[0] === key)[1];
    }

}

let hashmap = new Hashmap();
hashmap.set('maroon', '1');
hashmap.set('yellow', '2');
hashmap.set('olive', '3');
hashmap.set('salmon', '4');
hashmap.set('lightcoral', '5');
hashmap.set('mediumvioletred', '6');
hashmap.set('plum', '7');

console.log(hashmap.get('salmon'));
console.log(hashmap.get('plum'));
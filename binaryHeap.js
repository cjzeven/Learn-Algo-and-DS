class BinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);

        let currIndex = this.values.length - 1;
        let parentIndex = Math.floor((currIndex-1) / 2);
        let temp;

        while (parentIndex >= 0) {
            if (this.values[currIndex] <= this.values[parentIndex]) break;
            temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[currIndex]; 
            this.values[currIndex] = temp;
            currIndex = parentIndex;
            parentIndex = Math.floor((currIndex-1) / 2);
        }
    }

    extractMax() {        
        let swapLeft = (curr, left) => {
            [this.values[curr], this.values[left]] = [this.values[left], this.values[curr]];
        }

        let swapRight = (curr, right) => {
            [this.values[curr], this.values[right]] = [this.values[right], this.values[curr]];
        }

        // edge case for last element
        if (this.values.length <= 1) return this.values.pop();

        const max = this.values[0];
        this.values[0] = this.values.pop();
        
        let curr = 0, 
            left = (2 * curr) + 1, 
            right = (2 * curr) + 2;

        while (true) {

            let swap = false;

            if (this.values[curr] < this.values[left]) {
                if (this.values[left] < this.values[right]) {
                    swapRight(curr, right);
                    curr = right;
                    swap = true;
                } else {
                    swapLeft(curr, left);
                    curr = left;
                    swap = true;
                }
            } else if (this.values[curr] < this.values[right]) {
                swapRight(curr, right);
                curr = right;
                swap = true;
            }

            if (!swap) break;

            left = (2 * curr) + 1;
            right = (2 * curr) + 2;
        }

        return max;
    }
    
}

const bh = new BinaryHeap();
bh.insert(41);
bh.insert(39);
bh.insert(33);
bh.insert(18);
bh.insert(27);
bh.insert(12);
bh.insert(55);

var res = bh.extractMax();
console.log(res);
console.log(bh.values);

var res = bh.extractMax();
console.log(res);
console.log(bh.values);

var res = bh.extractMax();
console.log(res);
console.log(bh.values);

var res = bh.extractMax();
console.log(res);
console.log(bh.values);

var res = bh.extractMax();
console.log(res);
console.log(bh.values);

var res = bh.extractMax();
console.log(res);
console.log(bh.values);

var res = bh.extractMax();
console.log(res);
console.log(bh.values);

var res = bh.extractMax();
console.log(res);
console.log(bh.values);
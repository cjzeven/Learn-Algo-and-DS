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
}

const bh = new BinaryHeap();
bh.insert(41);
bh.insert(39);
bh.insert(33);
bh.insert(18);
bh.insert(27);
bh.insert(12);
bh.insert(55);
bh.insert(1);
bh.insert(45);
bh.insert(199);

console.log(bh.values);
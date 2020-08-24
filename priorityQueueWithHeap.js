class PriorityQueue {

    constructor() {
        this.values = [];
    }

    enqueue(value) {
        this.values.push(value);

        let currIndex = this.values.length - 1;
        let parentIndex = Math.floor((currIndex-1) / 2);
        let temp;

        while (parentIndex >= 0) {
            if (this.values[currIndex].priority <= this.values[parentIndex].priority) break;
            temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[currIndex]; 
            this.values[currIndex] = temp;
            currIndex = parentIndex;
            parentIndex = Math.floor((currIndex-1) / 2);
        }
    }

    dequeue() { 
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

            if (this.values[curr] && this.values[left] && this.values[curr].priority < this.values[left].priority) {
                if (this.values[left].priority < this.values[right].priority) {
                    swapRight(curr, right);
                    curr = right;
                    swap = true;
                } else {
                    swapLeft(curr, left);
                    curr = left;
                    swap = true;
                }
            } else if (this.values[curr] && this.values[right] && this.values[curr].priority < this.values[right].priority) {
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

const pq = new PriorityQueue();
pq.enqueue({ value: 'Common cold', priority: 1 });
pq.enqueue({ value: 'Gunshot wound', priority: 5 });
pq.enqueue({ value: 'Hight fever', priority: 2 });

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.values);
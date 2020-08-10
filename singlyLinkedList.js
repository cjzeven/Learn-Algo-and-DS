class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.length += 1;
    }

    print() {
        let curr = this.head;
        let result = [];

        while(curr) {
            result.push(curr.val);
            curr = curr.next;
        }

        return result.length ? result.join(' -> ') : null;
    }

    last() {
        return this.tail ? this.tail.val : this.tail;
    }

    first() {
        return this.head ? this.head.val : this.head;
    }

    total() {
        return this.length;
    }

    pop() {
        let curr = this.head;

        if (curr === this.tail) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return curr.val;
        }

        while(curr.next !== this.tail) {
            curr = curr.next;
        }

        this.tail = curr;
        let result = curr.next.val;
        this.tail.next = null;
        this.length -= 1;

        return result;
    }
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('world');
// list.push('who');
// list.push('are');
// list.push('you');
// console.log(list.print());
// console.log(list.last());
// console.log(list.first());
// console.log(list.total());
console.log(list.pop());
console.log(list.print());
console.log(list.total());
console.log(list.last());
list.push('end');
console.log(list.print());
console.log(list.first());
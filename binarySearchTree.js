class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const newNode = new Node(value);

        if (!this.root) return this.root = newNode;

        let curr = this.root;

        while(true) {
            if (curr.value < value) {
                if (curr.right) curr = curr.right;
                else return curr.right = newNode;
            } else if (curr.value > value) {
                if (curr.left) curr = curr.left;
                else return curr.left = newNode;
            } else {
                break;
            }
        }
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(11);
bst.insert(16);
bst.insert(3);

console.log(JSON.stringify(bst.root, null, 2));

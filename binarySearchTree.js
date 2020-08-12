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

    // Bread First Search
    bfs() {
        const queue = [], result = [];

        queue.push(this.root);

        while (queue.length) {
            const node = queue.shift();
            if (!node) return false;
            result.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return result;
    }

    // Depth first search pre-order
    dfsPreOrder() {
        const queue = [], result = [];

        queue.push(this.root);

        while (queue.length) {
            const node = queue.shift();
            if (!node) return false;
            result.push(node.value);
            if (node.right) queue.unshift(node.right);
            if (node.left) queue.unshift(node.left);
        }

        return result;
    }

    dfsPreOrderRecursive() {
        const result = [];

        function helper(node) {
            result.push(node.value);
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
        }

        helper(this.root);

        return result;
    }

    // Depth first search post-order
    dfsPostOrderRecursive() {
        const result = [];

        function helper(node) {
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
            result.push(node.value);
        }

        helper(this.root);

        return result;
    }

    // Depth first search in-order
    dfsInOrderRecursive() {
        const result = [];

        function helper(node) {
            if (node.left) helper(node.left);
            result.push(node.value);
            if (node.right) helper(node.right);
        }

        helper(this.root);

        return result;
    }
}

const bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

// console.log(JSON.stringify(bst.root, null, 2));
console.log(bst.bfs());
console.log(bst.dfsPreOrderRecursive());
console.log(bst.dfsPostOrderRecursive());
console.log(bst.dfsInOrderRecursive());



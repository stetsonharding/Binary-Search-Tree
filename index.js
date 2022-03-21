//Binary Trees is a data structure.
//trees have a root node which each node has at most 2 children that are refered to as left or right child.
//If the value coming in is greater than then the root, that value is stored as the right child, if it is less, that value is stored as the left child.

//   5
//   ^
//  3  4

var tree;
function setup() {
  tree = new Tree();

  for (let i = 0; i < 10; i++) {
    let ran = Math.floor(Math.random() * (0, 10));
    tree.addValue(ran);
  }

  console.log(tree);

  tree.traverse();

  tree.search(3);
}

//Tree
function Tree() {
  this.root = null;
}

Tree.prototype.traverse = function () {
  this.root.visit();
};

Tree.prototype.search = function (val) {
  this.root.search(val);
};

Tree.prototype.addValue = function (n) {
  let node = new Node(n);
  if (this.root === null) {
    this.root = node;
  } else {
    this.root.addNode(node);
  }
};

// =====

//Node

Node.prototype.search = function (val) {
  if (this.value === val) {
    console.log("found: " + val);
  } else if (val < this.value && this.left !== null) {
    this.left.search(val);
  } else if (val > this.value && this.right !== null) {
    this.right.search(val);
  } else {
    console.log(`value ${val} not found.`);
  }
};

Node.prototype.visit = function () {
  if (this.left != null) {
    this.left.visit();
  }

  console.log(this.value);

  if (this.right != null) {
    this.right.visit();
  }
};

Node.prototype.addNode = function (n) {
  if (n.value < this.value) {
    if (this.left === null) {
      this.left = n;
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value) {
    if (this.right === null) {
      this.right = n;
    } else {
      this.right.addNode(n);
    }
  }
};

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

// =====

setup();

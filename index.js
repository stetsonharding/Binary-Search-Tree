let tree = Tree;
function setup() {
  tree = new Tree();
  let n = new Node(5);
  tree.addNode(n);
  tree.addNode(6);
  tree.addNode(4);

  console.log(tree);
}

function Tree() {
  this.root = null;
}

Tree.prototype.addNode = function (n) {
  if (this.root === null) {
    this.root = n;
  } else {
    this.root.addNode(n);
  }
};

Node.prototype.addNode = function (n) {
  if (n.value < this.value) {
    this.left = n;
  } else {
    this.right = n;
  }
};

function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

setup();

const { ThreeSixty } = require("@material-ui/icons");

function setup() {
  let tree = new Tree();
  tree.addValue(5);

  console.log(tree);
}

//Tree
function Tree() {
  this.root = null;
}

Tree.prototype.addValue = function (n) {
  let node = new Node(n);
  if (this.root === null) {
    this.root = node;
  }
};

//Node
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

// Node.prototype.addNode = function (n) {
//   if (n.value < this.value) {
//     if (this.left === null) {
//       this.left = n;
//     } else {
//       this.left.addNode(n);
//     }
//   } else if (n.value > this.value) {
//     if (this.right === null) {
//       this.right = n;
//     } else {
//       this.right.addNode(n);
//     }
//   }
// };

setup();

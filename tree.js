class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
    this.depth = 0;
  }

  // adding a child to the node
  addChild(v) {
    // create a new tree variable passing in v as an argument
    var node = new Tree(v);
    // set the new nodes parent property to the current node (this)
    node.parent = this;
    node.depth = this.depth + 1;
    // push the new variable to the children array
    this.children.push(node);
  }

  // contains
  contains(v) {
    // create a contains variable set to false
    var contains = false;
    // if this node's value is equal to v, set contains to true;
    if (this.value === v) {
      contains = true
      // else if this node has children
    } else if (this.children.length > 0) {
      // invoke foreach child, this contains method
      this.children.forEach(function(child) {
        // if the result is true, set contains to true;
        if (child.contains(v)) {
          contains = true;
        }
      });
    }
    // return contains;
    return contains;
  }

  removeFromParent() {

  }

  traverse(cb) {

  }

  print() {
    var list = getNode(this);
    console.log(list);
  };
};

function getNode(node) {
  var nodeList = [];
  nodeList.push(node);
  if (node.children && node.children.length > 0) {
    node.children.forEach(function(child) {
      nodeList = nodeList.concat(getNode(child));
    })
  }
  return nodeList;
}


var tree = new Tree(7);
tree.addChild(5);
tree.addChild('Test');
tree.addChild('this');
tree.addChild('thing');

var firstChild = tree.children[0];
firstChild.addChild(7);

var subChild = firstChild.children[0];
subChild.addChild(2);

tree.print();

console.log(tree.contains(2));
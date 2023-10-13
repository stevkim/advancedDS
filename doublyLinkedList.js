class DoublyLinkedList {
  constructor () {
    // head property and tail property, size
    this.head = null;
    this.tail = null;
    this.size = 0;
  };
  //add to tail (push)
  addToTail(v) {
    // create a new node with v passed in as argument
    var node = new Node(v);
    // check if the tail exists
    if (!this.tail) {
      // if it doesnt, we set the head and tail to new node
      this.tail = this.head = node;
      // if it does
    } else {
      // we set the new node's previous prop to tail
      node.previous = this.tail;
      // and set tail.next to the new node
      this.tail.next = node;
      // set the tail to the new node
      this.tail = node;
    }
    // size++;
    this.size++;
  }

  // add to head
  addToHead(v) {
    // create a new node with v passed in as the argument
    var node = new Node(v);
    // check if head is null
    if (!this.head) {
      // if so set the head and tail to the new node
      this.tail = this.head = node;
    // if not
    } else {
      // set the new nodes next property to the current head
      node.next = this.head;
      // set the current heads previous property to the new node
      this.head.previous = node;
      // set the head to the new node
      this.head = node;
    }
    // size++
    this.size++;
  }

  // remove head
  removeHead() {
    // create a current variable set to the head
    var current = this.head;
    // set the previous property of head.next to null
    current.next.previous = null;
    // set the head to head.next
    this.head = current.next;
    // size--
    this.size--;
    // return current
    return current.value;
  }

  // remove tail
  removeTail() {
    // create the current variable set to the tail
    var current = this.tail;
    // set the next of current.previous to null
    current.previous.next = null;
    // set the tail to current.previous
    this.tail = current.previous;
    // size--;
    this.size--;
    // return current.value
    return current.value;
  }
  // contains
  contains(v) {
    // create a current variable and set its value to the head node
    var current = this.head;
    // while current is true
    while (current) {
      // check if current.value is equal to v and return true if so
      if (current.value === v) return true;
      // set current to current.next
      current = current.next;
    }
    // return false
    return false;
  }
  // traverse method - takes in cb
  traverse(cb) {
    // create a current variable and set its value to the head node
    var current = this.head;
    // while current is true
    while (current) {
      // call cb on current
      cb(current);
      // set current to current.next
      current = current.next;
    }
  }

  print() {
    var allNodes = [];
    var current = this.head;
    while (current) {
      allNodes.push(current);
      current = current.next;
    }
    console.log(allNodes);
  }

  printSize() {
    console.log(this.size);
  }
};

class Node {
  constructor (value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
};

function addFive(node) {
  node.value += 5;
}

var newList = new DoublyLinkedList();
newList.addToHead(9);
newList.addToHead(8);
newList.addToHead(6);
newList.addToHead(5);
newList.addToTail('test');

var removedFromHead = newList.removeHead();
var removedFromTail = newList.removeTail();

var containsTest = newList.contains('test'); // we want false
var contains8 = newList.contains(8); // we want true

newList.print();

newList.traverse(addFive);

newList.print();
console.log('Removed from Head: ' + removedFromHead);
console.log('Removed from Tail: ' + removedFromTail);

console.log('Contains "test": ' + containsTest); // should return false
console.log('Contains 8: ' + contains8); // should return true

newList.printSize();
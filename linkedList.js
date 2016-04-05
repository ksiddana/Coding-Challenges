var LinkedList = function() {
  this.tail = null;
  this.head = null;
}

LinkedList.prototype.addToTail = function(value) {
  var newNode = Node(value);

  if (this.head === null && this.tail === null) {
    this.head = newNode;
    this.tail = newNode;
  }

  this.tail.next = newNode;
  this.tail = newNode;
}

var Node = function(value) {
  var node = {}

  node.value = value;
  node.next = null;

  return node
}

var list = new LinkedList();

list.addToTail(2)
list.addToTail(3)
console.log(list);
var Tree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};


var Node = function (value){
  this.value = value;
  this.next = null;
}

var LinkedList = function (){
  this.head = null;
  this.tail = null;

}

LinkedList.prototype.insert = function(node) {
  // body..
  var listNode = new Node (node);
  if(this.head === null){
    this.head = listNode;
    this.tail = listNode;
  } else {
    this.tail.next = listNode;
    this.tail = listNode;
  }

};

var getSiblings = function(startNode) {
  // console.log(startNode);

  var startArray = [];
  startArray.push(startNode);
  // console.log(startArray);

  var recurse = function(array, level) {

    var children = [];

    // List of siblings
    console.log("\n\nbList of Siblings")
    var list = new LinkedList();

    array.forEach(function(node) {
      
      if (node) {
      //  console.log(node.value);
      // create the linkedList
        list.insert(node);
        children.push(node.left)
        children.push(node.right)
      }

    })

    console.log("the list at level", level, list.head.next);
    if (children.length){
      recurse(children, level + 1)
    }

  }

  // starting recursion
  recurse(startArray, 0);

}




var root = new Tree(10);
var c1 = new Tree(4);
var c2 = new Tree(12);
var d1 = new Tree(2);
var d2 = new Tree(8);
var d3 = new Tree(11);

root.left = c1;
root.right = c2;

c1.left = d1;
c1.right = d2;

c2.left = d3;


getSiblings(root);
// console.log(root);

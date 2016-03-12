
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function(value){
  this.children = [];
  this.value = value;
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(child1, child2){
  // TODO: implement me!

  // My closest ancestor should be my Mom (True)
  // How do we check that? 
  // grandma.isDescendant(mom)
  // me.closest ancestor is my grandmom


  var closestCommonAncestor = [];
  var firstAncestorPath = this.getAncestorPath(child1);
  var secondAncestorPath = this.getAncestorPath(child2);

      for (var i = 0; i < firstAncestorPath.length; i++) {
        for (var j = 0; j < secondAncestorPath.length; j++){
        
          if (firstAncestorPath[j] === secondAncestorPath[i]) {
              closestCommonAncestor = secondAncestorPath[j];
          }
        }
      }
  console.log(closestCommonAncestor);
}

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(child){
  // TODO: implement me!
  // Create a results Array
  // function takes takes in a parameter, and check the chain, 
    // whatever called the parameter
  // Iterate through children
  // Check for kid
  // Push "this" Grandma in result
  var results = [];
  results.push(this.value);
  

  var recursionCall = function(currentNode) {

    if (currentNode.children) {

      for (var i = 0; i < currentNode.children.length; i++) {
        if (currentNode.children[i].isDescendant(child)) {
            
            results.push(currentNode.children[i].value);
            recursionCall(currentNode.children[i]);
        }
      }
    }
  }

recursionCall(this);
results.push(child.value);
console.log(results);
return results;
};
/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

//example usage:
var ggma = new Tree('ggma');
var grandma = new Tree('grandma');
var mom = new Tree('mom');
var aunt = new Tree('aunt');
ggma.addChild(grandma);
grandma.addChild(aunt);
grandma.addChild(mom);
var me = new Tree('me');
mom.addChild(me);

// console.log(mom);
//grandma.getAncestorPath(me); // => [grandma, mom, me]

// console.log(aunt.isDescendant(mom));
// console.log(ggma.getAncestorPath(me));
console.log(ggma.getClosestCommonAncestor(aunt, mom));
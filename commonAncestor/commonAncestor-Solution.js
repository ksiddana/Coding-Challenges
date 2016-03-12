
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

  var path1 = this.ancestorPath(child1);
  var path2 = this.ancestorPath(child2);
  // if either of the children can't be found

  if (!path1 || !path2) {
    return null;
  }
  // we know this is a common ancestor
  var closestAncestor = this;
  // path1[i] && path2[i] holds when i is less
  // than the lengths of both path 1 and path2
  for (var i = 0; i < path1[i] && path2[i]; i++) {
    if (path1[i] === path2[i]) {
      closestAncestor = path[i];
    }
  }
  return closestAncestor;
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(target){
  // TODO: implement me!
  // Create a results Array
  // function takes takes in a parameter, and check the chain, 
    // whatever called the parameter
  // Iterate through children
  // Check for kid
  // Push "this" Grandma in result
  if (this === target) {
    return [this];
  }
  for (var i = 0; i < this.children.length; i++) {
    var pathFromChild = this.children[i].getAncestorPath(target);
    if (pathFromChild) {
      return [this].concat(pathFromChild);
    }
  }
  // if no subtree contains in the target
  return null;
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
console.log(ggma.getAncestorPath(me));
// console.log(ggma.getClosestCommonAncestor(aunt, mom));
/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/
/*
Array.prototype.isSubsetOf = function(subset){
  // Your code here
  var flag = false;
  var bigArray = this;
  var result = [];
  
  for (var i = 0; i < subset.length; i++) {
  	for (var j = 0; j < bigArray.length; j++) {

		if (bigArray[i] === subset[j]) {
	 		result.push(bigArray[j]);
	  	}
	}
  }
  console.log("Collision array: ", result);
  if ( result.length === subset.length ) {
  	flag = true;
  }
  return flag;
};*/

Array.prototype.isSubsetOf = function(array) {
  return isSubsetObjs(objectify(this), objectify(array));
}

var isSubsetObjs(obj1, obj2) {
  
  for (var key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

/*var objectify(arr) {
  // accumlator
  var out = {};
  // iterate  
  arr.forEach(function (item) { //iterate
    out[item] = true; // update
  });

  // return the accumulator
  return out; 
}*/

var objectify(arr) {
  return arr.reduce(function(out, item) {
    out[item] = true;
    return out;
  }, {});
}


var a = ['commit','push'];

console.log("Subset Array passed in:", a);
console.log(a.isSubsetOf(['commit','rebase','push','blame'])); // true

var b = ['merge','reset'];
// b.isSubsetOf(['reset','merge','add','commit']) // true 

console.log("Subset Array passed in:", b);
console.log(b.isSubsetOf(['reset','merge','add','commit'])); // true 



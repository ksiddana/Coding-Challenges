var gcd = function(a,b) {
  
  var index = 1;
  var result = 0;

  var subroutine = function() {

      console.log("a: ", a, "b: ", b, "index: ", a - index, "result", result);
      
      // Base case

      if (a % b === 0) {
        result = b
        return;
      }

      if (b % a === 0) {
        result = a
        return;
      }

      if (a < b) {
        if ( (a % (a - index) === 0) && (b % (a - index) === 0) ) {
          result = a - index;
          return
        }

      }

      if (a > b) {
        if ( (b % (b - index) === 0) && (a % (b - index) === 0) ) {
          result = b - index;
          return
        }

      }

      if (index > a || index > b) {
        result = null;
        return
      }

      index++;
      subroutine()

  }
  subroutine();
  return result;
}

var a = gcd(96,36);
console.log(a);

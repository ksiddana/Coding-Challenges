var factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1
  }

  return factorial(n-1) * n;
}

var a = factorial(5);

console.log(a);
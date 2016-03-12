/* Questions 1

What's the time Complexity of this function 
int mystrey(int n) {
  if (n = 0) return 0;
  if (n = 1) return 1;
  return mystrey(n - 1) + mystrey(n - 2);
}

O(1), O(n), 

*/

var result = 0;
var mystery = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return mystery(n - 1) + mystery(n - 2);
}

console.log("Question 1:", mystery(8));

/* Question 2

You have 1:30 seconds !!!

int i = 4;
int j = 1;
int k = 0;
for (i = 0; i < 3; i++) {
  k += j;
  j = 1 - j;
}

What is the Value of k?
Options are: 
a: 2
b: 5
c: 1
d: 4

*/

function q2(){
  var i = 4;
  var j = 1;
  var k = 0;

  for (i = 0; i < 3; i++) {
    k += j;
    j = 1 - j;
  }
  console.log(k);
}

q2();

/*

What is the value of total?

 total = 0;
 [1,2,3,4,5].each { |x| total += x * x }
 [5,4,3,2].each { |x| total -= x * x }

 Answers: 1, 15, 14, 0

*/

function q3() {

  var array =[1,2,3,4,5];
  var array2 =[5,4,3,2];
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    var x = array[i];
    total += x * x;
  }

  console.log("Total 1:", total);

  for (var i = 0; i < array2.length; i++) {
    var x = array2[i];
    total -= x * x;
  }

  console.log("Total 2:", total);
  return total;
}

q3();

/*

You have 1:30 seconds to complete the question

What is the value of x ?

def f1(n)
  n * n
def f2(n)
  n + n
def f3(n)
  n / n

x = f1(f2(f3(4)))

Answer Options:
2
1
4
0

*/

function f1(n) {
  return n * n;
}

function f2(n) {
  return n + n;
}

function f3(n) {
  return n/n;
}

x = f1(f2(f3(4)))

console.log(x);

function sortlist(list) {
  
  for (var i = 0; i < list.length; i++) {
    var pos = i;
    var current = list[i];
    
    while ( pos > 0 && list[pos -1] > current) {
      list[pos] = list[pos -1]
      pos = pos - 1
    }

    list[pos] = current;
  }
  // console.log(list);
  return list;
}

console.log(sortlist([2,5,1,4,3]))

danger = 1;
function mystery2(n) {

  if (danger > 50) {
    console.log("Danger:", danger);
    return 
  }
  danger++

  if (n <= 0) {  
    // console.log("Danger:", danger);
    return 1;
  }

  return mystery2(n-1);
}
x = mystery2(49);
console.log(x);
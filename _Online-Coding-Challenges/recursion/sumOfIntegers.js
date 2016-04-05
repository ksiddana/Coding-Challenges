var sumOfIntegers = function(array) {

  var sum = 0

  var subroutine = function(index) {

    // console.log(index, sum)

    if (index === array.length) {
      return
    }

    sum += array[index]

    subroutine(index+1)

  }

  subroutine(0)
  return sum;

}

var a = [1,2,3,4,5,6]

var b = sumOfIntegers(a);

console.log(b)

var array_sum = function(my_array) {

  console.log(my_array);
  
  if (my_array.length === 1) {
    return my_array[0]
  } else {
    var a = my_array.pop() + array_sum(my_array)
    return a;
  }
}

console.log(array_sum([1,2,3,4,5,6]))
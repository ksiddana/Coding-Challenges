var array = [1,2,3,4,5,6]

var reverse = function(arr, left, right) {

  while(left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++
    right--;
  }

  return arr;
}

function rotate(array, k) {
  console.log(array);
  array = reverse(array, 0, array.length - 1)
  array = reverse(array, k, array.length - 1)
  array = reverse(array, 0, k - 1)

  return array;
}


var b = rotate(array, 2);

console.log(b);
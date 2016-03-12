/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {

  var dictionary = {};
  var sortedArray = [];
  var finalArray = [];
  var obj = {};


  for (var i = 0; i < string.length; i++) {

    if (dictionary[string[i]] === undefined) {
      dictionary[string[i]] = 1;
    } else {
      dictionary[string[i]] += 1;
    }
  }

  for (var key in dictionary) {
    sortedArray.push([key, dictionary[key]]);
  }


  sortedArray.sort(function (a, b) {

     // console.log(a[0], b[0])
    if (a[1] < b[1]) {
      return 1;
    } else if (a[1] > b[1]) {
      return -1;
    } else if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    }
  });


  console.log(sortedArray);

};
characterFrequency('mississippi');
characterFrequency('miaaiaaippi');
characterFrequency('mmmaaaiiibbb');



input = [11, 7, 5, 6]
// [1,9,-1,5,10,23,-2,7,4,5,1];
// input = [6, 5, 3];
 
function bubble_sort(arr) {

length = arr.length;
 
  for (i = 0; i < length; i++) {
    for (j = length-1; j > i; j--) {
      if (arr[j] < arr[j-1]) {
        var temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }
    console.log("i: " + i + " Output Array: " + arr);
  }
 
  return arr;
}
 
// 1, 2, 3, 4, 5, 6, 7, 8
output = bubble_sort(input);
// console.log(output);

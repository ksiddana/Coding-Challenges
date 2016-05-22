/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
// var i;

// Feel free to add helper functions if needed.



var bubbleSort1 = function(array) {
  // Your code here.

  var swap = function(i, j, array) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    // console.log(array)
    return array;
  }

  for (var j = 0; j < array.length; j++) {

    for (var i = 0; i < (array.length - j - 1); i++) {
      
      if (array[i] > array[i+1]) {
        swap(i, i+1, array)
      }
    }
  }
  return array;
};

// var output = bubbleSort([2, 12, 10, 3, 1, 0, 4]); // yields [1, 2, 3]
// console.log("OUTPUT", output);


/* Version 3 */

var bubbleSort3 = function(array) {
    
    for (var i = 0; i < array.length; i++) {
        for (var j = array.length - 1; j > i; j--) {
            var temp = array[j];
            if (array[i] > temp) {
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    
    return array;
}

// a = [10,2,4,-1, 5,8,22,1,15,14,13]

// bubbleSort3(a);


var bubbleSort4 = function(array) {
    
    var startIndex = 0;
    var endIndex = array.length;
    var swapAgain = false;
    var newArray = array;
    
    var subroutine = function(startIndex, endIndex) {
        
        //Base Case
        if (startIndex > endIndex) {
           return 
        }

        // if (newArray[p2] === undefined && swapAgain === true) {
        //   console.log("---------------");
        //   p1 = 0;
        //   p2 = 1;
        //   swapAgain = false;
        //   subroutine(newArray)
        // }

        if (startIndex === endIndex - 1) {
          // console.log("---------------------");
          return subroutine(0, endIndex - 1);
        }

        if (newArray[startIndex] > newArray[startIndex + 1]) {
            var temp = newArray[startIndex];
            newArray[startIndex] = newArray[startIndex + 1];
            newArray[startIndex + 1] = temp;
        }

        // console.log(newArray, "SI: ", startIndex, "EI: ", endIndex);
        startIndex = startIndex + 1;

        subroutine(startIndex, endIndex);
        
    }

    subroutine(startIndex, endIndex);
    return newArray;
}

a = [3,10,2,4,-1, 0, 45, 67, 89, 23, 22, 10, 11, 15, 45, -10, - 78]
var input = [-9547,-8402,7282,78395,-24295,-14950,-4745,-64721,44237,24962,-71641,-42161,32297,-63603,37692,-78260,986,45271,60715,-16364,-65807,-60601,-49598,-39484,-39226,21734,12910,65867,-24586,-34058,-75697,45866,37539,11585,44262,-66755,76635,-40483,-51477,40872,64479,-43119,78711,16776,-26723,36404,18516,54263,1675,-768,-42101,15867,18630,-11700,56383,59403,-69966,-10706,45271,-14552,35236,49574,-48685,-7224,-18841,75576,6020,-22205,-44906,34542,-61332,-60427,71423,-62621,36349,-35300,53783,-25135,-61037,-24542,54096,-23139,71325,-7274,45161,47708,-27870,55195,-42997,-62599,-39357,72238,66975,-8042,-14986,-31866,-12466,71033,25929,22628,25576,44596,42201,16999,61975,-1450,61699,35758,53415,-79338,-68784,27512,-22477,-77458,-59761,-57316,50249,-7632,77879,-72747,9769,-41478,79490,-3256,30479,-15495,44878,-61986,-24462,-9193,40641,-78885,-44596,2843,18113,-62621,-78606,-188,53136,54808,474,64352,2321,57996,66893,22559,-79319,37143,-65072,78560,44395,24697,-42918,43886,-58558,67561,-51609,66320,-74424,3929,-22872,46217,5043,12531,-30940,-56844,29909,-29547,22968,3045,-54738,-56558,-12602,27582,-78561,-25709,-29858,-77880,-68566,-14930,-79320,55829,-70233,-42238,19715,-48791,-54677,48105,-62471,-49101,-27966,-5343,77115,57076,-72812,-33824,-79767,37096,16628,23200,-39858,41890,46641,27539,-10527,48079,-78169,39614,50198,-66736,-55316,50878,69092,-45549,-71360,8807,-14340,-46037,-23087,3189,-15139,28946,77845,-18023,6023,-74967,28152,6255,42129,-35219,-50545,-77728,-73329,76095,29810,-3856,44175,31641,-44242,14373,44904,-19558,-14749,33997,14893,-6109,-37195,-79447,27853,19717,3741,-67286,-31336,1586,-5309,54686,6619,-57157,-19059,-31251,-12376,10395,-28980,-5705,6491,-79169,70438,-29334,32471,-53803,65039,-2624,6639,-29710,-48626,-58468,44180,-5822,-57915,-7966,-66104,25825,4748,-17441,-52588,79438,-42755,34031,-57718,18186,-77220,9905,-51418,-26200,-75799,35072,-25370,74639,-74262,-72898]

console.log(bubbleSort4(a));

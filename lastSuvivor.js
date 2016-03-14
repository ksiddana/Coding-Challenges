/*
Popsugar Challenge
Challenge: Take a second to imagine that you are in a room with 100 chairs arranged in a circle. 
These chairs are numbered sequentially from One to One Hundred. At some point in time, 
the person in chair #1 will be told to leave the room. The person in chair #2 will be skipped, 
and the person in chair #3 will be told to leave. Next to go is person in chair #6. 
In other words, 1 person will be skipped initially, and then 2, 3, 4.. and so on. 
This pattern of skipping will keep going around the circle until there is only one person remaining- 
The survivor! Note that each chair is removed when the person leaves the room.

Write an HTML page using Javascript/Typescript and Angular to visualize the disappearing chairs and figure out which chair the survivor is sitting in.
*/

// [L1,S2,L3,S4,S5,L6,S7,S8,S9,L10,S11,S12,S13,S14,S15,L16 ...]

var chairs = []
  
  for (var i = 1; i <= 10; i++) {
    chairs.push(i);
  }

function musicalChairs() {

  var danger = 0;

  var subroutine = function(skip, count, chairs) {

    if (danger > 100) {
      console.log("!! DANGER !!");
      return
    }
    danger++;

    console.log("SKIP: ", skip, "count: ", count);

    //base case checks to see if there is a lone survivor
    if (chairs.length === 1) {
      console.log(chairs[0]);
      return chairs[0];
    }
    //remove chairs when they are left/become dead
    chairs.splice(skip, 1);
    //increment the skip count so we know which chair
    //to leave next. 
    console.log("SKIP: ", skip, "count: ", count, chairs.length);
    skip = (skip + 1 + count) % chairs.length;
    count++;
    console.log("------------------------------");
    //recursive call
    return subroutine(skip, count, chairs);
  }

  subroutine(0, 0, chairs);

}

musicalChairs();

/*
var lastSurvivor = function(skip, count, chairs) {
    //base case checks to see if there is a lone survivor
    if (chairs.length === 1)
        return chairs[0];
    //remove chairs when they are left/become dead
    chairs.splice(skip, 1);
    //increment the skip count so we know which chair
    //to leave next. 
    skip = (skip + 1 + count) % chairs.length;
    count++;
    //recursive call
    return lastSurvivor(skip, count, chairs);
};

// TESTS
----------------------------------------------------------------------------

var result = lastSurvivor(0, 0, chairs);
console.log('The lone survivor is located in chair #', result);
// The lone survivor is located in chair # 31
*/

/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

/*var mixEvents = function(obj) {
  // TODO: Your code here
  var returnObj = Object.create(mixEventsMethods);

  returnObj.name = obj.name;
  returnObj.age = obj.age;


  return returnObj;
};

mixEventsMethods = {}

mixEventsMethods.on = function(eventName, callback) {
  
  if (eventName === 'ageChange') {
    this.age++
    // callback();
    this.trigger('ageChange', callback);
  }
}

mixEventsMethods.trigger = function(eventName, callback) {

  if (eventName === 'ageChange') {
    callback();
  } 

}

var obj = mixEvents({ name: 'Alice', age: 30 });

obj.on('ageChange', function() {
  console.log('Age changed', obj.age);
});

obj.age++;*/

// obj.trigger('ageChange')
// console.log(obj);

var mixEvents = function(obj) {
  var events = {};

  obj.trigger = function(event) {
    
    if (events[event]) {  
      var args = Array.prototype.slice.call(arguments, 1);
      events[event].forEach(function (callback) {
        callback.apply(obj, args);
      })
    }
  }

  obj.on = function(event, callback) {

    events[event] = events[event] || [];
    events[event].push(callback);

  };

  return obj;
};

var obj = mixEvents({ name: 'Alice', age: 30 });

obj.on('ageChange', function() {
  console.log('Age changed', obj.age);
});

obj.age++;

obj.trigger('ageChange');
/**
 * Implement a function that takes a URL and a callback and makes a JSONP
 * GET request to that URL.
 *
 * We've provided the following API endpoint:
 *   http://toy-problems.hackreactor.com/jsonparty
 *
 * Your function should accept a call with that URL, and call the callback
 * with the response data from the server. You should NOT return the response
 * from the server, only the wrapped data! jQuery is not available, and you won't
 * be able to do this using a native XMLHttpRequest.
 *
 * Example:
 *   jsonpRequest('http://toy-problems.hackreactor.com:3003/jsonparty', function (data) {
 *     console.log(data.response); // "Aw yeah, now we're JSONPartying"
 *     console.log(data.random); // 3558
 *   });
 *
 *   // Subsequent requests should have properly random responses:
 *   jsonpRequest('http://toy-problems.hackreactor.com:3003/jsonparty', function (data) {
 *     console.log(data.random); // 1733
 *   });
 *
 * Hint: The API accepts a `callback` parameter. What is that for?
 * See http://en.wikipedia.org/wiki/JSONP if you need more information
 * about this exciting AJAX protocol!
 *
 * Feel free to use Google in searching for your ideal implementation!
 */

 /*
 Lets make some changes: 
 Store our callback and ensure that we invoke thr ight ones.
 Make it an IIFE
 */

var url = 'http://toy-problems.hackreactor.com/jsonparty';

/*var jsonpRequest = function(url, callback) {
  
  $.ajax({
    url: 'http://toy-problems.hackreactor.com/jsonparty',
    type: 'GET',
    contentType: 'json',
    success: function(data) {
      console.log(data);
    },
    error: function() {
      console.log('API Data could not be fetched');
    }
  });

};*/

jsonpRequest(url, function(data) {
  console.log(data.response); // "Aw yeah, now we're JSONPartying"
  console.log(data.random); // 3558
})

var jsonDispatcher = {};
var jsonRequest = (function() {
  // create an incrementable key to avoid collisions
  var key = 0;

  return function(url, callback) {
    var i = ++key;
    jsonDispatcher[i] = function() {
      callback.apply(this, arguments);
      delete jsonDispatcher[i];
      // get an array of all elements with ;script class
      var e = document.body.getElementsByClassName('script');
      e[0].parentNode.removeChild(e[0]);
      
    };

    // Create a new script to load the jsonp
    var script = document.createElement('script');
    script.src = url + '?callback=jsonDispatcher[' + key + ']';
    script.className = 'script'; // Add class to all script tags
    // Inject our new script into the DOM
    document.body.appendChild(script);
  };

}() );



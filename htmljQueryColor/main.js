$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  // Iterate through the document.body
  // Find all the children of the document.body using .children method
  // if you find a <p> tag, you've reached a paragraph,
      // Now, split on every word with space
      // wrap the word in a <p> tag
  $(document).ready(function() { 
  
  var $body = $('body');

    for (var i = 0; i < $body.children.length; i++) {

      var $el = $('p').text().split(" ");
        
    }

    console.log($el);

  });

  $('p').each(function(index, element) {
    var $el = $(element);
    var words = $el.text().split(' ');
    $el.html("");

    for (var i = 0; i < words.length; i++) {
      var newSpan = $('<span>').text(words[i] + ' ');
      $el.append(newSpan);
    }
  });


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

  setInterval(function() {

    $.each($('span'), function() {
      var red = Math.floor(Math.random() * 256);
      var green = Math.floor(Math.random() * 256);
      var blue = Math.floor(Math.random() * 256);

      $(this).css('color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    });

  }, 1000);

});


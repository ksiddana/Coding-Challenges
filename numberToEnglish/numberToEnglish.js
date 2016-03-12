/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

// Check to see, if the number belongs to which decimal place
// Iterate through the dictionary and first determine, which key gives the number a mod of 0
// If the number is 

Number.prototype.toEnglish = function (number) {
  // return my value as english words
/*  var result = 0;

  for (var keys in numbersToPlace) {
    var decimalPlace = this % keys;
    
    if (decimalPlace !== 0 && decimalPlace !== this) {
      console.log(decimalPlace);
    }
  }*/

  var flag = false;

  for (var key in numbersToWords) {
    
    if (numbersToWords.hasOwnProperty(this) && flag === false) {
      flag = true;
      console.log(numbersToWords[this]);
    }
  }

  /*
   Account for cases
  // 1. Special number - already exists in our numToWords looki[ table -> 0 to 19, plus multiple s of 10 up to 90
     2. "less than 100"

     var n = this.valueOf(), output;

     if (numToWords[n] < 20) {
      
     } else if (n < 100) {
      // tens and single digit, hyphenated 
     } else {
      // Combo of number and a place name
      if (n < 1000) {
        place = 100;
      } else {
        numInPlace = Math.floor(n / floor);
        numLeft = n % place;
        // assemble this 1000s place
        output = numInplace.toEnglish() + ' ' + numToPlace[place]

      }
     }

  2. Recursive case
  Number.prototype.toEnglish - function() {
  if (this == 0) return numberToWords[0]
    var words = [];
    var number = this.valueOf();
    var place = 1;

    do {
      var I = number % 10;
      var X = number % 100;
      var X = number % 1000 - X - I;

      // name our power 
    }
  }

};

(12).toEnglish()

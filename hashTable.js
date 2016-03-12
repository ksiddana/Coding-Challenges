/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1

var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
  result.insert = function(key, value){
    // TODO: implement `insert
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var found = false;
    var bucket = storage[index] || [];

    // Check the index for a bucket, if the bucket does not exist
    if (storage[index] === undefined) {
      // Make a Bucket
      storage[index] = bucket;
    }

    // Iterate through the bucket 
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      // console.log("Tuple Values:", tuple);
      // If the key value is equal to the tuple[0]
      if (tuple[0] === key) {
        
        // Insert the k,v pairs as tuples into the bucket
        tuple[1] = value;

        found = true;
        
      }
    }
    //if the key is not found in the bucket, then we want to push
    // a new tuple into the bucket.
    if (!found) {
        bucket.push([key,value]);
        size++;
        // Resize if necesssary
        if (size > storageLimit * 0.75) {
          result.resize(storageLimit * 2);
        }
    }
    console.log("Index:", index, "Bucket: ", bucket);
    console.log("Storage: ", storage);

  };

  result.retrieve = function(key){
    // TODO: implement `retrieve`
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    // Assign an empty array to avoid edge cases
    var bucket = storage[hash] || [];
    var value = undefined; // be explicit

    bucket.forEach(function(pair) {
      if (pair[0] === key) {
        value = pair[1];
      }
    });

    console.log(value);
    return value;

  };

  result.remove = function(key){
    // TODO: implement `remove`
    var hash = getIndexBelowMaxForKey(key, storageLimit);
    // Assign an empty array to avoid edge cases
    var bucket = storage[hash];
    var pairs = [];
    var value = undefined; // be explicit

    bucket.forEach(function(pair) {
      if (pair[0] === key) {
        value = pair[1];
        size--;
      } else {
        pairs.push(pair);
      }
    });
    storage[hash] = pairs;

    if (storageLimit > 4 && size < storageLimit * 0.25) {
      result.resize(storageLimit / 2); // This must be integral
    }
  };

  result.resize = function(newSize) {
    // console.log(result.storage);
    var copy = storage;
    storageLimit = newSize;
    storage = [];
    size = 0;

    copy.forEach( function(pairs){
      pairs.forEach( function(pair) {
        result.insert(pair[0], pair[1]);
      });
    });
  };

  
  return result;
};


var hash1 = makeHashTable();

hash1.insert('paris', 'france');
hash1.insert('london', 'UK');
hash1.insert('toulouse','france');
hash1.insert('london','scottland');
hash1.insert('london','UK');
hash1.insert('barcelona','Spain');

hash1.retrieve('paris');
hash1.retrieve('london');
hash1.retrieve('toulouse');

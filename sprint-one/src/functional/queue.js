var makeQueue = function(){
  var someInstance = {};
  var length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length ++;
  };

  someInstance.dequeue = function(){
    if ( length > 0 ){
      var temp = storage[0];
      for (var i = 1; i < length; i++) {
        storage[i - 1] = storage[i];
      }
      delete storage[length -1];
      length --;
    }

    return temp;

  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};

var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    var length = someInstance.size();
    storage[length] = value;
  };

  someInstance.dequeue = function(){
    var result = storage[0];
    var length = someInstance.size();

    for (var i = 1; i < length; i++){
      storage[i-1] = storage[i];
    }

    delete storage[length-1];

    return result;
  };

  someInstance.size = function(){
    var count = 0;
    for (var k in storage){
      if (k === parseInt(k).toString()) {
        count++;
      }
    }
    return count;
  };

  return someInstance;
};

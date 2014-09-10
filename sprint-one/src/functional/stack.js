var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var length = someInstance.size();
    storage[length] = value;
  };

  someInstance.pop = function(){
    var length = someInstance.size();
    var result = storage[length-1];

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
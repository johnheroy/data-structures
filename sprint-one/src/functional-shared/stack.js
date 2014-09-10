var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value){
    var length = this.size();
    this.storage[length] = value;
  },
  pop: function(){
    var length = this.size();
    var result = this.storage[length-1];
    delete this.storage[length-1];
    return result;
  },
  size: function(){
    var count = 0;
    for (var k in this.storage){
      if (k === parseInt(k).toString()){
        count++;
      }
    }
    return count;
  }
};



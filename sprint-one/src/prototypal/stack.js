var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  var length = this.size();
  this.storage[length] = value;
};

stackMethods.pop = function(){
  var length = this.size();
  var result = this.storage[length-1];
  delete this.storage[length-1];
  return result;
};

stackMethods.size = function(){
  var count = 0;
  for (var k in this.storage){
    if (k === parseInt(k).toString()){
      count++;
    }
  }
  return count;
};

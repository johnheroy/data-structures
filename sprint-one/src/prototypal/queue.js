var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  var length = this.size();
  this.storage[length] = value;
};

queueMethods.dequeue = function(){
  var result = this.storage[0];
  var length = this.size();
  for (var i = 1; i < length; i++){
    this.storage[i-1] = this.storage[i];
  }
  delete this.storage[length-1];
  return result;
};

queueMethods.size = function(){
  var count = 0;
  for (var k in this.storage){
    if (k === parseInt(k).toString()){
      count++;
    }
  }
  return count;
};

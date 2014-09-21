var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
=======
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.length = 0;
  return obj;
>>>>>>> pairing
};

var stackMethods = {
  push: function(item){
    this.storage[this.length] = item;
    this.length++;
  },
  pop: function(){
    if (this.length > 0){
      var temp = this.storage[this.length-1];
      delete this.storage[this.length-1];
      this.length--;
      return temp;
    }
  },
  size: function(){
    return this.length;
  }
};

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

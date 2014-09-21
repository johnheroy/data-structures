var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.length = 0;
  return obj;
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

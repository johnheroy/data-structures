var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.length = 0;
  return _.extend(obj, queueMethods);
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.length] = value;
    this.length++;
  },

  dequeue: function(){
    if (this.length > 0){
      var temp = this.storage[0];
      // delete this.storage[0];
      this.reset();
      this.length--;
      return temp;
    }
  },

  size: function(){
    return this.length;
  },

  reset: function(){
    for (var i = 1; i < this.length; i++){
      this.storage[i-1] = this.storage[i];
    }
    delete this.storage[length-1];
  }
};




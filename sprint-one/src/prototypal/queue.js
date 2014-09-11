var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.length = 0;
  return obj;
};

var queueMethods = {
  size: function () {
    return this.length;
  },
  enqueue: function (value) {
    this.storage[this.length] = value;
    this.length ++;
  },
  dequeue: function () {
    if (this.length > 0) {
      var temp = this.storage[0];
      for (var i = 1; i < this.length; i++){
        this.storage[i - 1] = this.storage[i];
      }
      delete this.storage[this.length - 1];
      this.length--;
      return temp;
    }
  }
};



var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD

  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

=======
  this.length = 0;
  this.storage = {};
};

Stack.prototype.push = function(item){
  this.storage[this.length] = item;
  this.length++;
};

>>>>>>> pairing
Stack.prototype.pop = function(){
  if (this.length > 0){
    var temp = this.storage[this.length-1];
    delete this.storage[this.length-1];
    this.length--;
    return temp;
<<<<<<< HEAD
  }
};

Stack.prototype.size = function(){
  return this.length;
};
=======
>>>>>>> pairing

  }
};

Stack.prototype.size = function(){
  return this.length;
};

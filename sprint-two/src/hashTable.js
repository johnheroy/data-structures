var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = {};
  temp[k] = v;
  if (!this._storage[i]){
    this._storage[i] = [temp];
  } else {
    this._storage[i].push(temp);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  if (bucket){
    for (var j = 0; j < bucket.length; j++){
      var currentItem = bucket[j];
      if (currentItem[k]){
        return currentItem[k];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // problematic
  delete this._storage[i];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

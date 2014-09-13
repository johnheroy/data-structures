var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = [];
  temp[0] = k;
  temp[1] = v;
  if (!this._storage[i]){
    this._storage[i] = [temp];
  } else {
    for (var j = 0; j < this._storage[i].length; j++){
      if (this._storage[i][j][0] === k){
        this._storage[i][j][1] = v;
        return;
      }
    }
    this._storage[i].push(temp);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  if (bucket){
    for (var j = 0; j < bucket.length; j++){
      var currentItem = bucket[j];
      if (currentItem[0] === k){
        return currentItem[1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  for (var j = 0; j < bucket.length; j++){
    var item = bucket[j];
    if (item[0] === k){
      bucket.splice(j, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

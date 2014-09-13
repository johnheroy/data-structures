var makeBinarySearchTree = function(value, parent){
  var tree = {};

  tree.value = value;
  tree.parent = parent;
  tree.left = null;
  tree.right = null;
  tree.height = 1;

  tree.insert = function(item){
    if (item >= tree.value) {
      if (!tree.right){
        tree.right = makeBinarySearchTree(item, tree).bubble();
      } else {
        tree.right.insert(item);
      }
    } else {
      if (!tree.left ){
        tree.left  = makeBinarySearchTree(item, tree).bubble();
      } else {
        tree.left.insert(item);
      }
    }
  };

  tree.bubble = function(){
    if (tree.parent){
      tree.parent.height = tree.height + 1;
      tree.parent.bubble();
    }
    return tree;
  };

  tree.contains = function(item){
    if (item === tree.value) {
      return true;
    } else if (item > tree.value) {
      return (tree.right) ? tree.right.contains(item) : false;
    } else {
      return (tree.left) ? tree.left.contains(item) : false;
    }
  };

  tree.depthFirstLog = function(callback){
    callback(tree.value);
    if (tree.right) {
      tree.right.depthFirstLog(callback);
    }
    if (tree.left){
      tree.left.depthFirstLog(callback);
    }
  };

  tree.flatten = function(){
    var results = [];

    var left = (tree.left) ? tree.left.flatten() : null;
    if (left){
      for (var i = 0; i < left.length; i++){
        results.push(left[i]);
      }
    }

    results.push(tree.value);

    var right = (tree.right) ? tree.right.flatten() : null;
    if (right){
      for (var i = 0; i < right.length; i++){
        results.push(right[i]);
      }
    }

    return results;
  };

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

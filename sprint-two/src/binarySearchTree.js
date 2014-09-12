var makeBinarySearchTree = function(value){
  var tree = {};

  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(item){
    if (item >= tree.value) {
      if (!tree.right) {
        tree.right = makeBinarySearchTree(item);
      } else {
        tree.right.insert(item);
      }
    } else {
      if (!tree.left) {
        tree.left = makeBinarySearchTree(item);
      } else {
        tree.left.insert(item);
      }
    }
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

  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

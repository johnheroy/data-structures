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
    var leftHeight = (tree.left) ? tree.left.height : 0;
    var rightHeight = (tree.right) ? tree.right.height : 0;
    if (Math.abs(leftHeight - rightHeight) > 1){
      var tempTree = rebalance(tree.flatten(), tree.parent);
      if (tree.parent){
        if (tree === tree.parent.left){
          tempTree = tree.parent.left;
        } else {
          tempTree = tree.parent.right;
        }
      }
    }

    if (tree.parent){
      if (tree.parent.height < tree.height + 1){
        tree.parent.height = tree.height + 1;
      }
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

var rebalance = function(array, parent){
  if (array.length < 1){
    return null;
  }

  var medianIndex = Math.floor(array.length / 2);
  var newTree = makeBinarySearchTree(array[medianIndex], parent);

  // get left and right sides of the array
  var left = array.slice(0, medianIndex);
  var right = array.slice(medianIndex + 1);

  // set children of the current tree to tree.balance(left side of array)
  var leftTree = rebalance(left, newTree);
  var rightTree = rebalance(right, newTree);

  if (leftTree){
    leftTree.bubble();
    newTree.left = leftTree;
  }
  if (rightTree){
    rightTree.bubble();
    newTree.right = rightTree;
  }

  return newTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

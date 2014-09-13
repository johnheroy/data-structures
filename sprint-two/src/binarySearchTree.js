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
    var leftHeight = (tree.left) ? tree.left.height : 0;
    var rightHeight = (tree.right) ? tree.right.height : 0;
    if (Math.abs(leftHeight - rightHeight) > 1){
      console.log(leftHeight - rightHeight);
      tree.rebalance();
    } 
  };

  tree.bubble = function(){
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

  tree.rebalance = function(){

    var recurse = function(array, parent){
      if (array.length < 1){
        //debugger;
        //parent.bubble();
        return null;
      }

      var medianIndex = Math.floor(array.length / 2);
      var subTree = makeBinarySearchTree(array[medianIndex], parent);

      var leftArray = array.slice(0, medianIndex);
      var rightArray = array.slice(medianIndex + 1);

      subTree.left = recurse(leftArray, subTree);
      subTree.right = recurse(rightArray, subTree);

      return subTree;
    };

    var elements = tree.flatten();  // root node
    debugger;
    var medianIdx = Math.floor(elements.length / 2);
    tree.value = elements[medianIdx];
    tree.left = recurse(elements.slice(0, medianIdx), tree);
    tree.right = recurse(elements.slice(medianIdx + 1), tree);
  };

  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

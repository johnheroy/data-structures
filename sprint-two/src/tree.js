var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = makeTree(value);
  if (this.children === undefined) {
    this.children = [];
  }
  this.children.push(childTree);
  return childTree;
};

treeMethods.contains = function(target){

  if (this.value === target) {
    return true;
  } else if (this.children !== undefined){
    var foundChildren = false;
    for (var i = 0; i < this.children.length; i++) {
      foundChildren = (foundChildren || this.children[i].contains(target));
    }
    return foundChildren;
  } else {
    return false;
  }

};

//tree.addChild(val).addChild(val)


/*
 * Complexity: What is the time complexity of the above functions?
 */

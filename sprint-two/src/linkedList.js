var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var node = makeNode(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target){
    if (!list.head){ return; }
    var currentNode = list.head;
    while (currentNode !== null){
      if (currentNode.value === target){ return true; }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

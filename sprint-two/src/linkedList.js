var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (!list.head && !list.tail){
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    if (!list.head){ return; }
    var temp = list.head;
    if (list.head === list.tail){
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }
    return temp.value;
  };

  list.contains = function(target){
    if (!makeLinkedList.head){ return; }
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

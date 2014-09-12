var Graph = function(){
  this.vertList = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var node = new Node(newNode);
  this.vertList[newNode] = node;
  if (toNode){
    this.addEdge(newNode, toNode);
  } else if (this.size() === 2){
    var keys = [];
    for (var key in this.vertList){
      keys.push(key);
    }
    this.addEdge.apply(this, keys);
  }

};

Graph.prototype.contains = function(node){
  return !!this.vertList[node];
};

Graph.prototype.removeNode = function(node){
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return !!this.vertList[fromNode].connections[toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this.vertList[fromNode]){
    this.addNode(fromNode);
  }
  if (!this.vertList[toNode]){
    this.addNode(toNode);
  }
  this.vertList[fromNode].connections[toNode] = 0;
  this.vertList[toNode].connections[fromNode] = 0;
};

Graph.prototype.size = function(){
  var count = 0;
  for (var k in this.vertList){
    count++;
  }
  return count;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

var Node = function(value){
  this.value = value;
  this.connections = {};
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

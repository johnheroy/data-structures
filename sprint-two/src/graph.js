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
    for (var k in this.vertList){
      keys.push(k);
    }
    this.addEdge(keys[0], keys[1]);
  }
};

Graph.prototype.contains = function(node){
  return !!this.vertList[node];
};

Graph.prototype.removeNode = function(node){
  var myNode = this.vertList[node];
  var connections = myNode.connections;
  for (var k in connections){
    var fromNode = this.vertList[k];
    delete fromNode.connections[node];
  }
  delete this.vertList[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return (this.vertList[fromNode].connections[toNode] !== undefined);
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
  var node1 = this.vertList[fromNode];
  var node2 = this.vertList[toNode];
  delete node1.connections[toNode];
  delete node2.connections[fromNode];

  if (node1.length() === 0){
    delete this.vertList[fromNode];
  }
  if (node2.length() === 0){
    delete this.vertList[toNode];
  }
};

var Node = function(value){
  this.value = value;
  this.connections = {};
};

Node.prototype.length = function(){
  var count = 0;
  for (var k in this.connections){
    count++;
  }
  return count;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

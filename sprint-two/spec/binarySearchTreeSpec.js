describe('binarySearchTree', function() {
  var binarySearchTree;
  var bigTree;
  var smallTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);

    bigTree = makeBinarySearchTree(10);
    bigTree.insert(20);
    bigTree.insert(2);
    bigTree.insert(3);
    bigTree.insert(4);
    bigTree.insert(5);

    smallTree = makeBinarySearchTree(2);
    smallTree.insert(1);
    smallTree.insert(3);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    console.log(array);
    expect(array).to.eql([5,2,3]);
  });

  it('should contain "parent" property', function(){
    expect(binarySearchTree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should reference parent if it exists', function(){
    expect(smallTree.right.parent).to.equal(smallTree);
  });

  it('should contain "height" property', function(){
    expect(binarySearchTree.hasOwnProperty("height")).to.equal(true);
  });

  it('should change height values after adding a new node', function(){
    expect(smallTree.height).to.equal(2);
  });

  it('should have a "flatten" method which returns a sorted array of elements', function(){
    expect(smallTree.flatten()).to.eql([1, 2, 3]);
  });

  it('should rebalance the tree when the max depth ' +
     'is greater than or equal to twice the min depth', function(){
    expect(bigTree.value).to.equal(5);
    expect(bigTree.left.value).to.equal(3);
    expect(bigTree.left.left.value).to.equal(2);
    expect(bigTree.left.right.value).to.equal(4);
    expect(bigTree.right.value).to.equal(20);
    expect(bigTree.right.left.value).to.equal(10);
  });

});




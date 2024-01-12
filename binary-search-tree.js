// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return this.root;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
        return currentNode.left;
      }
      return this.insert(val, currentNode.left);
    }

    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
        return currentNode.right;
      }
      return this.insert(val, currentNode.right);
    }
  }

  search(val, currentNode = this.root) {
    if (!currentNode) return false;

    if (val < currentNode.val) {
      return this.search(val, currentNode.left);
    } else if (val > currentNode.val) {
      return this.search(val, currentNode.right);
    } else {
      return true;
    }
  }

  preOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }

  inOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  }

  postOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const q = [this.root];
    while (q.length) {
      const current = q.shift();
      console.log(current.val);

      if (current.left) q.push(current.left);
      if (current.right) q.push(current.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root];
    while (stack.length) {
      const current = stack.pop();
      console.log(current.val);

      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
  }
}
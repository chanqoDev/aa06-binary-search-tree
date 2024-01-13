const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // if the rootNode not defined return  undefined
  if (!rootNode) {
    return undefined;
  }
  // current node is the a root
  let currentNode = rootNode;
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode.val;
}

function findMaxBST(rootNode) {
  if (!rootNode) return undefined;
  let currentNode = rootNode;
  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode.val;
}

function findMinBT(rootNode) {
  if (!rootNode) return undefined;
  let minVal = rootNode.val;
  if (rootNode.left) {
    let leftMin = findMinBT(rootNode.left);
    minVal = Math.min(minVal, leftMin);
  }
  if (rootNode.right) {
    let rightMin = findMinBT(rootNode.right);
    minVal = Math.min(minVal, rightMin);
  }

  return minVal;
}

function findMaxBT(rootNode) {
  if (!rootNode) return null;
  let max = rootNode.val;
  if (rootNode.left) {
    max = Math.max(max, findMaxBT(rootNode.left));
  }
  if (rootNode.right) {
    max = Math.max(max, findMaxBT(rootNode.right));
  }
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) return 0;
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

function balancedTree(rootNode) {
  if (!rootNode) return true;
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);
  const heightDiff = Math.abs(leftHeight - rightHeight);
  return (
    heightDiff <= 1 &&
    balancedTree(rootNode.left) &&
    balancedTree(rootNode.right)
  );
}

function countNodes(rootNode) {
  if (!rootNode) return 0;
  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

let btRoot = new TreeNode(1);
btRoot.left = new TreeNode(2);
btRoot.left.left = new TreeNode(4);
btRoot.left.right = new TreeNode(5);
btRoot.right = new TreeNode(3);
btRoot.right.left = new TreeNode(6);
btRoot.right.right = new TreeNode(7);

console.log(findMinBT(btRoot));

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};

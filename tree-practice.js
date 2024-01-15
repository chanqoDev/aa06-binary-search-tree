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
  if (rootNode.val === target) return null
  let curr = rootNode;
  while (curr) {
    if ((curr.left && curr.left.val === target) || (curr.right && curr.right.val === target)) {
      return curr;
    } else if (target < curr.val) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
}

function inOrderPredecessor(rootNode, target) {
  let predecessor = null;
  while (rootNode) {
    if (rootNode.val >= target) {
      rootNode = rootNode.left;
    } else {
      predecessor = rootNode.val;
      rootNode = rootNode.right;
    }
  }
  return predecessor;
}

function deleteNodeBST(rootNode, target) {
  if (!rootNode) {
    return undefined;
  }

  let parent = null;
  let current = rootNode;

  // Find the node to be deleted and its parent
  while (current && current.val !== target) {
    parent = current;
    if (target < current.val) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  // If the target is not found, return undefined
  if (!current) {
    return undefined;
  }

  // Determine the number of children the node has
  const numChildren = (current.left ? 1 : 0) + (current.right ? 1 : 0);

  // Case 0: Zero children and no parent
  if (numChildren === 0 && !parent) {
    return null;
  }

  // Case 1: Zero children
  if (numChildren === 0) {
    if (parent.left === current) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  }

  // Case 2: Two children
  else if (numChildren === 2) {
    let predecessorParent = current;
    let predecessor = current.left;

    // Find the in-order predecessor
    while (predecessor.right) {
      predecessorParent = predecessor;
      predecessor = predecessor.right;
    }

    // Replace the value of the current node with the in-order predecessor
    current.val = predecessor.val;

    // Remove the in-order predecessor
    if (predecessorParent.left === predecessor) {
      predecessorParent.left = null;
    } else {
      predecessorParent.right = null;
    }
  }

  // Case 3: One child
  else {
    const child = current.left || current.right;

    // Update the parent to point to the child
    if (!parent) {
      // If there's no parent, it means the root is being deleted
      return child;
    }

    if (parent.left === current) {
      parent.left = child;
    } else {
      parent.right = child;
    }
  }

  return rootNode;
}

// Testing the binary search tree
// const bstRoot = new TreeNode(5);
// bstRoot.left = new TreeNode(3);
// bstRoot.right = new TreeNode(7);
// bstRoot.left.left = new TreeNode(2);
// bstRoot.left.right = new TreeNode(4);
// bstRoot.right.left = new TreeNode(6);
// bstRoot.right.right = new TreeNode(8);
// console.log(getParentNode(bstRoot, 2))
// console.log(getParentNode(bstRoot, 4))
// console.log(getParentNode(bstRoot, 7))

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

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  let arr = [];
  inorder(root, arr);
  return arr[k - 1];
}

function inorder(root: TreeNode | null, arr: number[]): number[] {
  if (!root) return arr;
  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
  return arr;
}

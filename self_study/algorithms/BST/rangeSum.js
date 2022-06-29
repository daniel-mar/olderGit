/** Range Sum of BST
 * Given the root node of a binary search tree, return the sum
 * of values of all nodes with value between L and R (inclusive)
 * 
 * The binary search tree is guaranteed to have unique values.
 * 
 * Example 1:
 * Input: root = [10,5,15,3,7,null,18], L = 7, R = 15 
 * Output: 32
 * 
 * Example 2:
 * Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 * Output: 23
 * 
 * Time Complexity: O(n) - n is the number of nodes in the tree
 * Space Complexity: O(h) - h is the height of the tree
 */

const rangeSum = (root, L, R) => {

    //Depth first search, recursion call stack

    let totalSum = 0;

    // helper recursive method
    function dfs(node) {
        // empty tree: return
        if(!node) return

        // valid node exists and L + R are INCLUSIVE =
        if(node.val >= L && node.val <= R) {
            totalSum += node.val;
        }

        if(L < node.val)
            dfs(node.left);
        
        if(R > node.val)
            dfs(node.right);
    }

    // call helper function
    dfs(root);
    // recursion is done, return totalSum
    return totalSum

}
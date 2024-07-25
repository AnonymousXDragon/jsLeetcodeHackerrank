/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
*/


var inOrderTraversal = function (root){

    let stack = [];
    let current = root;
    let order = []

    while (true){

        if (current !== null){
            stack.push(current)
            current = current.left;
        } else {
            if ( stack.length < 0){
                break
            }

            current = stack.pop()
            order.push(current.val)
            current = current.right
        }
    }

    return order

}


let height = function height(root){
    if ( root === null){
        return -1
    }

    let left = height(root.left)
    let right = height(root.right)

    return 1 + Math.max(...[left,right])
}
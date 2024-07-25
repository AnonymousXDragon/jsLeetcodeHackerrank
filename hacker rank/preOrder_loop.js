function preOrder(root) {
    let queue = []
    let res = []
    queue.push(root)
    
    while ( queue.length > 0){
        root = queue.pop()
        res.push(root.data)
        if (root.right) queue.push(root.right)
        if (root.left) queue.push(root.left)
    }
    
    console.log(res.join(" "))
}
function reverse(llist) {
    // Write your code here

    let prev = null;
    while (llist){
        let next = llist.next;
        llist.next = prev
        llist.prev = next
        prev = llist
        llist = next
    }
    
    llist = prev
    return llist
}
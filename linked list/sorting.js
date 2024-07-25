class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class LL {
    constructor(){
        this.head = null
        this.tail = null;
    }
    
    insert(data){
        let new_node = new Node(data);
        
        if ( this.head === null ){
            this.head = new_node;
            this.tail = new_node;
            return this;
        }
        
        this.tail.next = new_node;
        this.tail = new_node;
        return this;
    }
    
    print(){
        let current_node = this.head;
        let res = ''
        while(current_node){
            if (current_node.next === null){
                res += `${current_node.val}  `;
            } else {
                res += `${current_node.val} ---> `;
            }
            current_node = current_node.next
        }
        
        console.log(res)
    }
    
    insertSorted(){};
    sortLL(){
        let current_node = this.head;
        let key = null;

        while (current_node){
            key = current_node.next;
            while( key !== null ){
                if ( current_node.val > key.val ){
                    let temp = current_node.val;
                    current_node.val = key.val;
                    key.val = temp;
                }
                key = key.next
            }
            current_node = current_node.next
        }
    };

}

let l = new LL();
l.insert(30).insert(20).insert(10);
l.print()
l.sortLL()
l.print()
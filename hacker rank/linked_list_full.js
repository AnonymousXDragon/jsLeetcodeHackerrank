"use strict";

class Node {
    constructor(data){
        let self = this;
        self.data = data;
        self.next = null;
    }
}

class LL{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    insert(data){
        let newNode = new Node(data);
        if (this.head === null){
            this.head = newNode;
            return this
        } else {
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            
            currentNode.next = newNode;
            this.tail = newNode;
        }
        
        return this
    }
    
    get(indx){
        let currentNode = this.head;
        let n = 0;
        
        while(n < indx){
            currentNode = currentNode.next;
            n+=1;
        }
        return currentNode.data
    }
    
    set(indx,data){
        let newNode = new Node(data);
        let currentNode = this.head;
        let n = 0;
        while(n < indx-1){
            currentNode = currentNode.next;
            n+=1;
        }
        let temp = currentNode.next;
        currentNode.next = newNode;
        newNode.next = temp;
    }
    
    deleteLast(){
        let currentNode = this.head;
        while(currentNode.next !== this.tail){
            currentNode = currentNode.next
        }
        currentNode.next = null;
    };
    
    deleteNode(indx){
        let currentNode = this.head;
        let n = 0;
        while(n < indx-1){
            currentNode = currentNode.next;
            n+=1;
        }
        let temp = currentNode.next;
        currentNode.next = currentNode.next.next;
        temp.next = null;
    }
    
    deleteFirst(){
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
    }
    
    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

let cll = new CLL();
cll.insert(10).insert(20).insert(30);
cll.set(1,40);
// cll.deleteFirst();
cll.deleteNode(1);
cll.print()
//                        Find Middle of the Linked List

// Problem Statement - Given a singly linked list, the task is to find the middle of the linked list. If the number of nodes are even, then there would be two middle nodes, so return the second middle node.

// Input: linked list: 1->2->3->4->5
// Output: 3 
// Explanation: There are 5 nodes in the linked list and there is one middle node whose value is 3.

// Input: linked list = 10 -> 20 -> 30 -> 40 -> 50 -> 60
// Output: 40
// Explanation: There are 6 nodes in the linked list, so we have two middle nodes: 30 and 40, but we will return the second middle node which is 40.


//1. element by counting the number of nodes
class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

// 2. Helper function - find the length of the linked list
// head  is node
function getLength(head){

    // variable length to count on node
    let length = 0;

    // Traverse the entire linked list and intrement the length by 1 for each node

    while(head){
        length ++;
        head = head.next;
    }

    // return the number of nodes in the linked list
    return length;
}


// 3. Function - to find the middle element of the linked list
function getMiddle(head){

    // finding length of the linked list
    const length = getLength(head);

    // Travserse till we reach the half of the length
    let mid_index = Math.floor(length/2);
    while(mid_index-- > 0){
        head = head.next;
    }

    return head.data;

}

function main(){
    // Create a hard-coded linked list:
    // 10 -> 20 -> 30 -> 40 -> 50 -> 60

    const head = new Node(10);
     head.next = new Node(20);
     head.next.next = new Node(30);
     head.next.next.next = new Node(40);
     head.next.next.next.next = new Node(50);
     head.next.next.next.next.next = new Node(60);
         
    console.log(getMiddle(head));
}

main();
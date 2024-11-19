//                    Reverse Linked List
//*************************************************** */
// Problem - Given a linked list, the task is to reverse the linked list by changing the links between nodes.

//     Input: Linked List = 1 -> 2 -> 3 -> 4 -> NULL 
// Output: Reversed Linked List = 4 -> 3 -> 2 -> 1 -> NULL

// Input: Linked List = 1 -> 2 -> 3 -> 4 -> 5 -> NULL 
// Output: Reversed Linked List = 5 -> 4 -> 3 -> 2 -> 1 -> NULL

// Input: Linked List = NULL 
// Output: Reversed Linked List = NULL

// Input: Linked List = 1->NULL 
// Output: Reversed Linked List = 1->NULL 

//***************************************************** */

// The idea is to reverse the links of all nodes using three pointers: 

// prev: pointer to keep track of the previous node
// curr: pointer to keep track of the current node 
// next: pointer to keep track of the next node

class Node{
    cosntructor(newData){
        this.data = newData;
        this.next = null;
    }
}

// Ginven the head of the list
// reverse the list and return the head of the list

function reverseList(head){

    //initialize the three pointers

    let curr = head;  // stores to each element to head
    let prev = null;
    let next;

    // Traverse all the nodes of the linked list

    while(curr != null){

        next = curr.next;

        // reverse current node's to next pointer
        curr.next = prev;

        //

        // MOve pointers to one posistion ahead
    prev = curr;
    curr = next;

    }
    return prev;
}


function printList(node){
    while (node != null){
        console.log (" " + node.data);
        node = node.next;
    }
    console.log();
}

// Create a hard-coded linked list:
// 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Given Linked list:");
printList(head);

head = reverseList(head);

console.log("Reversed Linked List:");
printList(head);


// output:
/* 
Given Linked list: 1 2 3 4 5
Reversed Linked List: 5 4 3 2 1 
*/

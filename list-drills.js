'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, insertPt){
    if(this.head === null){
      this.insertFirst(item); //How do we want to handle these cases?
    } else {
      let tempNode = this.head;
      while (tempNode.next.value !== insertPt && tempNode.next !== null){ //tempNode -> newNode -> insertPt
        tempNode = tempNode.next;
      }
      let newNode = new _Node(item, tempNode.next);
      tempNode.next = newNode;
    }
  }

  insertAfter(item, insertPt){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.value !== insertPt && tempNode.next !== null){
        tempNode = tempNode.next;
      }
      let newNode = new _Node(item, tempNode.next);
      tempNode.next = newNode;
    }
  }

  insertAt(item, position) {
    if(this.head === null){
      this.insertFirst(item);
    }
    let counter = 1;
    let tempNode = this.head;
    while (counter !== position) {
      tempNode = tempNode.next;
      counter+= 1;
    }
    this.insertBefore(item, tempNode.value);
  }

  // node1, node2,  node3, node3

  find(item){
    let currNode = this.head;

    if(!this.head){
      return null;
    }

    while(currNode.value !== item){
      if(currNode.next === null){
        return null;
      }
      else{
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){
    if(!this.head){
      return null;
    }
    //Deleting first item
    if(this.head.value === item){
      this.head = this.head.next;
    }

    let currNode = this.head; //Why do we need to do this?
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

}

function display(ll){
  let result = []
  let currentNode = ll.head
  while(currentNode !== null){
    result.push(currentNode.value)
    currentNode = currentNode.next
  }
  return result
}

function size(ll){
  return display(ll).length
}

function isEmpty(ll){
  return ll.head === null
}

function findPrevious(ll, item){
let currentNode = ll.head

while(currentNode !== null){
  if(currentNode.next !== null && currentNode.next.value === item){
    return currentNode
  }
  currentNode = currentNode.next
}
console.log('Item not found')
return null
}

function findLast(ll){
  let currentNode = ll.head

  while(currentNode.next !== null){
    currentNode = currentNode.next
  }

  return currentNode
}

function main(){
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('HotDog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  // console.log(SLL.find('Tauhida'));

  // console.log(SLL);

  console.log(display(SLL))
  console.log(size(SLL))
  console.log(isEmpty(SLL))
  console.log(findPrevious(SLL, 'Helo'))
  console.log(findLast(SLL))
}

main();

//4. Mystery Program
// The function gets rid of duplicates
// O(n^2)

//5. Reverse a list

//use findLast to find the last Node 
//lastNode.next = findPrevious(ll, LastNode)
// lastNode = findPrevious(ll, LastNode)

let lastNode = findLast(SLL)
lastNode.next = findPrevious(ll, LastNode.value)
lastNode = findPrevious(ll, LastNode.value)

// 1 -> 2 -> 3
// 1 -> 2 -> 3 -> 2
// 1 -> 2 -> 1 3 -> 2


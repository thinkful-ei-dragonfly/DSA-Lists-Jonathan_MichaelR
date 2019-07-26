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
  let result = [];
  let currentNode = ll.head;
  while(currentNode !== null){
    result.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return result;
}

function size(ll){
  return display(ll).length;
}

function isEmpty(ll){
  return ll.head === null;
}

function findPrevious(ll, item){
  let currentNode = ll.head;
  while(currentNode !== null){
    if(currentNode.next !== null && currentNode.next.value === item){
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  console.log('Item not found');
  return null;
}

function findLast(ll){
  let currentNode = ll.head;

  while(currentNode.next !== null){
    currentNode = currentNode.next;
  }

  return currentNode;
}

function reverseList(ll) {
  let newHead = findLast(ll);// 3 -> null
  let newHeadVal = newHead.value;
  let lastNode = newHead; // 3 -> null
  //l lastNode = 3 -> null
  let counter = size(ll);
  while (counter > 1) {
    lastNode.next = findPrevious(ll, lastNode.value); // 2 -> 3 -> 2
    lastNode = lastNode.next; //
    counter --;
  }
  lastNode.next = null;
  ll.head = newHead;
  return ll;
}

function findThirdFromEnd(ll) {
  let counter = 0;
  let lastNode = findLast(ll);
  while (counter < 2) {
    lastNode = findPrevious(ll, lastNode.value);
    counter++;
  }
  return lastNode;
}

function findMiddleOfList(ll) {
  if (ll.head === null) {
    return null;
  }
  let a = ll.head;
  let b;
  if (size(ll) % 2 === 0) {
    b = findPrevious(ll, findLast(ll).value);
  } else {
    b = findLast(ll);
  }
  while (a !== b) {
    a = a.next;
    b = findPrevious(ll, b.value);
  }
  return a;
}

function checkCycle(ll) {
  let previouseNodes = [];
  let currentNode = ll.head;
  while(currentNode.next !== null) {
    if (previouseNodes.includes(currentNode.next)) {
      return true;
    }
    previouseNodes.push(currentNode);
    currentNode = currentNode.next;
  }
  return false;
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
  let cycleList = new LinkedList();
  cycleList.insertFirst('third');
  cycleList.insertFirst('second');
  cycleList.insertFirst('first');
  let fourthNode = new _Node('fourth', findLast(cycleList));
  cycleList.find('third').next = fourthNode;

  console.log(display(SLL));
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(findPrevious(SLL, 'Helo'));
  // console.log(findLast(SLL));
  // reverseList(SLL);
  // console.log(display(SLL));
  // console.log(findThirdFromEnd(SLL));
  // console.log(findMiddleOfList(SLL));
  // console.log(display(cycleList));
  console.log(checkCycle(cycleList));
}

main();

//4. Mystery Program
// The function gets rid of duplicates
// O(n^2)



// 3rd -> 2nd -> 1st -> tail(null)
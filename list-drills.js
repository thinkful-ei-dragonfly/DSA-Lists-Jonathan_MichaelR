class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  insertBefore(item, insertPt){
    if(this.head === null){
      this.insertFirst(item) //How do we want to handle these cases?
    }
    else{
      let tempNode = this.head
      while(tempNode.next !== insertPt){ //tempNode -> newNode -> insertPt
        tempNode = tempNode.next
      }
      newNode = new _Node(item, tempNode.next)
      tempNode.next = newNode
    }
  }

  insertAfter(item, insertpt){
    if(this.head === null){
      this.insertFirst(item)
    }
    else{
      let tempNode = this.head
      while(tempNode !== insertPt){
        tempNode = tempNode.next
      }
      newNode = new _Node(item, tempNode.next)
      tempNode.next = newNode
    }
  }

  find(item){
    let currNode = this.head

    if(!this.head){
      return null
    }

    while(currNode.value !== item){
      if(currNode.next === null){
        return null
      }
      else{
        currNode = currNode.next
      }
    }
    return currNode
  }

  remove(item){
    if(!this.head){
      return null
    }
    //Deleting first item
    if(this.head.value === item){
      this.head = this.head.next
    }

    let currNode = this.head //Why do we need to do this?
    let previousNode = this.head

    while((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode
      currNode = currNode.next
    }
    if(currNode === null){
      console.log('Item not found')
      return
    }
    previousNode.next = currNode.next
  }

}

function main(){
let SLL = new LinkedList()
SLL.insertFirst('Apollo')
SLL.insertLast('Boomer')
SLL.insertLast('Helo')
SLL.insertLast('Husker')
SLL.insertLast('Starbuck')
SLL.insertLast('Tauhida')
SLL.remove('squirrel')

console.log(SLL)
}

main()
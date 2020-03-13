class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null; 
  }

  enqueue(data) {
    if(this.first === null){
      const node = new _Node(data, null);
      this.first = node;
      this.last = node;
      return node;
    }
    let temp = this.last;
    const node = new _Node(data, null);
    temp.next = node;
    this.last = node;
    return node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    let temp = this.first;
    this.first = this.first.next;
    if(temp === this.last) {
      this.last = null;
    }
    return temp.data;
  }


  show() {
    if (!this.first) {
      return;
    }
    return this.first.data;
  }

  all() {
    //let QCopy = Q;
    if (!this.first) {
      return;
    }
  
    if (this.first.next === null) {
      return console.log(`The first and only item is: ${this.first.data}`);
    }
    while(this.first.next !== null) {
      console.log(`This item is: ${this.first.data}`);
      this.first = this.first.next;
    }
    console.log(`The last item is: ${this.first.data}`);
    this.first = null;
  }
}

module.exports = Queue

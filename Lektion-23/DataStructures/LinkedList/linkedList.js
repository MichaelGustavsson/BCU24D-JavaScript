import { Node } from './node.js';

export function LinkedList() {
  this.head = null;
  this.tail = null;
}

// Lägger till en ny nod först och
// Flyttar head pekaren till den nya noden...
LinkedList.prototype.addToHead = function (data) {
  const node = new Node(data, this.head, null);

  if (this.head) {
    this.head.prev = node;
  } else {
    this.tail = node;
  }

  this.head = node;
};

LinkedList.prototype.addToTail = function (data) {
  const node = new Node(data, null, this.tail);

  if (this.tail) {
    this.tail.next = node;
  } else {
    this.head = node;
  }

  this.tail = node;
};

LinkedList.prototype.removeHead = function () {
  // Om listan är tom, hoppa ut...
  if (!this.head) return null;

  const value = this.head.data;

  // peka head indikatorn till nästa node i listan...
  this.head = this.head.next;
  // Om head existerar, ta bort länken till föregående
  // node...
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  return value;
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  const value = this.tail.data;

  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  return value;
};

LinkedList.prototype.search = function (criteria) {
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.data === criteria) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }

  return null;
};

LinkedList.prototype.indexOf = function (criteria) {
  const indexes = [];
  let currentIndex = 0;
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.data === criteria) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }

  return indexes;
};

import { LinkedList } from './linkedList.js';
import { Node } from './node.js';

const initApp = () => {
  const list = new LinkedList();

  // console.log(list);

  // Lägger till en ny nod i listan först(head)
  // list.addToHead(10);
  // list.addToHead(200);
  // list.addToHead(20);
  // list.addToHead(30);
  // list.addToHead(201);
  // list.addToHead(8);
  // list.addToHead(3);

  // Lägger till en ny nod i listan sist(tail);
  // list.addToTail(1);
  // list.addToTail(2);
  // list.addToTail(3);
  // list.addToTail(4);
  // list.addToTail(5);

  // const node = list.search(4);
  // console.log(node);
  // console.log(list);

  // let value = list.removeHead();
  // console.log('Gamla Head nodens värde:', value);

  // value = list.removeHead();
  // console.log('Gamla Head nodens värde:', value);

  // let value = list.removeTail();
  // console.log('Gamla Tail nodens värde:', value);

  // console.log(list.head.next);
  // console.log(list.tail.prev);

  // Test av indexOf...
  list.addToTail(10);
  list.addToTail(20);
  list.addToTail(10);
  list.addToTail(30);
  list.addToTail(60);
  list.addToTail(10);
  list.addToTail(60);
  list.addToTail(30);
  list.addToTail(10);
  list.addToTail(100);
  list.addToTail(75);

  console.log(list);

  console.log(list.indexOf(60));
};

document.addEventListener('DOMContentLoaded', initApp);

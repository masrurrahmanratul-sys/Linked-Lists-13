import { linkedList } from "./Linkedllist.js";

const list = new linkedList();

list.insert("dog");
list.insert("cat");
list.insert("bird");
list.insert("fish");

console.log(list.toString()); // Output: "dog -> cat -> bird -> fish"

console.log(list.head()); // Output: "dog"
console.log(list.tail()); // Output: "fish"
console.log(list.size()); // Output: 4
console.log(list.at(2)); // Output: "bird"
console.log(list.pop()); // Output: "fish"

console.log(list.contains("cat")); // Output: true
console.log(list.findIndex("hamster")); // Output: -1

console.log(list.toString()); // Output: "dog -> cat -> bird"
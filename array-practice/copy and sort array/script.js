let arr = ["HTML", "Javascript", "CSS"];

const copySorted = arr => { return arr.slice().sort() } 

let sorted = copySorted(arr);

console.log(arr);
console.log(sorted);
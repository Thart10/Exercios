let a = 30
let b = 40

let c = a;
a = b;
b = c;
c = b;
b = a;

console.log (a);
console.log (b);
console.log (c);

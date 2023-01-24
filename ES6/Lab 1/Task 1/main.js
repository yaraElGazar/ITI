let x = 10;
let y = 5;

console.log(`x before swap: ${x}`);
console.log(`y beore swap: ${y}`);

// Swapping using destructuring
[x, y] = [y, x];

console.log(`x after swap: ${x}`);
console.log(`y after swap: ${y}`);

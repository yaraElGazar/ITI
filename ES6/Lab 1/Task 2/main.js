function minmax(...arr) {
  let max = Math.max(...arr); // Spread operator
  let min = Math.min(...arr); // Spread operator
  let result = [min, max];
  return result;
}

// Send array to the function
let numbers = [3, 5, 1, 9, 10];
let [min, max] = minmax(...numbers);
console.log(`Minimum number is ${min}, and maximum number is ${max}`);

// 2) Create a generator that returns fibonacci series that takes only
// one parameter. Make two different implementations as
// described below:

// a.the parameter passed determines the number of elements
// displayed from the series.
function* fibonacciNumber(number) {
  let arr = [0, 1];
  for (let i = 2; i < number; i++) {
    let newNumber = arr[i - 1] + arr[i - 2];
    arr.push(newNumber);
    yield arr;
  }
}

let result = fibonacciNumber(5);
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());

for (let i of fibonacciNumber(5)) {
  console.log(i);
}

// b.the parameter passed determines the max number of the
// displayed series should not exceed its value
function* fibonacciMax(max) {
  let arr = [0, 1];
  let i = 1;
  while (arr[i] < max) {
    let newNumber = arr[i] + arr[i - 1];
    if (newNumber <= max) {
      arr.push(newNumber);
      i++;
      yield arr;
    }
  }
}

let result1 = fibonacciMax(5);
console.log(result1.next());
console.log(result1.next());
console.log(result1.next());
console.log(result1.next());
console.log(result1.next());

for (let i of fibonacciMax(5)) {
  console.log(i);
}

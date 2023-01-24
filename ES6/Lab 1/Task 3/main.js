let fruits = ["apple", "strawbwerry", "banana", "orange", "mango"];

//#region a. test that every element in the given array is a string
function isString(arr) {
  return arr.every((element) => typeof element === "string");
}

let fruitString = isString(fruits);

if (fruitString) {
  console.log("All the elements are strings");
} else {
  console.log("Some of the elements are not strings");
}
//#endregion

//#region b. test that some of array elements starts with "a"
function startWithA(arr) {
  return arr.some((element) => element.startsWith("a"));
}

let fruitWithA = startWithA(fruits);
if (fruitWithA) {
  console.log("Some fruits start with A");
} else {
  console.log("No fruits start with A");
}
//#endregion

//#region c. generate new array filtered from the given array with only
// elements that starts with "b" or "s"

function startBorS(arr) {
  let filteredArray = arr.filter(
    (element) => element.startsWith("b") || element.startsWith("s")
  );
  return filteredArray;
}

console.log(startBorS(fruits));
//#endregion

// #region d. generate new array, each element of the new array contains a
// string declaring that you like the give fruit element
function like(arr) {
  let newArr = arr.map((element) => "I like " + element);
  return newArr;
}

let likedFruits = like(fruits);
console.log(likedFruits);
//#endregion

// #region e. use forEach to display all elements of the new array from
// previouse point
likedFruits.forEach((element) => {
  console.log(element);
});
//#endregion

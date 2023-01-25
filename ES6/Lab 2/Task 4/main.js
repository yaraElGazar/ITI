let myObj = {
  name: "ali",
  age: 15,
  [Symbol.iterator]: function () {
    let ourKeys = Object.keys(myObj);
    let counter = 0;
    let length1 = ourKeys.length;
    return {
      next: function () {
        if (counter === length1) {
          return { value: undefined, done: true };
        } else {
          return { value: myObj[ourKeys[counter++]], done: false };
        }
      },
    };
  },
};
Object.defineProperty(myObj, "gen", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: function* () {
    let ourKeys = Object.keys(myObj);

    for (let i = 0; i < ourKeys.length; i++) {
      yield myObj[ourKeys[i]];
    }
  },
});

// Using Symblo.iterator
console.log("-- Using Symblo.iterator --");
let iter = myObj[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// Using function generator
console.log("-- Using function generator --");
let outval = myObj.gen();
console.log(outval.next());
console.log(outval.next());
console.log(outval.next());

// For of output
console.log("-- For of output --");
for (let i of myObj) {
  console.log(i);
}

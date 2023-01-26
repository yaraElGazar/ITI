// 2) Proxy
// create a dynamic object using Proxy such that it has only the
// following properties

let obj = {
  name: "Yasmeen",
  address: "Egypt",
  age: 25,
};

let handler = {
  set(target, prop, value) {
    if (target.hasOwnProperty(prop)) {
      // a) name property that accepts only string of 7 characters
      if (prop == "name") {
        if (typeof value === "string") {
          if (value.length === 7) {
            target[prop] = value;
          } else {
            throw "Name must be exactly 7 characters";
          }
        } else {
          throw "Name must be a string";
        }
        // b) address property that accepts only string value
      } else if (prop == "address") {
        if (typeof value === "string") {
          target[prop] = value;
        } else {
          throw "Adress must be a string";
        }
      } else {
        // c) age property that accepts numerical value between 25 and
        // 60
        if (typeof value === "number") {
          if (value >= 25 && value <= 60) {
            target[prop] = value;
          } else {
            throw "Age must be between 25 and 60";
          }
        } else {
          throw "Age must be a number";
        }
      }
    } else {
      throw "invalid property";
    }
  },
};

let myProxy = new Proxy(obj, handler);

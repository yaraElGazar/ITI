var obj = {
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
  getSetGen: function () {
    // Number of properties the object have
    var count = Object.keys(this).length;
    for (var i = 0; i < count; i++) {
      let key = Object.keys(this)[i];
      // Generate setters and getters for properties that are not functions
      if (typeof this[key] !== "function") {
        // Generate Getter
        this["get" + key] = function () {
          return this[key];
        };
        // Generate Setter
        this["set" + key] = function (value) {
          // Set value only if the type is correct
          if (typeof value === typeof this[key]) {
            this[key] = value;
          } else {
            let err = new Error(key + " must be a " + typeof this[key]);
            throw err;
          }
        };
      }
    }
  },
};

var user = {
  name: "Ali",
  age: 10,
};

obj.getSetGen.call(user);

obj.getSetGen();

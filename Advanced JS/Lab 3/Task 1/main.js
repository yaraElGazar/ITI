var obj = function (start, end, step) {
  Object.defineProperty(this, "startList", {
    value: start,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });

  Object.defineProperty(this, "endList", {
    value: end,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });

  Object.defineProperty(this, "stepList", {
    value: step,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });

  // Private member "list"
  var list = [];
  // getter
  Object.defineProperty(this, "getList", {
    value: function () {
      return list;
    },
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });

  // Filling the list (private method)
  var fillList = function () {
    for (var i = this.startList; i <= this.endList; i += this.stepList) {
      list.push(i);
    }
  }.bind(this); // Hard binding

  // call fillList function
  fillList();

  // Check for duplications (private method)
  var duplicateFound = function (number) {
    var found;
    for (let i = 0; i < list.length; i++) {
      if (number === list[i]) {
        found = true;
        return found;
      } else {
        found = false;
      }
    }
    return found;
  };

  // Append a value
  Object.defineProperty(this, "append", {
    value: function (value) {
      // If number does not exist
      if (!duplicateFound(value)) {
        // Check if value is greater than the last number by the step
        if (value - list[list.length - 1] === step) {
          list.push(value);
        } else {
          let err = new Error(
            "Number should be greater than " +
              list[list.length - 1] +
              " by " +
              this.stepList
          );
          throw err;
        }
      } else {
        // If number already exists
        let err = new Error("Number already exists!");
        throw err;
      }
    },
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });

  // Prepend a value
  Object.defineProperty(this, "prepend", {
    value: function (value) {
      // If number does not exist
      if (!duplicateFound(value)) {
        // Check if value is less than the first number by the step
        if (list[0] - value === step) {
          list.unshift(value);
        } else {
          let err = new Error(
            "Number should be less than " + list[0] + " by " + this.stepList
          );
          throw err;
        }
      } else {
        // If number already exists
        let err = new Error("Number already exists!");
        throw err;
      }
    },
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });

  // Pop a value
  Object.defineProperty(this, "pop", {
    value: function () {
      // If list is empty
      if (list.length === 0) {
        let err = new Error("List is empty!");
        throw err;
      } else {
        // If list contains number
        list.pop();
      }
    },
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });

  // Dequeue a value
  Object.defineProperty(this, "dequeue", {
    value: function () {
      // If list is empty
      if (list.length === 0) {
        let err = new Error("List is empty!");
        throw err;
      } else {
        // If list contains number
        list.shift();
      }
    },
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
};

// Override .toString()
obj.prototype.toString = function () {
  console.log("The list content is: " + this.getList());
};

var newList = new obj(1, 9, 2);

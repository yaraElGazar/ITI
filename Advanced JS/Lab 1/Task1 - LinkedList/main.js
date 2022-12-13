let linkedList = {
  data: [],

  checkNoDuplicate: function (number) {
    let found = false;
    for (let i = 0; i < this.data.length; i++) {
      if (number === this.data[i].val) {
        found = true;
      }
    }
    if (found === true) {
      return false; // If number found there is duplicate
    } else {
      return true; // if number not found there is no duplicate
    }
  },

  pushVal: function (number) {
    // If linkedlist is empty
    if (this.data.length === 0) {
      this.data.push({ val: number });
    } else {
      // Check for duplicates (if no duplicates continue)
      if (this.checkNoDuplicate(number)) {
        // Check the previous value
        // If smaller than the pushed number push it
        if (this.data[this.data.length - 1].val < number) {
          this.data.push({ val: number });
          // If the value we want to push is smaller than the last element throw an error
        } else {
          let err = new Error(
            "Value must be greater than " + this.data[this.data.length - 1].val
          );
          throw err;
        }
      } else {
        // If there is duplicate
        let err = new Error(number + " already exists");
        throw err;
      }
    }
  },

  popVal: function () {
    // If the list is empty throw an error
    if (this.data.length === 0) {
      let err = new Error("List is empty");
      throw err;
    } else {
      this.data.pop();
    }
  },

  Enqueue: function (number) {
    // If linkedlist is empty
    if (this.data.length === 0) {
      this.data.unshift({ val: number });
    } else {
      // Check for duplicates (if no duplicates continue)
      if (this.checkNoDuplicate(number)) {
        // Check if the current first item is larger than the value we want to insert
        if (this.data[0].val > number) {
          this.data.unshift({ val: number });
        } else {
          let err = new Error(
            "Inserted item must be smaller than " + this.data[0].val
          );
          throw err;
        }
      } else {
        // If there is duplicate
        let err = new Error(number + " already exists");
        throw err;
      }
    }
  },

  Dequeue: function () {
    // If the list is empty throw an error
    if (this.data.length === 0) {
      let err = new Error("List is empty");
      throw err;
    } else {
      this.data.shift();
    }
  },

  Insert: function (index, number) {
    // Check for duplicates (if no duplicates continue)
    if (this.checkNoDuplicate(number)) {
      // Check if inserting in the begining of the list
      if (index === 0) {
        // Check if the next item is larger
        if (this.data[index].val > number) {
          this.data.splice(index, 0, { val: number });
        } else {
          let err = new Error(
            "Number must be smaller than " + this.data[index].val
          );
          throw err;
        }
      } else if (index < this.data.length - 1) {
        // Check if the previous item is smaller and the next is larger
        if (
          this.data[index - 1].val < number &&
          this.data[index].val > number
        ) {
          this.data.splice(index, 0, { val: number });
        } else {
          let err = new Error(
            "Number in index " +
              index +
              " must be greater than " +
              this.data[index - 1].val +
              " and less than " +
              this.data[index].val
          );
          throw err;
        }
      } else {
        // Insert in last index
        // Check if the previous item is smaller and the next is larger
        if (this.data[index - 1].val < number) {
          this.data.splice(index, 0, { val: number });
        } else {
          let err = new Error(
            "Number in index " +
              index +
              " must be greater than " +
              this.data[index - 1].val
          );
          throw err;
        }
      }
    } else {
      // If there is duplicate
      let err = new Error(number + " already exists");
      throw err;
    }
  },

  Remove: function (number) {
    let found = false;
    // Search for the numer in the data
    for (let i = 0; i < this.data.length; i++) {
      if (number === this.data[i].val) {
        this.data.splice(i, 1);

        // Swithch found to true
        found = true;
      }
    }
    if (!found) {
      let err = new Error("value not found");
      throw err;
    }
  },

  Display: function () {
    let arr = [];
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i].val + " ");
    }
  },
};

// linkedList.popVal(); // Error: List is empty
// linkedList.Dequeue(); // Error: List is empty
// linkedList.pushVal(1);
// linkedList.pushVal(2);
// linkedList.pushVal(4);
// // linkedList.pushVal(4); // Error: 4 already exists
// // linkedList.pushVal(3); // Error: Value must be greater than 4
// linkedList.popVal();
// linkedList.Enqueue(0);
// // linkedList.Enqueue(0); // Error: 0 already exists
// // linkedList.Enqueue(1); Error: Inserted item must be smaller than 0
// linkedList.Dequeue();

// linkedList.pushVal(4);
// // List in this point [{val: 1}, {val: 2}, {val: 4}]
// linkedList.Insert(2, 3);
// // linkedList.Insert(2, 3); // Error: 3 already exists
// // linkedList.Insert(2, 5); // Error: Number in index 2 must be greater than 2 and less than 3

// // List in this point [{val: 1}, {val: 2}, {val: 3}, {val: 4}]
// linkedList.Remove(3);
// // linkedList.Remove(5); // Error: value not found

// linkedList.Display();

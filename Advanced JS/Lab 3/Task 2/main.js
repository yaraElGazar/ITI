var box = function (height, width, length, material) {
  // Properties
  Object.defineProperty(this, "heightBox", {
    value: height,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
  Object.defineProperty(this, "widthBox", {
    value: width,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
  Object.defineProperty(this, "lengthBox", {
    value: length,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
  Object.defineProperty(this, "materialBox", {
    value: material,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
  Object.defineProperty(this, "content", {
    value: [],
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });

  // Methods

  // addBook method
  Object.defineProperty(this, "addBook", {
    value: function (book) {
      this.content.push(book);
    },
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });

  // countBooks mehtod
  Object.defineProperty(this, "countBooks", {
    value: function () {
      return this.content.length;
    },
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });

  // deleteBook mehtod
  Object.defineProperty(this, "deleteBook", {
    value: function (bookTitle) {
      for (var i = 0; i < this.content.length; i++) {
        if (bookTitle === this.content[i].bookTitle) {
          this.content.splice(i, 1);
          return this.content;
        }
      }
      let err = new Error("Book not found");
      throw err;
    },
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
};

var book = function (title, chapters, author, pages, publisher, copies) {
  Object.defineProperty(this, "bookTitle", {
    value: title,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
  Object.defineProperty(this, "bookChapters", {
    value: chapters,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
  Object.defineProperty(this, "bookAuthor", {
    value: author,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
  Object.defineProperty(this, "bookPages", {
    value: pages,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
  Object.defineProperty(this, "bookPublisher", {
    value: publisher,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
  Object.defineProperty(this, "bookCopies", {
    value: copies,
    writable: false, // cannot be reassigned
    configurable: false, // cannot be deleted
    enumerable: false, // cannot be shown in for in
  });
  book.counter++;
};

// Class Property that counts numbers of created books
// objects and Class method to retrieve it

Object.defineProperty(book, "counter", {
  value: 0,
  writable: true,
  configurable: false, // cannot be deleted
  enumerable: false, // cannot be shown in for in
});

Object.defineProperty(book, "getCounter", {
  value: function () {
    return book.counter;
  },
  writable: false, // cannot be reassigned
  configurable: false, // cannot be deleted
  enumerable: false, // cannot be shown in for in
});

// Use .toString() to display the box instance’s dimensions and
// how books are stored in it.
box.prototype.toString = function () {
  // Store books titles
  var books = [];
  for (var i = 0; i < this.content.length; i++) {
    books.push(this.content[i].bookTitle);
  }
  console.log(
    "The box length is " +
      this.lengthBox +
      ", heigth is " +
      this.heightBox +
      ", and width is " +
      this.widthBox +
      ". The box stored are: " +
      books
  );
};

// Implement .valueof() so that if there is more than one box
// object we can get total number of books in these boxes by
// adding them
box.prototype.valueOf = function () {
  return this.content.length;
};

let box1 = new box(100, 110, 300, "paper");
let book1 = new book("Harry Potter", 2, "J.K Rowling", 649, "anyPublisher", 1);
let book2 = new book("Harry Potter1", 2, "J.K Rowling", 649, "anyPublisher", 1);
let book3 = new book("Harry Potter2", 2, "J.K Rowling", 649, "anyPublisher", 1);
let book4 = new book("Harry Potter3", 2, "J.K Rowling", 649, "anyPublisher", 1);

let box2 = new box(90, 110, 350, "paper");
let book5 = new book("Harry Potter4", 2, "J.K Rowling", 649, "anyPublisher", 1);
let book6 = new book("Harry Potter5", 2, "J.K Rowling", 649, "anyPublisher", 1);
let book7 = new book("Harry Potter6", 2, "J.K Rowling", 649, "anyPublisher", 1);
let book8 = new book("Harry Potter7", 2, "J.K Rowling", 649, "anyPublisher", 1);

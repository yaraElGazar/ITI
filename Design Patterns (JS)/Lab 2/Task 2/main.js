// const book1 = {
//   title: "Harry Potter",
//   author: "JK Rowling",
//   isbn: "AB123",
// };

// const book2 = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   isbn: "CD456",
// };

// const book3 = {
//   title: "Moby-Dick",
//   author: "Herman Melville",
//   isbn: "EF789",
// };
// const book4 = {
//   title: "Harry Potter",
//   author: "JK Rowling",
//   isbn: "AB123",
// };

// const book5 = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   isbn: "CD456",
// };

// let books = [book1, book2, book3, book4, book5];
// console.log(books);

/* Factory Pattern */
const bookFactory = (title, author, isbn) => ({
  title,
  author,
  isbn,
});

let book1 = bookFactory("Harry Potter", "JK Rowling", "AB123");
let book2 = bookFactory("Harry Potter", "JK Rowling", "AB123");
let book3 = bookFactory("Harry Potter", "JK Rowling", "AB123");
let book4 = bookFactory("Harry Potter", "JK Rowling", "AB123");
let book5 = bookFactory("Harry Potter", "JK Rowling", "AB123");

let books = [book1, book2, book3, book4, book5];
console.log(books);

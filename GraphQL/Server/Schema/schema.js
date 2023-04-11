const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const AuthorModel = require("../Models/authorsModel");
const BookModel = require("../Models/booksModel");

const authorType = new GraphQLObjectType({
  name: "AuthorType",
  description: "author type",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(bookType),
      description: "Get all books per author",
      resolve: async (parent) => {
        // parent is the author
        let booksIds = parent.books;
        let allBooks = await BookModel.find({});
        // loop on books
        let books = [];
        for (let i = 0; i < booksIds.length; i++) {
          for (let j = 0; j < allBooks.length; j++) {
            if (booksIds[i] === allBooks[j].id) {
              books.push(allBooks[j]);
            }
          }
        }
        return books;
      },
    },
  }),
});

const bookType = new GraphQLObjectType({
  name: "BookType",
  description: "book type",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    author: {
      type: authorType,
      description: "Get book's author",
      resolve: async (parent) => {
        // parent is the book
        let authorId = parent.author;
        let allAuthors = await AuthorModel.find({});
        // loop on authors
        let author;
        for (let i = 0; i < allAuthors.length; i++) {
          if (authorId === allAuthors[i].id) {
            author = allAuthors[i];
          }
        }
        return author;
      },
    },
    numOfPages: { type: GraphQLInt },
  }),
});

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "Root Query",
  fields: () => ({
    // Get all authors
    authors: {
      type: new GraphQLList(authorType),
      description: "Get all authors",
      resolve: () => {
        //DB
        return AuthorModel.find({});
      },
    },
    // Get one author by id
    author: {
      type: authorType,
      description: "Get one author by id",
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        // FIND BY ID ON AUTHORS
        let foundAuthor = (await AuthorModel.findById(args.id)) || {};
        return foundAuthor;
      },
    },
    // Get all books
    books: {
      type: new GraphQLList(bookType),
      description: "Get all books",
      resolve: () => {
        return BookModel.find({});
      },
    },
    // Get one book by id
    book: {
      type: bookType,
      description: "Get one book by id",
      args: {
        id: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        // FIND BY ID ON BOOKS
        let foundBook = (await BookModel.findById(args.id)) || {};
        return foundBook;
      },
    },
  }),
});

// Mutation CRUD
const mutateQuery = new GraphQLObjectType({
  name: "MutationQuery",
  description: "Mutate DB",
  fields: () => ({
    // POST author
    AddAuthor: {
      type: authorType,
      description: "Add new author",
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
        books: { type: new GraphQLList(GraphQLString) },
      },
      resolve: (parent, args) => {
        let newAuthor = new AuthorModel({
          name: args.name,
          age: args.age,
          books: args.books,
        });
        return newAuthor.save();
      },
    },
    // POST book
    AddBook: {
      type: bookType,
      description: "Add new book",
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: GraphQLString },
        numOfPages: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        let newBook = new BookModel({
          name: args.name,
          author: args.author,
          numOfPages: args.numOfPages,
        });
        return newBook.save();
      },
    },
    // PUT author
    UpdateAuthor: {
      type: authorType,
      description: "Update author by Id",
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: { type: new GraphQLList(GraphQLString) },
      },
      resolve: (parent, args) => {
        return AuthorModel.findOneAndUpdate(
          { _id: args.id },
          { $set: { name: args.name, age: args.age, books: args.books } },
          { new: true } //returns new document
        ).exec();
      },
    },
    // PUT book
    UpdateBook: {
      type: bookType,
      description: "Update book by Id",
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        author: { type: GraphQLString },
        numOfPages: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        return BookModel.findOneAndUpdate(
          { _id: args.id },
          {
            $set: {
              name: args.name,
              author: args.author,
              numOfPages: args.numOfPages,
            },
          },
          { new: true } //returns new document
        ).exec();
      },
    },
    // DELETE author
    DeleteAuthor: {
      type: authorType,
      description: "Delete author by Id",
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return AuthorModel.deleteOne({ _id: args.id }).exec();
      },
    },
    // DELETE book
    DeleteBook: {
      type: bookType,
      description: "Delete book by Id",
      args: {
        id: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        return BookModel.deleteOne({ _id: args.id }).exec();
      },
    },
  }),
});

let schema = new GraphQLSchema({
  query: rootQuery,
  mutation: mutateQuery,
});

module.exports = schema;

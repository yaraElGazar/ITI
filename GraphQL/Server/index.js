const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 7000;
const express_GraphQL = require("express-graphql").graphqlHTTP;

// Middleware
app.use(cors());

// MongoDB
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/graph");
mongoose.connection.once("open", () => {
  console.log("DB Connected successfully");
});
const mySchema = require("./Schema/schema");

//Endpoint
app.use("/graphql", express_GraphQL({ schema: mySchema, graphiql: true }));

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT + "/graphql");
});

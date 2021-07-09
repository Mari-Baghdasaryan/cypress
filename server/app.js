const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('../schema/schema');
// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://Mari:1234@cluster0.3yizx.mongodb.net/GraphQL-tutorial?retryWrites=true",{useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
const PORT = 3000;
app.use("/graphql" , graphqlHTTP({
    schema,
    graphiql: true,
}));

// const dbConnection = mongoose.connection;
// dbConnection.on('error', err => console.log(`Connection error : ${err})`));
// dbConnection.once('open', () => console.log("Connected to DB"));

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started');
    
})


const express = require('express');
const graphqlHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');

const {queryType} = require('./query.js');

const port = 9292;
const app = express();


const schema = new GraphQLSchema({ query: queryType });

//Setup the nodejs GraphQL server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(port);
console.log(`GraphQL Server Running at localhost:${port}`);


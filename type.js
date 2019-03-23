const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql');
const _ = require('lodash');

let {movies} = require('./data.js')

// Define Movie Type
movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: {
		link:{ type: GraphQLString },
        id: { type: GraphQLString },
		metascore: {type: GraphQLID},
		poster:{ type: GraphQLString },
		rating: {type: GraphQLID},
		synopsis:{ type: GraphQLString },
        title: { type: GraphQLString },
        votes: { type: GraphQLInt },
		year: { type: GraphQLInt }
    }
});

exports.movieType = movieType;
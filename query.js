const { GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql');
const _ = require('lodash');

const {movieType} = require('./types.js');
let {movies} = require('./data.js');


//Define the Query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,

            resolve: function () {
                return "Hello World";
            }
        },
		Populate : {
			type:movieType,
			args:{},
			resolve:function(source,args){
				return "You wilm find all movies in the data.js file";
			}
		},
        movieID: {
            type: movieType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function (source, args) {
                return _.find(movies, { id: args.id });
            }
        }
		
		randomMovie : {
			type :movieType,
			args:{},
			resolve:function(source, args){
				 return _.find(movies, { metascore_gt:67, id:getRandom()});
				
				/*
				console.log("Here is a random must-watch movie. its metascore is above 67");
				collect.aggregate([ {$match : {metascore : {$gt:67} }},{ $sample: { size: 1 } } ] ).toArray((error, result) => {
					if(error) {
						return response.status(500).send(error);
					}
				}*/
			} 	
		}, 
		
		movieSearch: {
            type: movieType,
            args: {
                metascore: { type: GraphQLInt },
				limit: {type: GraphQLInt}
            },
            resolve: function (source, args) {
                return
            }
        },
		
		movieUpdate: {
		}
});

exports.queryType = queryType;
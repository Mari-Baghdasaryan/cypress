const express = require('express');

const  {GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLID,GraphQLInt,GraphQLList} = require ('graphql');
 /* const directorsJson = [
    { name: "Quentin Tarantino", age: 55},
    { name: "Michael Radford", age: 72},
    { name: "James McTeigue", age: 51},
    { name: "Guy Ritchie", age: 50},
]
const moviesJson = [
    { name: "Pulp Fiction", genre: "Crime",directorId: 60a3970b0318aba82b3a2268},
    { name: "1984", genre: "Sci-Fi",directorId:60a3976f0318aba82b3a226b },
    { name: "V for vendetta", genre: "Sci-Fi-Triller",directorId: },
    { name: "Snatch", genre: "Crime-Comedy",directorId: },
    { name: "Reservoir Dogs", genre: "Crime",directorId: },
    { name: "The Hateful Eight", genre: "Crime",directorId: },
    { name: "Inglourious Besterds", genre: "Crime",directorId: },
    { name: "Lock, Stock and Two Smoking Barrels", genre: "Crime-Comedy",directorId: },
]
*/
const movies = [
    {id:"1", name: "Pulp Fiction", genre: "Crime",directorId: "1"},
    {id:"2", name: "1984", genre: "Sci-Fi",directorId: "2"},
    {id:"3", name: "V for vendetta", genre: "Sci-Fi-Triller",directorId: "3"},
    {id:"4", name: "Snatch", genre: "Crime-Comedy",directorId: "4"},
    {id:"5", name: "Reservoir Dogs", genre: "Crime",directorId: "1"},
    {id:"6", name: "The Hateful Eight", genre: "Crime",directorId: "1"},
    {id:"7", name: "Inglourious Besterds", genre: "Crime",directorId: "1"},
    {id:"8", name: "Lock, Stock and Two Smoking Barrels", genre: "Crime-Comedy",directorId: "4"},
]

const directors = [
    {id:"1", name: "Quentin Tarantino", age: 55},
    {id:"2", name: "Michael Radford", age: 72},
    {id:"3", name: "James McTeigue", age: 51},
    {id:"4", name: "Guy Ritchie", age: 50},
]

const MovieType = new GraphQLObjectType({
    name: "Movie",
    fields: () => ({
        id: { type: GraphQLID},
        name: { type: GraphQLString},
        genre: { type: GraphQLString},
        director: {
            type: DirectorType,
            resolve(parent,args) {
                return directors.find(director => director.id === parent.id);
            }
        }
    })
})
const DirectorType = new GraphQLObjectType({
    name: "Director",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return movies.filter(movie => movie.directorId === parent.id)
            }
        }
    })
})
// const Mutation = new GraphQLObjectType({
//     name: "Mutation",
//     fields: {
//         addDirector: {
//             type: DirectorType,
//             args: {
//                 name:{type: GraphQLString},
//                 age: {type: GraphQLInt},
//             },
//         resolve(parent,args) {
//                 const director = new Directors({
//                     name: args.name,
//                     age: args.age,
//                 })
//             return director.save()
//         }
//         }
//     }
// })
const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        movie: {
            type: MovieType,
            args: {id: {type:GraphQLID}},
            resolve(parent,args) {
                return movies.find(movie => movie.id === args.id);
            },
        },
        director: {
            type: DirectorType,
            args: {id: {type:GraphQLID}},
            resolve(parent,args) {
                return directors.find(director => director.id === args.id);
            },
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent,args) {
                return movies;
            },
        },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve(parent,args) {
                return directors;
            },
        },
    }
})
module.exports = new GraphQLSchema({
    query:Query,
   // mutation:Mutation,
    })

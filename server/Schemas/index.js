const userData = require('../MOCK_DATA.json')
const UserType = require('./TypeDefs/UserType')

const graphql = require('graphql')
const { GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList } = graphql;

//define query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: null,
            resolve(parent) {
                //if the data is in a database, write SQL/NoSQL query here
                return userData 
            }
        }
    }
})

//define mutation
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                first_name: {type: GraphQLString},
                last_name: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString},
            },
            resolve(parent, args) {
                //if the data is in a database, write SQL/NoSQL query here
                const id = userData.length + 1
                userData.push({
                    id, ...args
                })
                return userData[userData.length - 1]
            }
        },
        deleteUserById: {
            type: UserType,
            args: {
                id: { type: GraphQLInt}
            },
            resolve(parent, args) {
                for (let i = 0; i < userData.length; i++){
                    if (userData[i].id === args.id) {
                        userData.splice(i, 1)
                    }
                }
                return args
            }
        },
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery, mutation: Mutation
})


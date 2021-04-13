const graphql = require('graphql')
const { GraphQLObjectType,
    GraphQLInt,
    GraphQLString, } = graphql;

//shape of each piece of data (user)
const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: {type: GraphQLInt},
        first_name: {type: GraphQLString},
        last_name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
    })
})

module.exports = UserType
 //graphiqltypes
let {
GraphQLID,
GraphQLString,
GraphQLFloat,
GraphQLObjectType,
GraphQLNonNull,
GraphQLList

} = require('graphql')
module.exports = new GraphQLObjectType({
name: 'Usuario',
description: 'A Usuario',
fields: { idUsuario: { type: new GraphQLNonNull(GraphQLID) },username:{type: new GraphQLNonNull(GraphQLString)},email:{type: new GraphQLNonNull(GraphQLString)},password:{type: new GraphQLNonNull(GraphQLString)},}
}
)
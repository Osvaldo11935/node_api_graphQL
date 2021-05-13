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
name: 'Carro',
description: 'A Carro',
fields: { idCarro: { type: new GraphQLNonNull(GraphQLID) },matricula:{type: new GraphQLNonNull(GraphQLString)},marca:{type: new GraphQLNonNull(GraphQLString)},modelo:{type: new GraphQLNonNull(GraphQLString)},Pessoaid:{type: new GraphQLNonNull(GraphQLString)},}
}
)
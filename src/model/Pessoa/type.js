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
name: 'Pessoa',
description: 'A Pessoa',
fields: { idPessoa: { type: new GraphQLNonNull(GraphQLID) },nomeCompleto:{type: new GraphQLNonNull(GraphQLString)},datanascimento:{type: new GraphQLNonNull(GraphQLString)},}
}
)
 //graphiqlmutationmodel
const { 
GraphQLNonNull,
GraphQLString,
GraphQLList,
GraphQLInputObjectType,
GraphQLID,
GraphQLFloat
} = require('graphql')
const type = require('./type')
const Usuario = require('./Usuario')

const UsuarioInput =
new GraphQLInputObjectType({
name: "UsuarioInput",
fields: {username:{type: new GraphQLNonNull(GraphQLString)},email:{type: new GraphQLNonNull(GraphQLString)},password:{type: new GraphQLNonNull(GraphQLString)},
}
})
module.exports = {
addUsuario: {
type,
args: { obj: {
type:UsuarioInput
 
}
},
resolve: Usuario.createEntry.bind(Usuario)},updateUsuario: {
type,
 args: {
idUsuario:     { type: GraphQLID },obj: {
type:UsuarioInput
 
}
},
resolve: Usuario.updateEntry.bind(Usuario)
},
deleteUsuario: {
type,
args: {
idUsuario: { type: GraphQLID },
},
resolve: Usuario.deleteEntry.bind(Usuario)
}}
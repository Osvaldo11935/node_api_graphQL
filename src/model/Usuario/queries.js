 //graphiqlquerymodel
const { GraphQLList,
GraphQLID,
GraphQLString,
GraphQLFloat } = require('graphql')
const type = require('./type')

const Usuario = require("./Usuario")
module.exports = {
Usuarios: {
type: new GraphQLList(type),
args: {username:{type: GraphQLString},email:{type: GraphQLString},password:{type: GraphQLString},},
resolve: Usuario.findMatching.bind(Usuario)
},Usuario: {
type,
args: {
idUsuario: {
type: GraphQLID
}
},


resolve: Usuario.getByID.bind(Usuario)
}
}
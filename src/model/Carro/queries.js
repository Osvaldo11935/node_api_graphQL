 //graphiqlquerymodel
const { GraphQLList,
GraphQLID,
GraphQLString,
GraphQLFloat } = require('graphql')
const type = require('./type')

const Carro = require("./Carro")
module.exports = {
Carros: {
type: new GraphQLList(type),
args: {matricula:{type: GraphQLString},marca:{type: GraphQLString},modelo:{type: GraphQLString},Pessoaid:{type: GraphQLString},},
resolve: Carro.findMatching.bind(Carro)
},Carro: {
type,
args: {
idCarro: {
type: GraphQLID
}
},


resolve: Carro.getByID.bind(Carro)
}
}
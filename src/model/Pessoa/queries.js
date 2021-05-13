 //graphiqlquerymodel
const { GraphQLList,
GraphQLID,
GraphQLString,
GraphQLFloat } = require('graphql')
const type = require('./type')

const Pessoa = require("./Pessoa")
module.exports = {
Pessoas: {
type: new GraphQLList(type),
args: {nomeCompleto:{type: GraphQLString},datanascimento:{type: GraphQLString},},
resolve: Pessoa.findMatching.bind(Pessoa)
},Pessoa: {
type,
args: {
idPessoa: {
type: GraphQLID
}
},


resolve: Pessoa.getByID.bind(Pessoa)
}
}
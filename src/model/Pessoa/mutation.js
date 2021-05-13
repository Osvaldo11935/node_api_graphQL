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
const Pessoa = require('./Pessoa')

const PessoaInput =
new GraphQLInputObjectType({
name: "PessoaInput",
fields: {nomeCompleto:{type: new GraphQLNonNull(GraphQLString)},datanascimento:{type: new GraphQLNonNull(GraphQLString)},
}
})
module.exports = {
addPessoa: {
type,
args: { obj: {
type:PessoaInput
 
}
},
resolve: Pessoa.createEntry.bind(Pessoa)},updatePessoa: {
type,
 args: {
idPessoa:     { type: GraphQLID },obj: {
type:PessoaInput
 
}
},
resolve: Pessoa.updateEntry.bind(Pessoa)
},
deletePessoa: {
type,
args: {
idPessoa: { type: GraphQLID },
},
resolve: Pessoa.deleteEntry.bind(Pessoa)
}}
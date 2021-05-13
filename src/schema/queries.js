 //graphiqlschemaqueries
const { GraphQLObjectType } = require('graphql')
const UsuarioQueries=require("../model/Usuario/queries"); const PessoaQueries=require("../model/Pessoa/queries"); const CarroQueries=require("../model/Carro/queries"); 
module.exports = new GraphQLObjectType({
name: 'RootQueryType',
fields: { Usuario:UsuarioQueries.Usuario,Usuarios:UsuarioQueries.Usuarios,  Pessoa:PessoaQueries.Pessoa,Pessoas:PessoaQueries.Pessoas,  Carro:CarroQueries.Carro,Carros:CarroQueries.Carros, }
})
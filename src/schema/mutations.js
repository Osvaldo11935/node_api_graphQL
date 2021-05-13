 //graphiqlschemamutation
const { GraphQLObjectType } = require('graphql')
const UsuarioMutation=require("../model/Usuario/mutation"); const PessoaMutation=require("../model/Pessoa/mutation"); const CarroMutation=require("../model/Carro/mutation"); 
module.exports = new GraphQLObjectType({
name: 'RootMutationsType',
fields: { addUsuario:UsuarioMutation.addUsuario,  addPessoa:PessoaMutation.addPessoa,  addCarro:CarroMutation.addCarro,    updateUsuario:UsuarioMutation.updateUsuario,deleteUsuario:UsuarioMutation.deleteUsuario,  updatePessoa:PessoaMutation.updatePessoa,deletePessoa:PessoaMutation.deletePessoa,  updateCarro:CarroMutation.updateCarro,deleteCarro:CarroMutation.deleteCarro, 
}
})
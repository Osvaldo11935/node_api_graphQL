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
const Carro = require('./Carro')

const CarroInput =
new GraphQLInputObjectType({
name: "CarroInput",
fields: {matricula:{type: new GraphQLNonNull(GraphQLString)},marca:{type: new GraphQLNonNull(GraphQLString)},modelo:{type: new GraphQLNonNull(GraphQLString)},Pessoaid:{type: new GraphQLNonNull(GraphQLString)},
}
})
module.exports = {
addCarro: {
type,
args: { obj: {
type:CarroInput
 
}
},
resolve: Carro.createEntry.bind(Carro)},updateCarro: {
type,
 args: {
idCarro:     { type: GraphQLID },obj: {
type:CarroInput
 
}
},
resolve: Carro.updateEntry.bind(Carro)
},
deleteCarro: {
type,
args: {
idCarro: { type: GraphQLID },
},
resolve: Carro.deleteEntry.bind(Carro)
}}
 //graphiqlmodelosde
const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')
class Usuario extends DAO {
static get TABLE_NAME() {
return 'Usuario'}
static async getByID(_, {idUsuario}) {
return await this.find(idUsuario)
}
static async findMatching(_, fields) {
if (Object.keys(fields).length === 0) return this.findAll()
return this.findByFields({
fields
})
}
static async createEntry(_, {obj}) {
const connection = await mySQLWrapper.getConnectionFromPool()
try {
let _result = await this.insert(connection, {
data: obj})
return this.getByID(_, {idUsuario: _result.insertId})
} finally {
if (connection != null) connection.release()
}
}
static async updateEntry(_, {idUsuario, obj}) {
const connection = await mySQLWrapper.getConnectionFromPool()
try {
await this.update(connection, {id:idUsuario,
data: obj
})
return this.getByID(_, {idUsuario})
} finally {
if (connection != null) connection.release()
}
}
 static async deleteEntry(_, { idUsuario }) {
const connection = await mySQLWrapper.getConnectionFromPool()
try {
await this.delete(connection, {
id:idUsuario
})
return this.getByID(_, { idUsuario})
} finally {
if (connection != null) connection.release()
}
}}
module.exports = Usuario
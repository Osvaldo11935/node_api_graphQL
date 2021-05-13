 //graphiqlmodelosde
const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')
class Carro extends DAO {
static get TABLE_NAME() {
return 'Carro'}
static async getByID(_, {idCarro}) {
return await this.find(idCarro)
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
return this.getByID(_, {idCarro: _result.insertId})
} finally {
if (connection != null) connection.release()
}
}
static async updateEntry(_, {idCarro, obj}) {
const connection = await mySQLWrapper.getConnectionFromPool()
try {
await this.update(connection, {id:idCarro,
data: obj
})
return this.getByID(_, {idCarro})
} finally {
if (connection != null) connection.release()
}
}
 static async deleteEntry(_, { idCarro }) {
const connection = await mySQLWrapper.getConnectionFromPool()
try {
await this.delete(connection, {
id:idCarro
})
return this.getByID(_, { idCarro})
} finally {
if (connection != null) connection.release()
}
}}
module.exports = Carro
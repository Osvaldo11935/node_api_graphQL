 //graphiqlmodelosde
const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')
class Pessoa extends DAO {
static get TABLE_NAME() {
return 'Pessoa'}
static async getByID(_, {idPessoa}) {
return await this.find(idPessoa)
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
return this.getByID(_, {idPessoa: _result.insertId})
} finally {
if (connection != null) connection.release()
}
}
static async updateEntry(_, {idPessoa, obj}) {
const connection = await mySQLWrapper.getConnectionFromPool()
try {
await this.update(connection, {id:idPessoa,
data: obj
})
return this.getByID(_, {idPessoa})
} finally {
if (connection != null) connection.release()
}
}
 static async deleteEntry(_, { idPessoa }) {
const connection = await mySQLWrapper.getConnectionFromPool()
try {
await this.delete(connection, {
id:idPessoa
})
return this.getByID(_, { idPessoa})
} finally {
if (connection != null) connection.release()
}
}}
module.exports = Pessoa
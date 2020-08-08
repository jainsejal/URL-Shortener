var sqlite3 = require('sqlite3').verbose()
export const DB = new sqlite3.Database(':memory:')

const urlsTableSchema = {
  id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
  url: 'TEXT',
  hash: 'TEXT'
}

export function createURLTable () {
  let queryString = ''
  for (var key in urlsTableSchema) {
    queryString += `${key} ${urlsTableSchema[key]},`
  }
  DB.run(`CREATE TABLE IF NOT EXISTS urls (${queryString.slice(0, -1)})`)
}

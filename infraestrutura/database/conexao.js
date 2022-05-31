const mysql = require("mysql")
const config = require("config")

const conexao = mysql.createConnection({
    host: config.get("mysql.host"),
    password: config.get("mysql.password"),
    port: config.get("mysql.port"),
    user: config.get("mysql.user"),
    database: config.get("mysql.database")
})

module.exports = conexao
const ExecutaQuery = require("../infraestrutura/database/query")

class Usuario {
    async adiciona(dados) {
        try {
            const sql = `insert into Usuario set ?`
            console.log("Adicionando um novo usuario");
            await ExecutaQuery(sql, dados)
        } catch (error) {
            throw new Error("SQL Error")
        }
    }

    async obterPorId(id) {
        try {
            const sql = `select * from Usuario where id = ?`
            console.log(`Pegando o usuario de id ${id}`);
            return await ExecutaQuery(sql, id)
        } catch (error) {
            throw new Error("SQL Error")
        }
    }
}

module.exports = new Usuario()
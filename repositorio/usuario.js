const ExecutaQuery = require("../infraestrutura/database/query")

class Usuario {
    async adiciona(dados) {
        try {
            const sql = `insert into Usuario set ?`
            console.log("Adicionando um novo usuario");
            await ExecutaQuery(sql, dados)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async lista() {
        try {
            const sql = `select * from Usuario;`
            console.log("Listando os usuarios");
            return await ExecutaQuery(sql)
        } catch (erro) {
            throw new Error(erro.message)
        }
    }

    async obterPorEmail(email) {
        try {
            const sql = "select * from Usuario where email = ?"
            console.log(`Pegando Usuario de email ${email}`);
            return await ExecutaQuery(sql, email)
        } catch (erro) {
            throw new Error(erro.message)   
        }
    }

    async obterPorId(id) {
        try {
            const sql = `select * from Usuario where id = ?`
            console.log(`Pegando o usuario de id ${id}`);
            return await ExecutaQuery(sql, id)
        } catch (erro) {
            throw new Error(erro.message)
        }
    }
}

module.exports = new Usuario()
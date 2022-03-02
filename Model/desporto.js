const conexao = require("../infraestrutura/database/conexao")
const repositorio = require("../repositorio/desporto")

class Desporto {
    async lista() {
        const dados = await repositorio.lista()
        return dados
    }
}

module.exports = new Desporto()
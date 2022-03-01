const conexao = require("../infraestrutura/database/conexao")
const repositorio = require("../repositorio/desporto")

class Desporto {
    lista() {
        return repositorio.lista()
    }
}

module.exports = new Desporto()
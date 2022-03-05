const repositorio = require("../repositorio/news")

class News {
    async lista() {
        return await repositorio.lista()
    }

    async inserir(dados) {
        return await repositorio.inserir(dados)
    }

    async UltimoID (){
        return await repositorio.UltimoID()
    }
}

module.exports = new News()
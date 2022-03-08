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

    async listaCategoria() {
        return await repositorio.listaCategoria()
    }


    async Group1() {
        return await repositorio.Group1()
    }

    async mainNews() {
        return await repositorio.mainNews()
    }
}

module.exports = new News()
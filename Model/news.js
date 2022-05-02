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

    async GroupDesporto() {
        try {
            return await repositorio.GrupoDesportos()
        } catch (error) {
            throw new Error("Erro ao Listar Grupo")
        }
    }

    async mainNews() {
        return await repositorio.mainNews()
    }

    async deletar(id) {
        try {
            return await repositorio.deletar(id)
        } catch (erro) {
            throw new Error("Impossivel apagar a noticia")
        }
    }

    
}

module.exports = new News()
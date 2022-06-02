class NoticiaNaoEncontrada extends Error {
    constructor(idNoticia) {
        const mensagem = `A notícia com o ID ${idNoticia} não foi encontrada.`
        super(mensagem)
        this.name = "Nao encontrado"
    }
}

module.exports = NoticiaNaoEncontrada
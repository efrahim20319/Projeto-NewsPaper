class NoticiaNaoEncontrada extends Error {
    constructor(idNoticia) {
        const mensagem = `A notícia com o ID ${idNoticia} não foi encontrada.`
        super(mensagem)
        this.message = mensagem
    }
}

module.exports = NoticiaNaoEncontrada
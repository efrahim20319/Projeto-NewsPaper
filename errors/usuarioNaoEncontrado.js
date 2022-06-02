class UsuarioNaoEncontrado extends Error {
    constructor(mensagem) {
        super(mensagem)
        this.name = "Nao encontrado"
    }
}

module.exports = UsuarioNaoEncontrado
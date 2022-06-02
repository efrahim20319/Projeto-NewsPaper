class EmailJaExistente extends Error {
    constructor(email) {
        const mensagem = `Já existe um usuario cadastrado com o email ${email}`
        super(mensagem)
        this.name = "Usuario ja Existente"
    }
}

module.exports = EmailJaExistente
const bcrypt = require("bcrypt")
const repositorio = require("../repositorio/usuario")
const UsuarioNaoEncontrado = require("../errors/usuarioNaoEncontrado")
const EmailJaExistente = require("../errors/EmailJaCadastrado")

class Usuario {
    constructor(dados) {
        this.nome = dados.nome || null
        this.senha = dados.senha || null
        this.sexo = dados.sexo || null
        this.dataNascimento = dados.dataNascimento || null
        this.email = dados.email || null
    }

    static async lista() {
        try {
            const usuarios = await repositorio.lista()
            const dados = [...usuarios]
            return dados.map(usuario => { return Usuario.filtar(usuario) })
        } catch (erro) {
            throw new Error(erro.message)
        }
    }

    static filtar(usuario) {
        return { id: usuario.id, nome: usuario.nome, email: usuario.email, sexo: usuario.sexo }
    }

    static async obterPorEmail(email) {
        const usuario = await repositorio.obterPorEmail(email)
        if (!usuario.length) throw new UsuarioNaoEncontrado(`O usuario com o e-mail ${email} não foi encontrado`)
        return usuario
    }

    static async obterPorId(id) {
        const usuario = await repositorio.obterPorId(id)
        if (!usuario.length) throw new UsuarioNaoEncontrado(`O usuario de id ${id} não foi encontrado`)
        return usuario
    }

    async adiciona() {
        try {
            const usuario = await Usuario.obterPorEmail(this.email)
            if (usuario.length)
                throw new EmailJaExistente(this.email)
            await repositorio.adiciona({ nome: this.nome, senha: await Usuario.gerarSenhaHash(this.senha), email: this.email, sexo: this.sexo, dataNascimento: this.dataNascimento })
        } catch (erro) {
            throw new Error(erro.message)
        }
    }

    static gerarSenhaHash(senha) {
        const custo = 12
        return bcrypt.hash(senha, custo)
    }
}

module.exports = Usuario
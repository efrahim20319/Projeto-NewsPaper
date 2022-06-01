const bcrypt = require("bcrypt")
const repositorio = require("../repositorio/usuario")
const UsuarioNaoEncontrado = require("../errors/usuarioNaoEncontrado")

class Usuario {
    constructor(dados) {
        this.nome = dados.nome || null
        this.senha = dados.senha || null
        this.sexo = dados.sexo || null
        this.dataNascimento = dados.dataNascimento || null
    }

    static async obterPorId(id) {
        const usuario = await repositorio.obterPorId(id)
        if (!usuario.length) throw new UsuarioNaoEncontrado(`O usuario de id ${id} não foi encontrado`)
        return usuario
    }

    async adiciona() {
        try {
            await repositorio.adiciona({ nome: this.nome, senha: await Usuario.gerarSenhaHash(this.senha), sexo: this.sexo, dataNascimento: this.dataNascimento })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static gerarSenhaHash(senha) {
        const custo = 12
        return bcrypt.hash(senha, custo)
    }
}

module.exports = Usuario
const roteador = require("express").Router()
const Usuario = require("../Model/usuario")

roteador.post("/signin", async (req, res) => {
    try {
        const dados = req.body
        const usuario = new Usuario(dados)
        console.log(usuario);
        await usuario.adiciona()
        res.status(200).json("Dados Gravados Com Sucesso")
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

roteador.route("/:id")
    .get(async (req, res, next) => {
        try {
            const id = Number(req.params.id)
            const usuario = await Usuario.obterPorId(id)
            res.status(200).json(usuario)
        } catch (error) {
            next(error)
        }
    })


module.exports = roteador
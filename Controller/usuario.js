const roteador = require("express").Router()
const Usuario = require("../Model/usuario")

roteador.get("/", async (req,res,next) => {
    try {
        const dados = await Usuario.lista()
        res.status(200).json(dados)
    } catch (erro) {
        next(erro)
    }
})


roteador.post("/signin", async (req, res) => {
    try {
        const dados = req.body
        const usuario = new Usuario(dados)
        await usuario.adiciona()
        res.status(200).json("Dados Gravados Com Sucesso")
    } catch (erro) {
        res.status(500).json({ erro: erro.message })
    }
})

roteador.route(/^\/email\/(\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+)$/)
    .get(async (req, res, next) => {
        try {
            const email = req.params[0]
            const usuario = await Usuario.obterPorEmail(email)
            res.status(200).json(usuario)
        } catch (erro) {
            next(erro)
        }
    })

roteador.route(/^\/(\d+)$/)
    .get(async (req, res, next) => {
        try {
            const id = Number(req.params[0])
            const usuario = await Usuario.obterPorId(id)
            res.status(200).json(usuario)
        } catch (error) {
            next(error)
        }
    })


module.exports = roteador
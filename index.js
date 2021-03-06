const app = require("./ExpressConfig/customExpress")
const fs = require("fs")
const path = require("path")
const express = require("express")
const config = require("config")
const conexao = require("./infraestrutura/database/conexao")
const tabelas = require("./infraestrutura/database/tabelas")
const desporto = require("./Controller/desporto")
const news = require("./Controller/news")
const usuario = require("./Controller/usuario")
const NoticiaNaoEncontrada = require("./errors/noticiaNaoEncontrada")
const UsuarioNaoEncontrado = require("./errors/usuarioNaoEncontrado")
const EmailJaExistente = require("./errors/EmailJaCadastrado")

conexao.connect((erro) => {
    if (erro) {
        console.error("Não foi possivel fazer a conexao");
    } else {
        app.set("view engine", "ejs")
        const port = config.get("app.porta")
        tabelas.init(conexao)
        const publicView = path.resolve(__dirname, 'views', 'telas')
        app.use(express.static(publicView))
        
        app.use("/news", news)
        app.use("/desportos", desporto)
        app.use("/usuario", usuario)

        app.get("/", (req, res) => {
            res.status(300).redirect("http://localhost:3000/home")
        })
        
        app.get("/home", (req, res) => {
           res.render("./telas/home/index")
        })
        app.get("/publicada", (req, res) => {
            res.render("./telas/publicada/index")
        })

        app.get("/entrar", (req, res) => {
            res.render("./telas/entrar/index")
        })

        app.get("/criarconta", (req, res) => {
            res.render("./telas/criarconta/index")
        })
        
        app.get("/publisher", (req, res) => {
           res.render("./telas/publisher/index")
        })
        
        app.use((erro, req, res, next) => {
            let status = 500
        
            if (erro instanceof NoticiaNaoEncontrada || erro instanceof UsuarioNaoEncontrado)
                status = 404
            
            if (erro instanceof EmailJaExistente)
                status = 406

            res.status(status).json({tipo:erro.name, mensagem: erro.message})
        })

        app.use((req, res, next) => {
            res.status(404).send(
                "<h1>404 Pagina Nao Encontrada</h1>")
        })

        app.listen(port, () => console.log(`Rodando na porta ${port}`))
    }
})
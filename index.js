const app = require("./ExpressConfig/customExpress")
const fs = require("fs")
const path = require("path")
const express = require("express")
const config = require("config")
const conexao = require("./infraestrutura/database/conexao")
const tabelas = require("./infraestrutura/database/tabelas")
const desporto = require("./Controller/desporto")
const news = require("./Controller/news")
const NoticiaNaoEncontrada = require("./errors/noticiaNaoEncontrada")

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
        app.get("/", (req, res) => {
            res.status(300).redirect("http://localhost:3000/home")
        })
        
        app.get("/home", (req, res) => {
           res.render("./telas/home/index")
        })
        app.get("/publicada", (req, res) => {
            res.render("./telas/publicada/index")
        })

        
        app.get("/publisher", (req, res) => {
           res.render("./telas/publisher/index")
        })
        
        app.use((erro, req, res, next) => {
            let status = 500
        
            if (erro instanceof NoticiaNaoEncontrada)
                status = 404
        
            res.status(status).json({erro: erro.message})
        })
        app.listen(port, () => console.log(`Rodando na porta ${port}`))
    }
})
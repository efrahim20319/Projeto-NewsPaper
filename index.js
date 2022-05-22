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
        const port = config.get("app.porta")
        tabelas.init(conexao)
        const publicView = path.resolve(__dirname, 'View', 'telas')
        app.use(express.static(publicView))
        
        
        
        app.get("/", (req, res) => {
            res.status(300).redirect("http://localhost:3000/home")
        })
        
        app.get("/home", (req, res) => {
            const html = fs.readFileSync(path.resolve(publicView,'home','index.html'), "utf-8")
            res.send(html)
        })
        
        app.get("/publisher", (req, res) => {
            const html = fs.readFileSync(path.resolve(publicView,'publisher','index.html'), "utf-8")
            res.send(html)
        })
        
        
        app.use("/news", news)
        app.use("/desportos", desporto)
        
        app.use((erro, req, res, next) => {
            let status = 500
        
            if (erro instanceof NoticiaNaoEncontrada)
                status = 404
        
            res.status(status).json({erro: erro.message})
        })
        app.listen(port, () => console.log(`Rodando na porta ${port}`))
    }
})
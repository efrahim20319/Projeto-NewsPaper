const app = require("./ExpressConfig/customExpress")
const config = require("config")
const conexao = require("./infraestrutura/database/conexao")
const tabelas = require("./infraestrutura/database/tabelas")
const desporto = require("./Controller/desporto")
const news = require("./Controller/News/news")

conexao.connect((erro) => {
    if (erro) {
        console.error("Não foi possivel fazer a conexao");
    } else {
        const port = config.get("app.porta")
        tabelas.init(conexao)
        app.use("/news", news)
        app.use("/news/desportos", desporto)
        app.listen(port, () => console.log(`Rodando na porta ${port}`))
    }
})
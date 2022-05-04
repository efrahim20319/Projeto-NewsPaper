const news = require("express").Router();
const NewsModelo = require("../Model/news");
const upload = require("../infraestrutura/UploadArquivos/upload");
const path = require("path")
const moment = require("moment")

news.get("/", async (req, res) => {
  const dados = await NewsModelo.lista();
  res.status(200).send(dados);
});

news.get("/grupoAfrica", async(req, res) => {
  try {
    const dados = await NewsModelo.GroupAfrica()
    res.status(200).json(dados)
  } catch (erro) {
    res.status(500).json({erro: erro.message})
  }

})

news.get("/group1", async (req, res) => {
  const dados = await NewsModelo.Group1()
  res.status(200).json(dados)
})

news.get("/main-news", async (req, res) => {
  const dados = await NewsModelo.mainNews()
  res.status(200).json(dados)
})

news.get('/categorias', async (req, res) => {
  const dados = await NewsModelo.listaCategoria()
  res.status(200).json(dados)
})

news.get('/desportos', async (req, res) => {
  try {
    const dados = await NewsModelo.GroupDesporto()
    res.status(200).json(dados)
  } catch (erro) {
    res.status(500).json({erro: erro.message})
  }
})

news.post("/", upload.single("imagem"), (req, res) => {
  const corpo = req.body;
  const imagem = req.file.filename;
  const extensao = path.extname(imagem);
  const dados = Object.assign({}, corpo, { imagem: imagem });
  dados.imagem = `${corpo.categoria} - ${moment().format("YYYY-MM-DD HH:mm:ss")}${extensao}`;
  res.json(dados);
});

news.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    await NewsModelo.deletar(id)
    res.send(`Usuario ${id} apagado com sucesso`)
  } catch (erro) {
    res.json({erro: erro.message})
  }
})

module.exports = news;
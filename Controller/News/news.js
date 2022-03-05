const news = require("express").Router();
const News = require("../../Model/news");
const upload = require("../../infraestrutura/UploadArquivos/upload");
const path = require("path")
const moment = require("moment")

news.get("/", async (req, res) => {
  const dados = await News.lista();
  res.status(200).send(dados);
});

news.post("/", upload.single("imagem"), (req, res) => {
  const corpo = req.body;
  const imagem = req.file.filename;
  const extensao = path.extname(imagem);
  const dados = Object.assign({}, corpo, { imagem: imagem });
  dados.imagem = `${corpo.categoria} - ${moment().format("YYYY-MM-DD HH:mm:ss")}${extensao}`;
  res.json(dados);
});

module.exports = news;
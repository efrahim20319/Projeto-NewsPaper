const news = require("express").Router();
const NewsModelo = require("../Model/news");
const upload = require("../infraestrutura/UploadArquivos/upload");
const path = require("path");
const moment = require("moment");
const fs = require("fs")

news.get("/", async (req, res) => {
	const dados = await NewsModelo.lista();
	res.status(200).send(dados);
});

news.get("/grupoAfrica", async (req, res) => {
	try {
		const dados = await NewsModelo.GroupAfrica();
		res.status(200).json(dados);
	} catch (erro) {
		res.status(500).json({ erro: erro.message });
	}
});

news.get("/group1", async (req, res) => {
	const dados = await NewsModelo.Group1();
	res.status(200).json(dados);
});

news.get("/main-news", async (req, res) => {
	const dados = await NewsModelo.mainNews();
	res.status(200).json(dados);
});

news.get("/categorias", async (req, res) => {
	const dados = await NewsModelo.listaCategoria();
	res.status(200).json(dados);
});

news.get("/desportos", async (req, res) => {
	try {
		const dados = await NewsModelo.GroupDesporto();
		res.status(200).json(dados);
	} catch (erro) {
		res.status(500).json({ erro: erro.message });
	}
});

news.post("/", upload.single("imagem"), (req, res) => {
	try {
		res.status(200).redirect("http://localhost:3000/publicada")
	} catch (error) {
		res.status(500).json({error: error.message})
	}
});

news.route("/:id")
	.get(async (req, res, next) => {
    try {
      const id = Number(req.params.id)
      const noticia = await NewsModelo.pegarPorId(id)
      res.status(200).json(noticia)
    } catch (erro) {
      next(erro)
    }
  })
	.delete(async (req, res, next) => {
		try {
			const id = Number(req.params.id);
			const respostaQuery = await NewsModelo.pegarPorId(id)
			const news = {...respostaQuery['0']}
			const caminhoDaImagem = path.resolve("./Views/telas/uploads",news.imagem)
			await NewsModelo.deletar(id);
			fs.unlinkSync(caminhoDaImagem)
			res.send(`Noticia de ID ${id} apagada com sucesso`);
		} catch (erro) {
			next(erro)
		}
	});

module.exports = news;
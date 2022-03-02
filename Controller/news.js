const news = require("express").Router();
const express = require("express");
const News = require("../Model/news");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: storage });

news.get("/", async (req, res) => {
  const dados = await News.lista();
  res.status(200).send(dados);
});

news.post("/", upload.single("imagem"), (req, res) => {
  res.json({ imagem: req.file, body: req.body });
});

module.exports = news;

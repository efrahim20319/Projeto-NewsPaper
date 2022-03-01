const desporto = require("express").Router();
const Desporto = require("../Model/desporto");

desporto.get("/", (req, res) => {
  Desporto.lista()
    .then((resultados) => {
      console.log(resultados);
      res.send(resultados);
    })
    .catch((erro) => {
      res.send(erro);
    });
});

desporto.get("/:id", (req, res) => {
  res.send(`O teu id: ${req.params.id}`);
});
module.exports = desporto;

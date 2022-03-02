const desporto = require("express").Router();
const Desporto = require("../Model/desporto");

desporto.get("/", async (req, res) => {
  const resultados = await Desporto.lista();
  res.status(200).json(resultados);

});

desporto.get("/:id", (req, res) => {
  res.send(`O teu id: ${req.params.id}`);
});
module.exports = desporto;

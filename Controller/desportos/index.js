const desporto = require("express").Router();

desporto.get("/", (req, res) => {
  res.send("Estas nos desportos")
});

desporto.get("/:id", (req, res) => {
    res.send(`O teu id: ${req.params.id}`)
});
module.exports = desporto;
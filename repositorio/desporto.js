const ExecutaQuery = require("../infraestrutura/database/query");

class Desporto {
  lista() {
    const sql = "select * from Noticia where categoria = 1";

    return ExecutaQuery(sql);
  }
}

module.exports = new Desporto();
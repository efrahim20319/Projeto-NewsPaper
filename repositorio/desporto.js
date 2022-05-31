const ExecutaQuery = require("../infraestrutura/database/query");

class Desporto {
  async lista() {
    const sql = "SELECT * FROM Noticia WHERE categoria = 1;";
    console.log("Fazendo:", sql);
    return await ExecutaQuery(sql);
  }
}

module.exports = new Desporto();
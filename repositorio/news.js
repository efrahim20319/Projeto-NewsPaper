const ExecutaQuery = require("../infraestrutura/database/query");

class News {
  async lista() {
    const sql = "SELECT * FROM Noticia;";
    console.log("Fazendo:", sql);
    return await ExecutaQuery(sql);
  }

  async inserir(dados) {
    const sql = "INSERT INTO Noticia SET ?";
    console.log("Fazendo:",sql);
    return ExecutaQuery(sql, dados);
  }

  async UltimoID() {
    const sql = "SELECT max(id) AS Ultimo FROM Noticia;"
    console.log("Fazendo:",sql);
    return ExecutaQuery(sql)
  }
}

module.exports = new News();

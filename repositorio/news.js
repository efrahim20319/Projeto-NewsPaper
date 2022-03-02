const ExecutaQuery = require("../infraestrutura/database/query")

class News {
    async lista() {
        const sql = "SELECT * FROM Noticia;"
        return await ExecutaQuery(sql) 
    }
}

module.exports = new News()
const repositorio = require("../repositorio/news")

class News {
    async lista() {
        return await repositorio.lista()
    }
}

module.exports = new News()
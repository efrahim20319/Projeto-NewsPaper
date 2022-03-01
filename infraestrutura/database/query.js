const conexao = require("./conexao")

const ExecutaQuery = (query, parametros = '') => {
    return new Promise((reject, resolve) => {
        conexao.query(query, parametros, (erro, resultados) => {
            if (erro) {
                reject(erro)
            } else {
                resolve(resultados)
            }
        })
    })
}

module.exports = ExecutaQuery
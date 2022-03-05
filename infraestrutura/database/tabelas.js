class Tabelas {
    init (conexao) {
        this.conexao = conexao
        
        this.criarTbNoticia()
        this.criarTbCategoria()
    }

    criarTbNoticia() {
        const sql = "CREATE TABLE IF NOT EXISTS Noticia (  id int PRIMARY KEY AUTO_INCREMENT,  titulo VARCHAR(255) NOT NULL,  categoria INT REFERENCES Categoria(id), conteudo MEDIUMTEXT NOT NULL, imagem varchar(255) not null, dataCriacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP )"

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.error("Nao foi possivel criar TbNoticia")
            } else {
                console.log("TbNoticia Criada com sucesso");
            }
        })
    }

    criarTbCategoria() {
        const sql = "CREATE TABLE IF NOT EXISTS Categoria ( id int PRIMARY KEY AUTO_INCREMENT, titulo VARCHAR (255) NOT NULL);"

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.error("Nao foi possivel criar TbNoticia")
            } else {
                console.log("TbCategoria Criada com sucesso");
            }
        })
    }
}

module.exports = new Tabelas()
class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarTbNoticia()
        this.criarTbCategoria()
    }

    criarTbNoticia() {
        const sql = `
        CREATE TABLE if not exists \`noticia\` (
            \`id\` int NOT NULL AUTO_INCREMENT primary key,
            \`titulo\` varchar(255) NOT NULL,
            \`categoria\` int NOT NULL,
            \`conteudo\` mediumtext NOT NULL,
            \`imagem\` varchar(255) NOT NULL,
            \`dataCriacao\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            foreign key (categoria) references Categoria(id)
          );
        `
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.error("Nao foi possivel criar TbNoticia")
            } else {
                console.log("TbNoticia Criada com sucesso");
            }
        })
    }

    criarTbCategoria() {
        const sql = "CREATE TABLE IF NOT EXISTS categoria ( id int PRIMARY KEY AUTO_INCREMENT, titulo VARCHAR (255) NOT NULL);"

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
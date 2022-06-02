class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarTbCategoria()
        this.criarTbNoticia()
        this.criarTbConta()
        this.criarTbUsuario()
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

    criarTbUsuario() {
        const sql = `
        create table if not exists Usuario(
            id int not null auto_increment primary key,
            nome  varchar(250) NOT NULL,
            email varchar(300) UNIQUE NOT NULL,
            senha varchar(300) NOT NULL,
            sexo enum("M","F") NOT NULL,
            dataNascimento timestamp NOT NULL,
            DataCriacao timestamp default current_timestamp,
            DataModificacao timestamp default current_timestamp on update current_timestamp
        ); `

        this.conexao.query(sql, (erro) =>{
            if (erro) {
                console.log("Nao possivel criar a tabela Usuario");
            } else {
                console.log("Tabela Usuario criada com sucesso");
            }
        })
    }

    criarTbConta() {
        const sql = `
        create table if not exists Conta (
            id int not null auto_increment primary key,
            idUsuario int not null,
            foreign key (idUsuario) references Usuario(id)
        );
        `
        this.conexao.query(sql, (erro) =>{
            if (erro) {
                console.log("Nao possivel criar a tabela Conta");
            } else {
                console.log("Tabela Conta criada com sucesso");
            }
        })
    }
}

module.exports = new Tabelas()
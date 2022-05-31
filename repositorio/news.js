const ExecutaQuery = require("../infraestrutura/database/query");

class News {
	async lista() {
		const sql = "SELECT * FROM noticia;";
		console.log("Listando as Noticias:", sql);
		return await ExecutaQuery(sql);
	}

	async inserir(dados) {
		const sql = "INSERT INTO noticia SET ?";
		console.log("Inserindo Noticia:", sql);
		return ExecutaQuery(sql, dados);
	}

	async UltimoID() {
		const sql = "SELECT max(id) AS Ultimo FROM noticia;";
		console.log("Pegando o ultimo id:", sql);
		return await ExecutaQuery(sql);
	}

	async mainNews() {
		const sql = "select * from MainNews order by dataCriacao desc limit 7;";
		console.log("Pegando as Noticias Principais:", sql);
		return await ExecutaQuery(sql);
	}

	async grupoEntretenimento() {
		const sql = `select A.id, A.titulo, A.imagem, A.dataCriacao, A.conteudo, B.titulo as categoria from noticia A inner join categoria B on A.categoria = B.id where B.titulo = "Entretenimento" order by datacriacao desc limit 3;`
		console.log("Pegando noticias Entretenimento");
		return await ExecutaQuery(sql)
	}

	async grupoMaisNoticias() {
		const sql = `select A.id, A.titulo, A.imagem, A.dataCriacao, A.conteudo, B.titulo as categoria from noticia A inner join categoria B on A.categoria = B.id order by datacriacao desc limit 17, 6;`
		console.log("Pegando noticias Grupo More News");
		return await ExecutaQuery(sql)
	}

	async cardMaisNoticias() {
		const sql = `select A.id, A.titulo, A.imagem, A.dataCriacao, A.conteudo, B.titulo as categoria from noticia A inner join categoria B on A.categoria = B.id order by datacriacao desc limit 22, 1;`
		console.log("Pegando Card Grupo More News");
		return await ExecutaQuery(sql)
	}

	async Group1() {
		const sql =
			"select A.id, A.titulo, A.imagem, A.dataCriacao, A.conteudo, B.titulo as categoria from noticia A inner join categoria B on A.categoria = B.id order by datacriacao desc limit 8, 3;";
		console.log("Pegando o primeiro grupo de Noticias");
		return await ExecutaQuery(sql);
	}
	async listaCategoria() {
		const sql = "SELECT * FROM categoria;";
		console.log("Listando as categorias:", sql);
		return await ExecutaQuery(sql);
	}

	async GroupAfrica() {
		const sql =
			"SELECT A.id, A.titulo, A.imagem, A.conteudo, B.titulo as categoria FROM noticia A inner join categoria B on A.categoria = B.id WHERE A.categoria = 12 order by A.dataCriacao desc limit 4";
		console.log("Listando Noticias de Africa");
		return await ExecutaQuery(sql);
	}

	async GrupoDesportos() {
		const sql =
			"SELECT A.id, A.titulo, A.imagem, A.conteudo, B.titulo as categoria FROM noticia A inner join categoria B on A.categoria = B.id WHERE A.categoria = 1 order by A.dataCriacao limit 2, 3;";
		console.log("Listando os desportos");
		return await ExecutaQuery(sql);
	}

	async pegarPorId(id) {
		try {
			const sql = "SELECT * FROM noticia where id = ?"
			console.log("Pegando a Noticia de Id: ", id);
			return await ExecutaQuery(sql, id)
		} catch (erro) {
			throw new Error("SQL Error")
		}
	}

	async deletar(id) {
		try {
			const sql = "DELETE FROM noticia WHERE id = ?";
			console.log("Apagando a Noticia de Id: ", id);
			return await ExecutaQuery(sql, id);
		} catch (error) {
			throw new Error("SQL Error");
		}
	}
}

module.exports = new News();

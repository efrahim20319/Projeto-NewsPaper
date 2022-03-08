const ExecutaQuery = require("../infraestrutura/database/query");

class News {
	async lista() {
		const sql = "SELECT * FROM Noticia;";
		console.log("Listando as Noticias:", sql);
		return await ExecutaQuery(sql);
	}

	async inserir(dados) {
		const sql = "INSERT INTO Noticia SET ?";
		console.log("Inserindo Noticia:", sql);
		return ExecutaQuery(sql, dados);
	}

	async UltimoID() {
		const sql = "SELECT max(id) AS Ultimo FROM Noticia;";
		console.log("Pegando o ultimo id:", sql);
		return await ExecutaQuery(sql);
	}

	async mainNews() {
		const sql =
			"select id, titulo, imagem, dataCriacao from Noticia order by datacriacao desc limit 7;";
		console.log("Pegando as Noticias Principais:", sql);
		return await ExecutaQuery(sql);
	}

	async Group1() {
		const sql =
			"select A.id, A.titulo, A.imagem, A.dataCriacao, A.conteudo, B.titulo as categoria from Noticia A inner join Categoria B on A.categoria = B.id order by datacriacao desc limit 8,11;";
		console.log("Pegando o primeiro grupo de Noticias");
		return await ExecutaQuery(sql);
	}
	async listaCategoria() {
		const sql = "SELECT * FROM Categoria;";
		console.log("Listando as categorias:", sql);
		return await ExecutaQuery(sql);
	}
}

module.exports = new News();

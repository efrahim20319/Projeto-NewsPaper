const NoticiaNaoEncontrada = require("../errors/noticiaNaoEncontrada");
const repositorio = require("../repositorio/news");

class News {
	async lista() {
		return await repositorio.lista();
	}

	async inserir(dados) {
		return await repositorio.inserir(dados);
	}

	async UltimoID() {
		return await repositorio.UltimoID();
	}

	async listaCategoria() {
		return await repositorio.listaCategoria();
	}

	async pegarPorId(id) {
		const noticia = await repositorio.pegarPorId(id);
		if (!noticia.length) throw new NoticiaNaoEncontrada(id);
		return noticia;
	}

	async Group1() {
		return await repositorio.Group1();
	}

	async grupoEntretenimento() {
		return await repositorio.grupoEntretenimento()
	}

	async grupoMaisNoticias() {
		return await repositorio.grupoMaisNoticias()
	}

	async cardMaisNoticias() {
		return await repositorio.cardMaisNoticias()
	}

	async GroupAfrica() {
		return await repositorio.GroupAfrica();
	}

	async GroupDesporto() {
		try {
			return await repositorio.GrupoDesportos();
		} catch (error) {
			throw new Error("Erro ao Listar Grupo");
		}
	}

	async mainNews() {
		return await repositorio.mainNews();
	}

	async deletar(id) {
		try {
			const usuario = await this.pegarPorId(id)
			if (!usuario.length) throw new NoticiaNaoEncontrada(id)
			await repositorio.deletar(id)
		} catch (erro) {
			throw new Error("Impossivel apagar a noticia");
		}
	}
}

module.exports = new News();
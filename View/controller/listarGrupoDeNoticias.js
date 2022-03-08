import { listarGrupoDeNoticias1 } from "../services/newsGroup1.js";

function criarNoticia(Noticia) {
	const template = `<img draggable="false" class="news__imagem" src="${corrigirCaminho(
		Noticia.imagem
	)}" alt="" /> <div class="card__body"> <figcaption class="card__titulo">${
		Noticia.titulo
	}</figcaption> <p class="news__description"> ${minimizarConteudo(
		Noticia.conteudo
	)} </p> <span class="news__footer">${Noticia.categoria}</span> </div>`;
	const figure = document.createElement("figure");
	figure.classList.add("news__card");
	figure.innerHTML = template;
	return figure;
}

function minimizarConteudo(conteudo) {
	return conteudo.substring(0, 150) + "...";
}

function corrigirCaminho(imagem) {
	const caminho = "../../uploads/";
	return caminho + imagem;
}

async function renderizar() {
	const noticias = await listarGrupoDeNoticias1();
	const divNews = document.querySelectorAll(".news__group")[0];
	noticias.forEach((noticia) => {
		divNews.appendChild(criarNoticia(noticia));
	});
}

renderizar();

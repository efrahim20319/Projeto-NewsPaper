import Services from "../services/NewsServices.js"
class NewsControlador {
    static async renderizar() {
        await this.renderizarBigCard()
        await this.renderizarGrupo1()
        await this.renderizarGrupoDesporto()
        await this.renderizarGrupoAfrica()
        await this.renderizarGrupoEntretenimento()
        await this.renderizarCardMaisNoticia()
        await this.renderizarGrupoMaisNoticia()
    }

    static async renderizarBigCard() {
        const divBigCard = document.querySelector(".big__card")
        const cards = await Services.listarNoticiasPrincipais()
        cards.forEach(card => {
            divBigCard.appendChild(this.CriarCard(card))
        });
    }

    static async renderizarGrupoAfrica() {
        const news = await Services.listarGrupoAfrica()
        const divNews = document.querySelector(".africa__news");
        news.forEach(noticia => {
            divNews.appendChild(this.criarNoticia(noticia))
        })
    }

    static async renderizarGrupoDesporto() {
        const news = await Services.GrupoDesporto()
        const divNews = document.querySelectorAll(".news__group")[1];
        news.forEach(noticia => {
            divNews.appendChild(this.criarNoticia(noticia))
        })
    }

    static async renderizarGrupoEntretenimento() {
        const news = await Services.grupoEntretenimento()
        const divNews = document.querySelectorAll(".news__group")[2];
        news.forEach(noticia => {
            divNews.appendChild(this.criarCardEntretenimento(noticia))
        })
    }

    static async renderizarGrupoMaisNoticia() {
        const news = await Services.grupoMaisNoticias()
        const divNews = document.querySelector(".editor__news");
        news.forEach(noticia => {
            divNews.appendChild(this.criarNoticia(noticia))
        })
    }

    static async renderizarCardMaisNoticia() {
        const news = await Services.cardMaisNoticias()
        const divNews = document.querySelector(".editor__main");
        news.forEach(noticia => {
            const template = this.cardMaisNoticia(noticia)
            divNews.classList.add("news__card", "editor__main");
            divNews.innerHTML = template
        })
    }
    
    static corrigirCaminho (imagem) {
        const caminho = "../uploads/"
        return (caminho+imagem)
    }
    
    static CriarCard(card) {
        const template = `<img draggable="false" class="card__imagem" src="${this.corrigirCaminho(card.imagem)}" alt="" /> <figcaption class="card__titulo">${card.titulo}</figcaption>`
        const figure = document.createElement("figure")
        figure.innerHTML = template
        figure.setAttribute("id", card.id)
        figure.classList.add("_card")
        return figure
    }

    static criarCardEntretenimento(Noticia) {
        const template = `
        <img
            class="news__imagem"
            src="${this.corrigirCaminho(Noticia.imagem)}"
            alt=""
        />
        <div class="card__body">
            <figcaption class="card__titulo">
                ${Noticia.titulo}
            </figcaption>
        </div>
        `
        const figure = document.createElement("figure");
        figure.classList.add("news__card");
        figure.innerHTML = template;
        return figure;
    }

    static cardMaisNoticia(Noticia) {
        const template = `
        <img
			src="${this.corrigirCaminho(Noticia.imagem)}"
			class="main__image"
			alt=""
		/>
		<div class="main__description">
			<figcaption class="card__titulo">
				${Noticia.titulo}
			</figcaption>
			<p class="news__description">
				${this.minimizarConteudo(Noticia.conteudo, 130)}
			</p>
			<span class="news__footer ${Noticia.categoria}">${Noticia.categoria}</span>
		</div>
        `
        return template;
    }

    static criarNoticia(Noticia) {
        const template = `
        <div>
            <img draggable="false" class="news__imagem" src="${this.corrigirCaminho( Noticia.imagem)}" alt="" /> 
            <div class="card__body"> <figcaption class="card__titulo"><abbr title="${Noticia.titulo}">${ this.minimizarConteudo(Noticia.titulo, 40)}</abbr></figcaption>
                <p class="news__description"> ${this.minimizarConteudo(Noticia.conteudo, 120)} </p> 
            </div>
        </div>
        <span class="news__footer ${Noticia.categoria}">${Noticia.categoria}</span>`;
        const figure = document.createElement("figure");
        figure.classList.add("news__card");
        figure.innerHTML = template;
        return figure;
    }

    static minimizarConteudo(conteudo, tamanho) {
        return conteudo.substring(0, tamanho) + "...";
    }

    static async renderizarGrupo1() {
        const noticias = await Services.listarGrupoDeNoticias1();
        const divNews = document.querySelectorAll(".news__group")[0];
        noticias.forEach((noticia) => {
            divNews.appendChild(this.criarNoticia(noticia));
        });
    }
}

NewsControlador.renderizar()
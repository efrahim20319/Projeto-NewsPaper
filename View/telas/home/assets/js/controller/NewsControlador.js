import Services from "../services/NewsServices.js"
class NewsControlador {
    static async renderizar() {
        await this.renderizarBigCard()
        await this.renderizarGrupo1()
        await this.renderizarGrupoDesporto()
    }

    static async renderizarBigCard() {
        const divBigCard = document.querySelector(".big__card")
        const cards = await Services.listarNoticiasPrincipais()
        cards.forEach(card => {
            divBigCard.appendChild(this.CriarCard(card))
        });
    }

    static async renderizarGrupoDesporto() {
        const news = await Services.GrupoDesporto()
        const divNews = document.querySelectorAll(".news__group")[1];
        news.forEach(noticia => {
            divNews.appendChild(this.criarNoticia(noticia))
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

    static criarNoticia(Noticia) {
        const template = `
        <div>
            <img draggable="false" class="news__imagem" src="${this.corrigirCaminho( Noticia.imagem)}" alt="" /> 
            <div class="card__body"> <figcaption class="card__titulo">${ this.minimizarConteudo(Noticia.titulo, 40)}</figcaption>
                <p class="news__description"> ${this.minimizarConteudo(Noticia.conteudo, 130)} </p> 
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


// function CriarCard(card) {
//     const template = `<img draggable="false" class="card__imagem" src="${corrigirCaminho(card.imagem)}" alt="" /> <figcaption class="card__titulo">${card.titulo}</figcaption>`
//     const figure = document.createElement("figure")
//     figure.innerHTML = template
//     figure.setAttribute("id", card.id)
//     figure.classList.add("_card")
//     return figure
// }

// function corrigirCaminho (imagem) {
//     const caminho = "../uploads/"
//     return (caminho+imagem)
// }

// async function renderizar() {
//     const divBigCard = document.querySelector(".big__card")
//     const cards = await listarNoticiasPrincipais()
//     cards.forEach(card => {
//         divBigCard.appendChild(CriarCard(card))
//     });
// }

NewsControlador.renderizar()
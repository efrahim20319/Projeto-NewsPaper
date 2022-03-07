import { listarNoticiasPrincipais } from "../services/main-news.js";

function CriarCard(card) {
    const template = `<img draggable="false" class="card__imagem" src="${corrigirCaminho(card.imagem)}" alt="" /> <figcaption class="card__titulo">${card.titulo}</figcaption>`
    const figure = document.createElement("figure")
    figure.innerHTML = template
    figure.setAttribute("id", card.id)
    figure.classList.add("_card")
    return figure
}

function corrigirCaminho (imagem) {
    const caminho = "../../uploads/"
    return (caminho+imagem)
}

async function renderizar() {
    const divBigCard = document.querySelector(".big__card")
    const cards = await listarNoticiasPrincipais()
    cards.forEach(card => {
        divBigCard.appendChild(CriarCard(card))
    });
}

renderizar()
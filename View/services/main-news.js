export async function listarNoticiasPrincipais() {
    const noticias = await fetch("http://localhost:3000/news/main-news")
    if (noticias.ok)
        return noticias.json()
}
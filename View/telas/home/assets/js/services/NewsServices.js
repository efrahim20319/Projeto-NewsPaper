export default class Services{
    static async listarGrupoDeNoticias1() {
        const dados = await fetch("http://localhost:3000/news/group1");
        if (dados.ok) return dados.json();
    }

    static async listarNoticiasPrincipais() {
        const noticias = await fetch("http://localhost:3000/news/main-news")
        if (noticias.ok)
            return noticias.json()
    }

    static async GrupoDesporto() {
        const noticias = await fetch("http://localhost:3000/news/desportos")
        if (noticias.ok)
            return noticias.json()
    }
}
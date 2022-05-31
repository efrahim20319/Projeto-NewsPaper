export default class Services{
    static async listarGrupoDeNoticias1() {
        const dados = await fetch("http://localhost:3000/news/group1");
        if (dados.ok) return dados.json();
    }

    static async listarGrupoAfrica() {
        const dados = await fetch("http://localhost:3000/news/grupoAfrica")
        if (dados.ok) return dados.json()
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

    static async grupoEntretenimento() {
        const noticias = await fetch("http://localhost:3000/news/grupoEntretenimento")
        if (noticias.ok)
            return noticias.json()
    }

    static async grupoMaisNoticias() {
        const noticias = await fetch("http://localhost:3000/news/grupoMaisNoticias")
        if (noticias.ok)
            return noticias.json()
    }

    static async cardMaisNoticias() {
        const noticias = await fetch("http://localhost:3000/news/cardMaisNoticias")
        if (noticias.ok)
            return noticias.json()
    }
}
export async function listarCategorias() {
    const resposta = await fetch("http://localhost:3000/news/categorias")
    if (resposta.ok)
        return resposta.json()
}
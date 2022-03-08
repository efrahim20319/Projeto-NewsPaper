export async function listarGrupoDeNoticias1() {
	const dados = await fetch("http://localhost:3000/news/group1");
	if (dados.ok) return dados.json();
}
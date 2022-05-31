import { listarCategorias } from "../services/categorias.js";
(function () {
  function CriarCategoria(categoria) {
    const conteudo = `${categoria.titulo}`;
    const option = document.createElement("option");
    option.setAttribute("value", categoria.id);
    option.innerHTML = conteudo;
    return option;
  }

  async function AdicionarCategorias() {
    const select = document.querySelector("#categoria");
    const categorias = await listarCategorias();

    categorias.forEach((categoria) => {
      select.appendChild(CriarCategoria(categoria));
    });
  }
  AdicionarCategorias();
})()
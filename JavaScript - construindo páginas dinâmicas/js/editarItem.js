import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        if (estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }

        // Atualiza data de criação para a data em que foi editado
        const dataDeCriacao = elemento.querySelector(".texto-data");
        dataDeCriacao.textContent = gerarDiaDaSemana();

    }
}
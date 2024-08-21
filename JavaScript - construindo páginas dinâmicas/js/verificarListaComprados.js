const containerListaComprados = document.getElementById("container-lista-comprados")

export function verificarListaComprados(lista) {

    if (lista.childElementCount === 0) {
        containerListaComprados.style.display = "none";
    } else {
        containerListaComprados.style.display = "block";
    }
}
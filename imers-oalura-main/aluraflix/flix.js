function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listaFilmesNaTela(filmeFavorito);
    } else {
        console.error("Endereço de filme inválido");
    }

    document.getElementById("filme").value = "";
}

function listaFilmesNaTela(filmeFavorito) {
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = 
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}
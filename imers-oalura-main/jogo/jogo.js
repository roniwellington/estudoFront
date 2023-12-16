var cartaPaulo = {
    nome: "Homem de Ferro",
    imagem: "https://www.cinehero.com.br/wp-content/uploads/2021/01/gggggg.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 2  
    }
};

var cartaRafa = {
    nome: "Dr. Destino",
    imagem: "https://i.pinimg.com/originals/63/c6/6c/63c66cb4a30362ec31051c1c908848db.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 10  
    }
};

var cartaGui = {
    nome: "Reed Richards",
    imagem: "https://ovicio.com.br/wp-content/uploads/2022/02/20220218-reed-01-ovicio-555x555.jpg",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 9 
    }
};

var cartaMaquina;
var cartaJogador;
var cartas = [cartaPaulo, cartaRafa, cartaGui];


function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador()
}


function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return  radioAtributo[i].value;
        }
    }
    
}

function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado =  document.getElementById("resultado");

    if(
        cartaJogador.atributos[atributoSelecionado] >
        cartaMaquina.atributos[atributoSelecionado]
        ) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
        cartaJogador.atributos[atributoSelecionado] <
        cartaMaquina.atributos[atributoSelecionado]
         ) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura =  '<img src="../img/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "" + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura =  '<img src="../img/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + "" + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}


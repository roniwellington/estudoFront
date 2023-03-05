const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

robotron.addEventListener("click", function(){
    console.log('Clique no robô');
});

function dizOi(nome) {
    console.log("oi" + nome);
    console.log("Bem-vindo ao Robotron 2000");
}

dizOi('Roni')
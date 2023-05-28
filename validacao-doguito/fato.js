let numero = parseInt(prompt("Digite um número inteiro para calcular o fatorial: "));
let resultado = 1;

if (numero === 0) {
  resultado = 1;
} else {
  for (let i = numero; i >= 1; i--) {
    resultado *= i;
  }
}

console.log("O fatorial de " + numero + " é: " + resultado);

let listaDeCompras = ['Arroz', 'Biscoito', 'Suco'];

const listaDeItens = {
    item1: 'biscoito',
    item2: 'Suco',
    quantidade1: 3,
    quantidade2: 4,
    mostrarItens: function() {
        alert('Comprei ' + listaDeItens.quantidade1 + ' pacotes de ' + listaDeItens.item1)
    }
}

listaDeItens.mostrarItens()
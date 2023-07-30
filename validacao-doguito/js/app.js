import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {

    if(input.dataset.static tipo = == 'preco'){
        SimpleMaskMoney.setMask(input,{
            prefix: '',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }
    
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

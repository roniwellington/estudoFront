const form = document.getElementById("novoItem")

form.addEventListener("submit", ()=> {
    Evento.preventDefault()

    console.log(Evento)
    console.log(Evento.target.elements['nome'].value)
    console.log(Evento.target.elements['quantidade'].value)
})



function newName() {
    var nome = window.prompt('Qual é o seu nome?')
    currentName = window.document.getElementById('footerName')
    currentName.innerText += `Olá ${nome}`
}
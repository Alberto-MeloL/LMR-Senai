var nome = window.prompt('Qual é o seu nome?')
function newName() {
    currentName = window.document.getElementById('footerName')
    currentName.innerText += `Olá ${nome}`
}
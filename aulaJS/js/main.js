function carregar() {
    var msg = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    // forçando a var hora = 20
    if (hora >= 0 && hora < 12) {
        //Bom dia 
        //Carregando a imagem
        imagem.src = './img/dia.jpg'
        window.document.body.style.background = '#529aec'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        window.document.body.style.background = 'rgb(255, 153, 105)'
        imagem.src = './img/tarde.jpg'
    } else {
        //Boa noite
        imagem.src = './img/noite.jpg'
        window.document.body.style.background = 'rgb(27, 37, 168)'
    }
}

// function newName() {
//     var nome = window.prompt('Qual é o seu nome?')
//     currentName = window.document.getElementById('footerName')
//     currentName.innerText += `Olá ${nome}`
// }
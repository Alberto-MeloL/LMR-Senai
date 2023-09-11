function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var resultado = window.document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = window.document.getElementsByName('radsex')//Pegando por nome
        var idade = ano - Number(fAno.value)
        var genero = ''
        //Criando uma tag img
        var img = window.document.createElement('img')//Criando foto dinamicamente
        img.setAttribute('id', 'foto')//Adicionando um id e nomeando como foto, mesmo que(img id="foto")
        if (fSex[0].checked) {//Como tem mais de um seleciona por indíce
            genero = 'Homem'
            if (idade >= 0 && idade <= 17) {
                //Crinça
                img.setAttribute('src', './img/homemCriança.jpg')
                window.document.body.style.background = 'rgb(27, 37, 168)'
                window.document.body.style = Selection(rgb(27, 37, 168))
            } else if (idade < 59) {
                //Adulto
                img.setAttribute('src', './img/homemAdulto.jpg')
                window.document.body.style.background = 'rgb(27, 37, 168)'
            } else if (idade > 59) {
                //Idoso 
                img.setAttribute('src', './img/homemVelho.jpg')
                window.document.body.style.background = 'rgb(27, 37, 168)'
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 17) {
                //Crinça
                img.setAttribute('src', './img/mulherCriança.jpg')
                window.document.body.style.background = '#671079'
            } else if (idade < 59) {
                //Adulto
                img.setAttribute('src', './img/mulherAdulta.jpg')
                window.document.body.style.background = '#671079'
            } else if (idade > 59) {
                //Idoso 
                img.setAttribute('src', './img/mulherVelha.jpg')
                window.document.body.style.background = '#671079'
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)//Ele vai adicionar abaixo
    }
}















// var ano = new Date();
// var anoAtual = ano.getFullYear();

// function verificar() {
//     window.alert('a')
//     let resultadoVerificado = window.document.getElementById('res');
//     let imagemPessoa = window.document.getElementById('imagem');
//     let anoNascimento = window.document.getElementById('anoDeNascimento');
//     let idade = Number(anoNascimento.value);
//     let sexo = window.document.getElementById("masculino, feminino");
//     let idadeAtual = idade - anoAtual;

//     if (sexo == 'masculino' || sexo == 'feminino' && idadeAtual >= 17) {
//         resultadoVerificado.innerHTML = `Você tem ${idadeAtual} anos.(${sexo})`
//         imagemPessoa.src = './img/homemCriança'
//     } else if (sexo == 'feminino' && idadeAtual <= 60) {

//     }
// }
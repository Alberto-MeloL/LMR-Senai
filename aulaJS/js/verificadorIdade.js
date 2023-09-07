var ano = new Date();
var anoAtual = ano.getFullYear();

function verificar() {
    let resultadoVerificado = window.document.getElementById('resultado');
    let imagemPessoa = window.document.getElementById('imagem');
    let anoNascimento = window.document.getElementById('anoDeNascimento');
    let idade = Number(anoNascimento.value);
    let sexo = window.document.getElementById("masculino, feminino");
    let idadeAtual = idade - anoAtual;
    
    if (sexo == 'masculino' || sexo == 'feminino' && idadeAtual >=17) {
resultadoVerificado.innerHTML = `Você tem ${idadeAtual} anos.(${sexo})`
        imagemPessoa.src = './img/homemCriança'
    }else if (sexo == 'feminino' && idadeAtual <=60) {
        
    }
}
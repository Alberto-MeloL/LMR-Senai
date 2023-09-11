function calculo() {
    var exibindoResultado = window.document.getElementById('resultado');
    var pontoInicial = window.document.getElementById('inicioConta');
    var pontoFinal = window.document.getElementById('finalConta');
    var pulando = window.document.getElementById('passo');
    var contaInicial = Number(pontoInicial.value);
    var contaFinal = Number(pontoFinal.value);
    var passo = Number(pulando.value);

    // Validando entradas
    if (pontoInicial.value == 0 || pontoFinal.value == 0 || pulando.value == 0) {
        alert("Por favor, preencha todos os campos corretamente para realizar a operação.");
        return; // Sair da função se houver erros de entrada
    }else if (pontoInicial.value > pontoFinal.value || pontoFinal.value < pontoInicial.value) {
        alert("ERRO de lógica, preencha os dados corretamente!")
    }

    // Limpando o conteúdo atual
    exibindoResultado.innerHTML = ".";

    // Gerando a sequência de números
    for (var i = contaInicial; i <= contaFinal; i += passo) {
        exibindoResultado.innerHTML += i + " > ";
    }
}

function reload() {
    window.location.reload();
}


//codigo anterior
/*function calculo() {
    var exibindoResultado = window.document.getElementById('resultado');
    var pontoInicial = window.document.getElementById('inicioConta');//número de inicio da conta(Ex:1)
    var pontoFinal = window.document.getElementById('finalConta');//número final da conta(Ex:10)
    var pulando = window.document.getElementById('passo');//pular de quantos a quantos(Ex:2 em 2)
    var contaInicial = Number(pontoInicial.value)
    var contaFinal = Number(pontoFinal.value)
    var passo = Number(pulando.value)
    
    //validações
    if (pontoInicial.value == 0 ) {
        alert("Por favor, preencha este campo corretamente. Para poder realizar a operação") 
    } 
     else if (pontoFinal.value == 0) {
        alert("Por favor, preencha este campo corretamente. Para poder realizar a operação") 
    } else if (pulando.value == 0) {
        alert("Por favor, preencha este campo corretamente. Para poder realizar a operação") 
    }

    //operando
for (contaInicial; contaInicial <= contaFinal; contaInicial = contaInicial += passo) {
    exibindoResultado.innerHTML = `${contaInicial.write}`
    //exibindoResultado = window.document.write(contaInicial)
}
}
   
function reload() {
   window.location.reload()
}*/

   



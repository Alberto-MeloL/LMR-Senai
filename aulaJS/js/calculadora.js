function calculo() {
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

if (contaInicial <= contaFinal) {
    contaInicial = contaInicial += passo  
    exibindoResultado.innerText = `Valor ${contaInicial}`
}else{
    for(;contaInicial <= contaFinal ; contaInicial = contaInicial += passo ){

        exibindoResultado.innerText += ` ${contaInicial} `
    
    }
}
}
   
  


   



function tabuada() {
  let num = window.document.getElementById('txtn')
  let tab = window.document.getElementById('seltab')

  //convertendo o valor
  if (num.value.length == 0) {
    window.alert('Por favor, preencha corretamente os dados acima.')
  }else{
    let n = Number(num.value)
    tab.innerHTML = ''
    for (let i = 1; i <=10;i++) {
    //criando um elemento de forma dinâmica
    let item = window.document.createElement('option')
    item.text = `${n} x ${i} = ${n*i}`
    //adicionando um elemento filho
    item.value = `tab${i}`//assim possibilitando selecionar dentro do select(Ex:tab, 1,2...)
    tab.appendChild(item)
    }
  }
 

}

// function tabuada(){
//     var num = Number(document.getElementById("num").value);
//     var resposta = document.getElementById('resposta');
//     var tabuada='';
  
//     for(var count=1; count<=10 ; count++)
//      tabuada += num+" x "+count+" = "+
//                  num*count+"<br />";
    
//     resposta.innerHTML = tabuada;
//   }
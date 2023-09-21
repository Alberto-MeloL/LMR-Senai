function adicionar() {
    var numbersInput = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    var resultado = window.document.getElementById('resultado')
    var n = Number(numbersInput.value)

    //validações
    if (n == 0 || isNaN(n)) {
        alert("O campo deve ser preenchido corretamente.Verifique se você digitou um número certo")
    } else if (n < 1 || n > 100) {
        alert("Por favor insira um número entre 1 e 100.")
    } else {
        // verificar se o número já existe
        var numeroNaLista = Array.from(tab.options).map(option => Number(option.value));
        if (numeroNaLista.includes(n)) {
            alert("Número já encontrado na lista.")
        } else {

            let option = window.document.createElement('option')//criando um novo elemento
            option.value = n
            option.text = n
            tab.appendChild(option) //adicionando os números ao elemento 'seltab'

            var soma = 0;//claculando a soma dos valores
            for (let i = 0; i < tab.options.length; i++) {
                soma += Number(tab.options[i].value)
            }

            var maiorValor = Math.max(...numeroNaLista, n);//encontrando o maior valor
            var menorValor = Math.min(...numeroNaLista, n)
            var media = numeroNaLista.length
            var mediaCalculada = soma / media //a ordem interfere no valor
            numbersInput.value = ''//limpando a caixa de texto
            numbersInput.focus() //deixa a input piscando, coloca um foco 

            //exibindo resultado
            // ao colocar += ele concatena os TextDecoder, se não colocar o innerWidth atualiza
            // e somente o ultimo é válido
            resultado.innerHTML = `Ao todo, temos ${numeroNaLista.length} cadastrados`
            resultado.innerHTML += `<br>O maior valor foi ${maiorValor} `
            resultado.innerHTML += `<br>O menor valor foi ${menorValor}`
            resultado.innerHTML += `<br>A soma total é ${soma}`
            resultado.innerHTML += `<br>A media entre ele é ${mediaCalculada}`

        }


    }

}

/*
Outra maneira de se fazer

let num = document.querySector(id aqui)
let lista = ducument.querySelctor(id aqui)
let resultado = documnet.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

    function adicionar(){
        if(isNumero(num.value) && !inLista(num.value, valores)){
            valores.push(Number(num.value))
            let item = ducument.creatElement('option')
            item.text = `Valor ${num.value} adicionado.`
            lista.appenChild(item)
            res.innerHTML = ''
        }else{
            window.alert('Valor inválido ou já se encontra na lista.')
        }
    }
num.value = ''
num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            if(valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]
        }
        res.innertHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor.</p>}`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
         res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    }
}
*/



// function exibirTexto() {
// else if (!isNaN(n)) {
//     alert("Digite apenas números!")
// }
// }
// let v[n]

//          //laço de repetição
//          for (let c = n; c == v.value; ) {
//              alert("Número já encontrado na lista.")
//              return
//     


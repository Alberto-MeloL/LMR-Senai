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

            var maiorValor = Math.max(...numeroNaLista.map(Number, n));//encontrando o maior valor
            numbersInput.value = ''//limpando a caixa de texto

            //exibindo resultados


            resultado.innerHTML = `Ao todo, temos ${numeroNaLista.length} cadastrados`
            resultado.innerHTML += `<br>O maior valor foi ${maiorValor} `
            resultado.innerHTML += `<br>A soma total é ${soma}`

        }


    }

}


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

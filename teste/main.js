var btn = document.getElementById('click');
var rst = document.getElementById('res');
var num = document.getElementById('n');

btn.addEventListener("click", function() {
    var inputNumber = parseInt(num.value); // Obter o valor do campo de entrada como um número inteiro

    var result = ''; // Inicializar uma string vazia para armazenar os resultados

    for (var i = inputNumber; i > 0; i--) {
        var square = i * i;
        result += `${square} `;
    }

    rst.innerText = result; // Atualizar o conteúdo do elemento 'res' com os resultados
});

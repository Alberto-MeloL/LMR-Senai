function finalizar() {
    let numbers = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    let numbersInset = []

    //validações
    if (numbers < 1 || numbers > 100) {
        alert("Por favor insira um número entre 1 e 100.")
    } else {
        let n = Number(numbers.value)
        if (n.length == 0) {
            alert("O campo deve ser preenchido!")
        }

    }
}

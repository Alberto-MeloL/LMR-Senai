function Verificando() {
    var paisDaPessoa = window.document.getElementById('paisDigitado')
    var resultado1 = window.document.getElementById('resultado')
    var pais2 = String(paisDaPessoa.value).toUpperCase().replace(/\s+/g, '')
    resultado1.innerHTML = `Você é do país ${pais2}`
    if (paisDaPessoa != 'BRASIL') {//tomar cuidado variavel e string += para concatenar
        resultado1.innerHTML += 'Você é estrangeiro!'
    }else{
        resultado1.innerHTML += 'Você é brasileiro!'
    }   
}

function Somar() {
    var tn1 = window.document.getElementById('textn1')
    var tn2 = window.document.querySelector('input#textn2')
    var result = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var soma = n1 + n2
    result.innerHTML = `A soma é ${soma}`
    result.style.background('green')
}
print('a')
//chat BOOT<==========================

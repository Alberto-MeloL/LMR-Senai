//usando um arry
let num = [5, 8, 4]
//         0  1  2  <--- indíce

//usando objeto

let amigo = {nome:'José', sexo:'M', peso:58.4, engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}
//sendo engordar uma function com um parametro (p)
//objeto pode guardar funcionalidades
//um array e um objeto sao estruturas de mesma origem
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
//R: José pesa 87.4 KG
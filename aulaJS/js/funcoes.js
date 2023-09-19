function parimp(n) { //n e o parametro(formal)
    if (n%2==0) { //resto da divisão por 2
        return 'par'
    }else{
        return 'impar' //uma função em JavaScript só pode conter um retorno
    } 
}
let res = parimp(11) //parimp e a chamada(11 parametro real)
console.log(res)

function soma(n1, n2) {//n1, n2 sao os parametros
    return  n1 + n2 //irá retornar os valores
    
}
console.log(soma(3, 9)) //dando um valor a eles(3 vai para o n1 e 9 para o n2)

function fatorial(a) {
    let fat = 1
    for (let c = a; c > 1; c--){
        fat*= c  
    }
    return fat
}

let resul = fatorial(5)
console.log(resul)

//recursividade
function fatorial1(b) {
    if (b == 1) {
        return 1 //pois 1 * 1 = 1
    }else{                                                      //e o mesmo que
        return b * fatorial1 (b-1)                              //5! = 5 * 4!
    }
}
console.log(fatorial1(5))
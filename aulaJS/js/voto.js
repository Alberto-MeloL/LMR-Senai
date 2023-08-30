var idade = 2
if (idade < 16) {
    console.log('Você não pode votar.Precisa ter no mínimo 16 anos.')
} else if(idade < 18 || idade > 65) {
    console.log('O seu voto é opcional.')
}else{
    console.log('Voto obrigatório.')
}
//RACIOCÍNIO LÓGICO, MENOR DE 16 NAO VOTA (NAO PRECISA COLOCAR <=16)
//MENOR QUE 18 VOTO OPCIONAL, PELA LOGOCA A CIMA MENOR QUE 16 NAO VOTA ENTAO FICA DOS 16 AOS 17 OPCIONAL
//E MAIOR DE IDADE VOTO OBRIGATÓRIO
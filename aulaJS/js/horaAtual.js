var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa trade!')
} else if (hora < 5) {
    console.log('Boa madrugada!')
} else {
    console.log('Boa noite!')
}


//CONDIÇÃO MÚLTIPLA
//O SWITCH É MUITO IMPORTANTE PARA TESTA DADOS PONTUAIS(SOMENTE STRINGS E CARACTERES)
//INTERVALOS O IF/ELSE
var diaSemana = new Date()
var diaAtual = diaSemana.getDay()
switch (diaAtual) {
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
    case 3:
        console.log('Quarta')
        break;
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sábado')
        break;
        default:
            console.log('ERRO. Dia inválido.')
        break;//Não esquecer do BREAK<=
}
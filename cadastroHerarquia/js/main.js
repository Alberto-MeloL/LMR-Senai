const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector("#nav-bar");

menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("menu-open");
});

var opcoes = window.document.getElementsByClassName(opcoesForm);
var motivo = window.document.querySelector(mtv);
var nome = window.document.querySelector(nomeCadastro);
var email = window.document.querySelector(emailCadastro);
var senha = window.document.querySelector(senhaCadastro);

//validações de cadastro e login

//Verificando se há campos vazios
if (nome.value.length == 0) {
    alert('Por favor preencha o campo "nome"')
}else if (email.value.length == 0) {
    alert('Por favor preencha o campo "email"')
}else if (senha.value.length == 0) {
    alert('Por favor preencha o campo "senha"')
}//vericando se os campos estao preenchidos corretamente
else if (nome.value.length == Number) {
    alert('O campo "nome" não pode conter números!')
}else if (email.value. == -1'@' ) {
    
}

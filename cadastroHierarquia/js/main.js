
//validações do formuarios de solicitações
var opcoes = window.document.getElementsByClassName("opcoesForm");
var motivo = window.document.querySelector("#mtv");


//validações de login
var email = window.document.querySelector("#email");
var senha = window.document.querySelector("#senha");

//verificando se os campos foram preenchidos corretamente

if (senha.value.length === 0 || senha.value.length === null) {
    alert('Por favor preencha o campo senha corretamente!')
}


//validações de cadastro
var nome = window.document.querySelector("#nomeCadastro");


// função para esconder a div de cadastro
function mudarDiv(mdDiv) {
    var divCadastro = document.getElementById(mdDiv);
    var display = divCadastro.style.display;

    if (display === "none" || display === "") {
        divCadastro.style.display = 'block';
        cadastrarMeButton.value = "Voltar";
    } else {
        divCadastro.style.display = 'none';
        cadastrarMeButton.value = "Cadastrar-me";
    }
}

// Adicione um ouvinte de evento ao botão "Cadastrar-me"
document.addEventListener("DOMContentLoaded", function () {
    var cadastrarMeButton = document.getElementById("cadastrar-me-button");

    if (cadastrarMeButton) {
        cadastrarMeButton.addEventListener("click", function () {
            mudarDiv("cadastrar-me");
        });
    }
});



/*https://encurtador.com.br*/
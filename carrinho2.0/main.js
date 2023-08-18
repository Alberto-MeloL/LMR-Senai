const addButtonList = document.querySelectorAll(".adicionar");
const carrinhoUl = document.querySelector(".carrinho");
const finalizarButton = document.querySelector(".finalizar");
const totalSpan = document.querySelector(".total");

const produtos = {
    "Item 1": 10,
    "Item 2": 15
};

let carrinho = {};

addButtonList.forEach(button => {
    button.addEventListener("click", () => {
        const produto = button.getAttribute("data-produto");
        adicionarAoCarrinho(produto);
    });
});

finalizarButton.addEventListener("click", () => {
    finalizarCompras();
});

function adicionarAoCarrinho(produto) {
    if (produto in carrinho) {
        carrinho[produto].quantidade++;
    } else {
        carrinho[produto] = { quantidade: 1, preco: produtos[produto] };
    }

    atualizarCarrinho();
}

function finalizarCompras() {
    carrinho = {};
    atualizarCarrinho();
    alert("Compra finalizada! O carrinho foi esvaziado.");
}

function atualizarCarrinho() {
    carrinhoUl.innerHTML = "";

    let total = 0;

    for (const produto in carrinho) {
        const item = carrinho[produto];
        total += item.quantidade * item.preco;

        const newItem = document.createElement("li");
        newItem.textContent = `${produto} x ${item.quantidade} - R$${item.quantidade * item.preco}`;

        carrinhoUl.appendChild(newItem);
    }

    totalSpan.textContent = `Total: R$${total.toFixed(2)}`;
}
function finalizarCompras() {
    carrinhoUl.innerHTML = "";
    alert("Compra finalizada! O carrinho foi esvaziado.");
}
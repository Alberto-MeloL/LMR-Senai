const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

let cart = [];
let total = 0;

function renderCart() {
    cartItems.innerHTML = '';
    for (const item of cart) {
        const listItem = document.createElement('li');
        listItem.classList.add('item');
        listItem.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">$${item.price.toFixed(2)}</span>
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <button class="remove-button" data-index="${item.index}">Remover</button>
        `;
        cartItems.appendChild(listItem);
    }
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

function addToCart(name, price, image) {
    cart.push({ name, price, image, index: cart.length });
    total += price;
    renderCart();
}

function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    total -= removedItem.price;
    renderCart();
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.product-card');
        const name = card.getAttribute('data-name');
        const price = parseFloat(card.getAttribute('data-price'));
        const image = card.getAttribute('data-image');
        addToCart(name, price, image);
    });
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) {
        const index = parseInt(event.target.getAttribute('data-index'));
        removeFromCart(index);
    }
});

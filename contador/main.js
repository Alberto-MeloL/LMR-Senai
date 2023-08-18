const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

let counterValue = 0;

function updateCounter() {
    counterElement.textContent = counterValue;
}

incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
});

updateCounter(); // Inicialização do contador na página

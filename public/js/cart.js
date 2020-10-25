
const cartPanel = document.querySelector('#cart-panel');
const cartOverlay = document.querySelector('#overlay');
const cartBody = document.querySelector('#body');
const cartClose = document.querySelector('#close-cart-panel');

document.querySelectorAll('.cart').forEach(cart => {
    cart.addEventListener('click', event => {
        cartOverlay.classList.remove('hidden');
        cartBody.classList.add('overflow-hidden');
        cartPanel.classList.remove('translate-x-full');
        cartPanel.classList.add('-translate-x-0');
    });
});


cartOverlay.addEventListener('click', event => {
    cartOverlay.classList.add('hidden');
    cartBody.classList.remove('overflow-hidden');
    cartPanel.classList.remove('-translate-x-0');
    cartPanel.classList.add('translate-x-full');
});

cartClose.addEventListener('click', event => {
    cartOverlay.classList.add('hidden');
    cartBody.classList.remove('overflow-hidden');
    cartPanel.classList.remove('-translate-x-0');
    cartPanel.classList.add('translate-x-full');
})
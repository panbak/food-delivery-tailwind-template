
const orderPanel = document.querySelector('#order-panel');
const orderOverlay = document.querySelector('#overlay');
const orderBody = document.querySelector('#body');
const orderClose = document.querySelector('#close-order-panel');

document.querySelectorAll('.order').forEach(order => {
    order.addEventListener('click', event => {
        orderOverlay.classList.remove('hidden');
        orderBody.classList.add('overflow-hidden');
        orderPanel.classList.remove('translate-x-full');
        orderPanel.classList.add('-translate-x-0');
    });
});


orderOverlay.addEventListener('click', event => {
    orderOverlay.classList.add('hidden');
    orderBody.classList.remove('overflow-hidden');
    orderPanel.classList.remove('-translate-x-0');
    orderPanel.classList.add('translate-x-full');
});

orderClose.addEventListener('click', event => {
    orderOverlay.classList.add('hidden');
    orderBody.classList.remove('overflow-hidden');
    orderPanel.classList.remove('-translate-x-0');
    orderPanel.classList.add('translate-x-full');
})
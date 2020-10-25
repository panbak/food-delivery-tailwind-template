
const sidePanel = document.querySelector('#side-panel');
const overlay = document.querySelector('#overlay');
const body = document.querySelector('#body');
const close = document.querySelector('#close-side-panel');

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', event => {
        overlay.classList.remove('hidden');
        body.classList.add('overflow-hidden');
        sidePanel.classList.remove('translate-x-full');
        sidePanel.classList.add('-translate-x-0');
    });
});

overlay.addEventListener('click', event => {
    overlay.classList.add('hidden');
    body.classList.remove('overflow-hidden');
    sidePanel.classList.remove('-translate-x-0');
    sidePanel.classList.add('translate-x-full');
});

close.addEventListener('click', event => {
    overlay.classList.add('hidden');
    body.classList.remove('overflow-hidden');
    sidePanel.classList.remove('-translate-x-0');
    sidePanel.classList.add('translate-x-full');
})
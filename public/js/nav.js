const opener = document.getElementById('open-menu');
const menu = document.getElementById('menu');

opener.addEventListener('click', function () {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
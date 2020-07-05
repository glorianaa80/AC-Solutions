const list = document.getElementById('link');
const menueLevel = document.getElementById('accordion');

function accordion() {
    if (list) {
        menueLevel.classList.remove('esconde');
        menueLevel.classList.add('muestra');
    } else {
        menueLevel.classList.remove('muestra');
        menueLevel.classList.add('esconde');
        console.log('hola no ');
    }
}
list.addEventListener('click', accordion);
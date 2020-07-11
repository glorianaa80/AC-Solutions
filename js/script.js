// const list = document.getElementById('link');
// const menueLevel = document.getElementById('accordion');

// function accordion() {
//     if (list) {
//         menueLevel.classList.remove('esconde');
//         menueLevel.classList.add('muestra');
//     } else {
//         menueLevel.classList.remove('muestra');
//         menueLevel.classList.add('esconde');
//         console.log('hola no ');
//     }
// }
// list.addEventListener('click', accordion);
function classChange() {
    let siteNav = document.getElementById('site-nav');
    let menuOpen = document.getElementById('menu-toggle');
    siteNav.classList.toggle('site-nav-open');
    menuOpen.classList.toggle('menu-open')
}
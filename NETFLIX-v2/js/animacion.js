const menu = document.getElementById('menu');

window.addEventListener('scroll', () => {
    if (window.scroll >= 100) {
        menu.classList.add(menu_black)
        
    }
    else {
        menu.classList.remove('menu_black')
    }
})
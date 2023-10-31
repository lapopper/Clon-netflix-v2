
const nav = document.getElementByI('nav2');

window.addEventListener('scroll', () => {
    if (window.scrollY >=100 ) {
        nav.classList.add('nav-black')
        
    }
    else {
        nav.classList.remove('nav-black')
    }
})
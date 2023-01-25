const navbar= document.getElementById('navbar')
const navbarCloseButton = document.querySelector('.nav__close_button')

function openMenu(){
    navbar.style.display = 'flex'
}

function closeMenu(){
    navbar.style.display = 'none'
}
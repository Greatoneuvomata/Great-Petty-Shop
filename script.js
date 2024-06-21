let LoginForm = document.querySelector('.header .login-form');
let navbar = document.querySelector('.header .navbar');

document.querySelector('#login-btn').onclick = () => {
    LoginForm.classList.toggle('active')
}

// Toggle Nav bar

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}
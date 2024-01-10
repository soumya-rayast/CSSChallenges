const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link')
const btn = document.querySelector('.btn-login')
const btnclose = document.querySelector('.icon-close')

registerLink.addEventListener('click', ()=>{
    container.classList.add('active')
})
loginLink.addEventListener('click', ()=>{
    container.classList.remove('active')
})
btn.addEventListener('click', ()=>{
    container.classList.add('active-btn')
})
btnclose.addEventListener('click', ()=>{
    container.classList.remove('active-btn')
})
let ham = document.querySelector('.hamburger');
let ul = document.querySelector('.nav-list ul');
let btn = document.querySelector('.nav-button');

ham.addEventListener('click', ()=>{
    ul.classList.toggle('responsive');
    btn.classList.toggle('responsive');
})
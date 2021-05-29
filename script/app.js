const bar = document.querySelector('.bar');
const close = document.querySelector('#close');
const header = document.querySelector('header');

bar.addEventListener('click',e=>{
    header.classList.add('sticky');
})
close.addEventListener('click',e=>{
    header.classList.remove('sticky');
})
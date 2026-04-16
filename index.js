const btn = document.getElementById('btn_mobile')
const nav = document.getElementById('nav_bar')

btn.addEventListener('click', () =>{
    nav.classList.toggle('mostrar');
    btn.classList.toggle('mostrar');
});

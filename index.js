const btn = document.getElementById('btn_mobile');
const nav = document.getElementById('nav_bar');
const overlay = document.getElementById('overlay');

/* Toggle menu */
btn.addEventListener('click', () => {
    nav.classList.toggle('mostrar');
    btn.classList.toggle('active');
    overlay.classList.toggle('active');
});

/* Fechar menu ao clicar overlay */
overlay.addEventListener('click', () => {
    nav.classList.remove('mostrar');
    btn.classList.remove('active');
    overlay.classList.remove('active');
});

/* Apenas fecha menu (SEM bloquear link) */
document.querySelectorAll('#nav_bar a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('mostrar');
        btn.classList.remove('active');
        overlay.classList.remove('active');
    });
});
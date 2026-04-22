const btn = document.getElementById('btn_mobile');
const nav = document.getElementById('nav_bar');

/* Abrir/fechar menu */
btn.addEventListener('click', () => {
    nav.classList.toggle('mostrar');
    btn.classList.toggle('active');
});

/* Fechar menu ao clicar num link (sem interferir na navegação) */
document.querySelectorAll('#nav_bar a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('mostrar');
        btn.classList.remove('active');
    });
});
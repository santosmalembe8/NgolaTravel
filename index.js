const btn = document.getElementById('btn_mobile');
const nav = document.getElementById('nav_bar');
const overlay = document.getElementById('overlay');

/* Abrir/fechar menu */
btn.addEventListener('click', () => {
    nav.classList.toggle('mostrar');
    btn.classList.toggle('active');
    overlay.classList.toggle('active');
});

/* Fechar ao clicar no overlay */
overlay.addEventListener('click', () => {
    nav.classList.remove('mostrar');
    btn.classList.remove('active');
    overlay.classList.remove('active');
});

/* Corrigir links do menu */
document.querySelectorAll('#nav_bar a').forEach(link => {
    link.addEventListener('click', (e) => {
        const url = link.getAttribute('href');

        // Se for link real
        if (url && url !== "#") {
            e.preventDefault(); // impede bug do overlay

            // Fecha o menu
            nav.classList.remove('mostrar');
            btn.classList.remove('active');
            overlay.classList.remove('active');

            // Navega depois da animação
            setTimeout(() => {
                window.location.href = url;
            }, 250);
        }
    });
});
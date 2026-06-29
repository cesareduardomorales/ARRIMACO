// Scroll suave al hacer clic en los links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Botón de presupuesto
document.querySelector('.btn').addEventListener('click', function() {
    alert('Pronto podrás solicitar presupuesto aquí');
});

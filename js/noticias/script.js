document.addEventListener('DOMContentLoaded', function() {
    const newsLinks = document.querySelectorAll('.news-link');

    newsLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const href = this.getAttribute('href');

            // Adicionar uma classe para transição suave
            document.body.style.opacity = '0';

            // Redirecionar após um pequeno atraso para que a transição seja visível
            setTimeout(function() {
                window.location.href = href;
            }, 1000); // Tempo em milissegundos
        });
    });
});

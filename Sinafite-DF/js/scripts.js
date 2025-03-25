document.addEventListener('DOMContentLoaded', () => {
    // -- Acessibilidade: Controle de fonte e contraste
    const accessibilityButtons = document.querySelectorAll('.accessibility-btn');
    let fontSize = 16;

    accessibilityButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const action = button.dataset.action;

            if (action === 'increase-font') {
                fontSize += 2;
                document.body.style.fontSize = `${fontSize}px`;
            } else if (action === 'decrease-font') {
                fontSize = Math.max(12, fontSize - 2);
                document.body.style.fontSize = `${fontSize}px`;
            } else if (action === 'toggle-contrast') {
                document.body.classList.toggle('high-contrast');
            }
        });
    });

    // -- Botão Voltar ao Topo --
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // -- Placeholder para feed do Instagram -- (requer API externa)
    const instagramFeed = document.getElementById('feed-instagram');
    // -- Exemplo: instagramFeed.innerHTML = '<p>Carregando feed...</p>'; implementar depois --!
});
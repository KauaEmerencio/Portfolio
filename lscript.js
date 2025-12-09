document.addEventListener('DOMContentLoaded', () => {
    const date = new Date();
    const year = date.getFullYear();
    const diaMes = date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
    });
    const rodapeTexto = document.querySelector('.rodape-texto');
    if (rodapeTexto) {
        rodapeTexto.innerHTML = `© ${year} Dev Kauã. Todos os direitos reservados. ${diaMes}`;
    }
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.innerHTML = year;
    }
    const elementos = document.querySelectorAll('.revelar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ativo');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 
    });

    elementos.forEach(el => observer.observe(el));
});

function enviarWhats(event) {
    event.preventDefault(); 
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5579998107310'; 
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar a mensagem.');
        return;
    }
    const texto = `Olá, Kauã!👨‍💻 Tudo bem??` +
                  `Nome: ${nome}\n` +
                  `Email: ${email}\n` +
                  `Mensagem: ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
        window.open(url, '_blank');
 document.getElementById('nome').value = '';
document.getElementById('email').value = '';
document.getElementById('mensagem').value = '';
}

/*
git add . ; git commit -m "Atualizando tudo" ; git push
*/

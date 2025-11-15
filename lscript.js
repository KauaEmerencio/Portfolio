const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

const diaMes = date.toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: '2-digit',
});

const rodapeTexto = document.querySelector('.rodape-texto');

rodapeTexto.innerHTML = `© ${year} Dev Kauã. Todos os direitos reservados. ${diaMes}`;


document.getElementById("year").innerHTML = year;
function enviarWhats(event){
event.preventDefault();

const nome= document.getElementById('nome').value;
const email =document.getElementById('email').value;
const mensagem = document.getElementById('mensagem').value;
let telefone = '5579998107310'
if (!nome || !email || !mensagem){
    alert('Por favor, preencha todos os campos antes de enviar a mensagem.');
    return;
}

const texto = `Olá, meu nome é ${nome}, ${email}, estou entrando em contato atraves do seu portfolio  ${mensagem}`
const msgFormatada = encodeURIComponent(texto);
const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
console.log(url);
window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.revelar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ativo');
                
            }
        });
    }, {
        threshold: 0.2 
    });

    elementos.forEach(el => observer.observe(el));
});

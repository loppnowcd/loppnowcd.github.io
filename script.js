// referências aos elementos HTML
const container = document.getElementById('image-container');
const mainPhoto = document.getElementById('main-photo');

// lista de fotos que serão exibidas em sequência
// importante: certificar-se de que os nomes dos arquivos estão corretos
const photos = [
    'imagens/image2purplesky.jpeg',
    'imagens/image3greenleaves.jpeg',
    'imagens/image8coding.jpg',
    'imagens/image4redcar.jpeg',
    'imagens/image6blueheeler.jpeg',
    'imagens/image7coding.jpeg',
    'imagens/image5zodiac.jpg',
];

let intervalId; // variavel para armazenar o ID do temporizador (para poder parar depois)
let photoIndex = 0; // Índice da foto atual na lista

// Nome da foto inicial que você quer que apareça quando o mouse for retirado
const initialPhoto = 'imagens/image1end.jpeg';

// Função para iniciar a sequência de fotos ao passar o mouse
function startSequence() {
    // Se o temporizador já estiver rodando, não faz nada para evitar bugs
    if (intervalId) return;

    // Reseta o índice para começar da primeira foto da sequência (foto-b)
    photoIndex = 0;

    // Inicia o temporizador que roda a cada 200ms (0.2s)
    intervalId = setInterval(() => {
        // Altera o 'src' da imagem para a próxima foto da lista
        mainPhoto.src = photos[photoIndex];

        // Incrementa o índice. Se chegar ao fim da lista, ele volta para o início.
        photoIndex = (photoIndex + 1) % photos.length;
        
    }, 400); // 400 milissegundos = 0.4 segundos
}

// Função para parar a sequência e voltar para a foto inicial ao retirar o mouse
function stopSequence() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }

    // Aguarda um tempo com a última imagem da sequência
    setTimeout(() => {
        // Troca para a imagem inicial (sua foto)
        mainPhoto.src = initialPhoto;

        // Depois de um pequeno delay, aplica o efeito de flash
        setTimeout(() => {
            mainPhoto.classList.add('flash-effect');

            // Remove o flash após a animação
            setTimeout(() => {
                mainPhoto.classList.remove('flash-effect');
            }, 400); // Duração do flash

        }, 50); // Um pequeno atraso para dar tempo de a imagem carregar
    }, 400); // Espera após o mouse sair
}

// Eventos de mouse para o contêiner
container.addEventListener('mouseenter', startSequence);
container.addEventListener('mouseleave', stopSequence);

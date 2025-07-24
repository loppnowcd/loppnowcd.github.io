function stopSequence() {
    // Limpa o temporizador, se ele estiver rodando
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null; // Zera a variável para que a próxima entrada de mouse possa iniciar um novo temporizador
    }

    // AQUI ESTÁ A LINHA CRUCIAL:
    // Volta a exibir a foto inicial ('foto-a.jpg')
    mainPhoto.src = initialPhoto;
}

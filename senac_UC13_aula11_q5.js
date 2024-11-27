function jogoAdivinhacao() {
    const numeroCorreto = Math.floor(Math.random() * 10) + 1;
    
    console.log("Bem-vindo ao jogo de adivinhação!");
    console.log("Tente adivinhar o número entre 1 e 10.");
    console.log('Digite "sair" a qualquer momento para encerrar o jogo.');

    let acerto = false;

    while (!acerto) {
        let tentativa = prompt("Qual é o seu palpite?");
        
        if (tentativa.toLowerCase() === "sair") {
            console.log("Você escolheu sair. Até a próxima!");
            break;
        }

        tentativa = parseInt(tentativa, 10);
        
        if (isNaN(tentativa)) {
            console.log("Por favor, insira um número válido entre 1 e 10 ou digite 'sair'.");
        } else {
            if (tentativa === numeroCorreto) {
                console.log("Parabéns! Você acertou o número!");
                acerto = true;
            } else {
                console.log("Errado! Tente novamente.");
            }
        }
    }
}

jogoAdivinhacao();

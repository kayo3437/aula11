function calcularMediaAlunos() {
    const alunos = [
      { nome: "Kayo", notas: [7, 8, 9] },
      { nome: "Bruno", notas: [6, 5, 8] },
      { nome: "Pedro", notas: [10, 9, 7] }
    ];
  
    for (let i = 0; i < alunos.length; i++) {
      let soma = 0;
      for (let j = 0; j < alunos[i].notas.length; j++) {
        soma += alunos[i].notas[j];
      }
      const media = soma / alunos[i].notas.length;
      console.log(`${alunos[i].nome} - Média: ${media.toFixed(2)}`);
    }
  }
  
  calcularMediaAlunos();
  
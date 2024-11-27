
# Resolução dos Exercícios - Kayo Fernando

---

## Questão 1: Gerenciar uma Lista de Tarefas

```javascript
/**
 * Gerencia uma lista de tarefas.
 *
 * Cria uma lista de tarefas, adiciona três tarefas, remove a última e exibe o resultado no console.
 */
function gerenciarTarefas() {
  /**
   * Lista de tarefas.
   * @type {string[]}
   */
  let tarefas = [];

  // Adicionar três tarefas
  tarefas.push("Comprar pão");
  tarefas.push("Estudar JavaScript");
  tarefas.push("Fazer exercícios");

  // Remover a última tarefa
  tarefas.pop();

  // Exibir o array final
  console.log("Lista final de tarefas:", tarefas);
}

gerenciarTarefas();
```

---

## Questão 2: Gerenciar um Estoque

```javascript
/**
 * Gerencia um estoque de produtos.
 *
 * Cria e atualiza o estoque, exibindo o número total de itens.
 */
function gerenciarEstoque() {
  /**
   * Estoque inicial.
   * @type {string[]}
   */
  let estoque = ["Maçã", "Banana", "Laranja", "Pera"];

  // Atualizar o segundo item no estoque
  estoque[1] = "Morango";

  // Exibir o número total de itens
  console.log("Número total de itens no estoque:", estoque.length);
}

gerenciarEstoque();
```

---

## Questão 3: Calcular Médias de Alunos

```javascript
/**
 * Calcula e exibe a média das notas de alunos.
 *
 * Armazena as notas em um array aninhado e calcula a média de cada aluno.
 */
function calcularMediaAlunos() {
  /**
   * Notas dos alunos.
   * @type {number[][]}
   */
  const alunos = [
    [7, 8, 9],
    [6, 5, 8],
    [10, 9, 7]
  ];

  for (let i = 0; i < alunos.length; i++) {
    const notas = alunos[i];
    let soma = 0;

    for (let j = 0; j < notas.length; j++) {
      soma += notas[j];
    }

    const media = soma / notas.length;
    console.log(`Aluno ${i + 1} - Média: ${media.toFixed(2)}`);
  }
}

calcularMediaAlunos();
```

---

## Questão 4: Exibir Palavras em Ordem Reversa

```javascript
/**
 * Exibe palavras em ordem reversa.
 *
 * @param {string[]} palavras Lista de palavras a ser exibida.
 */
function exibirPalavrasReverso(palavras) {
  for (let i = palavras.length - 1; i >= 0; i--) {
    console.log(palavras[i]);
  }
}

exibirPalavrasReverso(["homem", "livro", "código", "javascript", "professor"]);
```

---

## Questão 5: Jogo de Adivinhação

```javascript
/**
 * Jogo de adivinhação.
 *
 * Pede ao usuário para adivinhar um número entre 1 e 10 até acertar ou digitar "sair".
 */
function jogoAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let tentativa;

  while (true) {
    tentativa = prompt("Adivinhe um número entre 1 e 10 ou digite 'sair' para encerrar:");

    if (tentativa.toLowerCase() === "sair") {
      console.log("Você saiu do jogo. Até a próxima!");
      break;
    }

    if (Number(tentativa) === numeroSecreto) {
      console.log("Parabéns! Você acertou!");
      break;
    } else {
      console.log("Tente novamente!");
    }
  }
}

jogoAdivinhacao();
```

//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// trabalhar com arrays, ciclos de repetições, listas

let amigos = [];

// Implementa uma função para agregar amigos
function adicionarAmigo() {
    let campoNome = document.getElementById('amigo'); // Tarefa 1: Capturar o valor do campo de entrada.
    let nomeAmigo = campoNome.value;

    if (nomeAmigo.trim() === '') { // Tarefa 2: Validar a entrada. obs: .trim remove espaços extras
        alert("Por favor, insira um nome válido."); //Se estiver vazio, exiba um alerta.
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Nome já inserido.");
        return;
    }

    amigos.push(nomeAmigo); // Tarefa 4: Atualizar o array de amigos.
    console.log(amigos);
    limparCampo(); // Tarefa 5: Limpar o campo de entrada.
    atualizarExibicaoDosAmigos();
}

function limparCampo() {
    campoNome = document.getElementById('amigo');
    campoNome.value = '';
}

// Implementa uma função para atualizar a lista de amigos.
function atualizarExibicaoDosAmigos() {
    // Tarefa 1: Obter o elemento da lista.
    let listaDeAmigosNaTela = document.getElementById('listaAmigos');

    // Tarefa 2: Limpar a lista existente para evitar duplicados.
    listaDeAmigosNaTela.innerHTML = '';

    // Tarefa 3: Percorrer o array de amigos, usando loop.
    for (let amigo of amigos) {
        // Tarefa 4: Adicionar cada amigo como um novo elemento <li> na lista.
        // O '+=' vai adicionando um '<li>' para cada nome do array.
        listaDeAmigosNaTela.innerHTML += `<li>${amigo}</li>`;
    }
}

// Implementa uma função para sortear os amigos
function sortearAmigo() {
    // Tarefa 1: Validar que há amigos disponíveis
    // Para um sorteio de amigo secreto, precisamos de pelo menos 3 pessoas.
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos para o sorteio!');
        return; // Para a execução da função
    }

    // Tarefa 2: Gerar um índice aleatório
    // Math.random() gera um número entre 0 e 1 (ex: 0.123)
    // Multiplicamos pelo tamanho do array para que o número vá de 0 até o tamanho do array (ex: 0 a 2.99 se tiver 3 amigos)
    // Math.floor() arredonda para baixo, resultando em um índice válido (0, 1, 2 ou 3)
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Tarefa 3: Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Tarefa 4: Mostrar o resultado
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
}
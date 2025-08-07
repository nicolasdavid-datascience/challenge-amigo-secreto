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
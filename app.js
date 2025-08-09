//Minha variável principal
let nomesDosAmigos = [];

function adicionarAmigo() {
  //Capturar o valor do campo de entrada
  const campo = document.getElementById("amigo");
  const nome = campo.value.trim();

  //Validar a entrada
  if (nome === "") {
    //Exibir mensagem de erro
    alert("Por favor, insira um nome.");
    return; // para a execução aqui se estiver vazio
  }

  //Atualizar o array de amigos
  nomesDosAmigos.push(nome);
  listarAmigos(); // <- chama aqui pra atualizar a lista na tela

  console.log(`Nome adicionado: ${nomesDosAmigos}`);

  //Limpar o campo de entrada
  campo.value = "";
}
function listarAmigos() {
  //Capturar o elemento de lista
  const lista = document.getElementById("listaAmigos");

  //Limpar a Lista atual
  lista.innerHTML = "";

  //Adicionar cada amigo à lista
  nomesDosAmigos.forEach((amigo) => {
    const item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  document.getElementById("listaAmigos").innerHTML = "";
  
  //Verificar se há amigos para sortear
  if (nomesDosAmigos.length === 0) {
    alert("Nenhum amigo para sortear.");
    return;
  }

  //Sortear um amigo aleatoriamente
  const indiceAleatorio = Math.floor(Math.random() * nomesDosAmigos.length);
  const amigoSorteado = nomesDosAmigos[indiceAleatorio];

  //Exibir o amigo sorteado
  document.getElementById("resultado").textContent = `O amigo secreto escolhido foi: ${amigoSorteado}`;
}

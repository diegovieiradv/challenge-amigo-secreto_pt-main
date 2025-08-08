let nomesDosAmigos = [];

function adicionarAmigo() {
  const nome = document.getElementById("amigo").value;
  nomesDosAmigos.push(nome);
  console.log(`Nome adicionado: ${nomesDosAmigos}`);
}

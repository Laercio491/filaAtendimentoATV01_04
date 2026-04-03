
const minhaFila = new Fila(5);
function adicionarElemento() {
  const nome = document.getElementById("txtnovoNome");
  const cpf = document.getElementById("txtnovoCPF");
  const data = obterDataAtual();
  const hora = obterHoraAtual();
  const novoElemento = new Atendimento(nome.value, cpf.value, data, hora);

  if (minhaFila.enqueue(novoElemento)) {
    mostrarFila(); // mostrar a fila
    nome.value = ""; // clear input
    cpf.value = ""; // clear input
    nome.focus();
  } else {
    alert("Fila cheia!");
  }
}

function mostrarFila() {
  const filaElemento = document.getElementById("listFila");
  filaElemento.innerHTML = "";
  for (let item of minhaFila) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    filaElemento.appendChild(listItem);
  }
}

function removerElemento() {
  let removido = minhaFila.dequeue();
  let msg = document.getElementById("mensagem-remocao");
  localStorage.setItem('ultimoAtendido', removido.nome);
  if (removido === null)
    alert("Fila vazia");
  else {
    msg.innerHTML="Atendendo: "+removido.nome+", hora de entrada: "+removido.hora+" Hora de atendimento"+obterHoraAtual()+" Ficou "+calcularDiferencaHoras(removido.hora,obterHoraAtual());
    mostrarFila();
  }

}

function buscarElemento() {
  const busca = document.getElementById("txtnovoCPF");
  let cont=0;
  let encontrado = false;
  for (let atendimento of minhaFila) {
    cont++;
    if (busca.value === atendimento.cpf) {
      encontrado = true;
    }
  }
  if (!encontrado) {
    alert("Pessoa não está na fila");
  } else {
    alert("Encontrado na fila, posição: "+cont);
  }

}// fim funcao busca




function atualizarUltimoAtendimento() {
    const ultimo = localStorage.getItem('ultimoAtendido');

    if(ultimo)
        document.getElementById('ultimoAtendimento').textContent=ultimo;
}
localStorage.clear();
atualizarUltimoAtendimento();
setInterval(atualizarUltimoAtendimento,1000);
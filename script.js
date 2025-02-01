let nomes = [];

function adicionarNome() {
    let input = document.getElementById("nomeInput");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    nomes.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaNomes");
    lista.innerHTML = "";
    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Erro: Nenhum amigo inserido! Adicione pelo menos um nome antes de sortear.");
        return;
    }
    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById("resultado").textContent = "🎊 Amigo Secreto: " + sorteado + " 🎊";
}
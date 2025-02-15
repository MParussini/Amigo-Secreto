const nomes = [];

        function adicionarAmigo() {
            const input = document.getElementById("amigo");
            const nome = input.value.trim();

            if (nome === "") {
                alert("Digite um nome válido.");
                return;
            }

            if (nomes.length >= 5) {
                alert("Você só pode adicionar até 5 nomes.");
                return;
            }

            nomes.push(nome);
            input.value = ""; // Limpa o campo após adicionar o nome
            atualizarListaNomes();
        }

        function atualizarListaNomes() {
            const lista = document.getElementById("nomesLista");
            lista.innerHTML = "";
            nomes.forEach(nome => {
                const li = document.createElement("li");
                li.textContent = nome;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (nomes.length === 0) {
                alert("Nenhum nome foi inserido para o sorteio.");
                return;
            }
            const indiceSorteado = Math.floor(Math.random() * nomes.length);
            const nomeSorteado = nomes[indiceSorteado];
            document.getElementById("resultado").innerText = "Nome sorteado: " + nomeSorteado;

            
        }
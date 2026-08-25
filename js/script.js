const pesquisa = document.getElementById("pesquisa");
const carros = document.querySelectorAll(".carro");


// ==========================
// Pesquisa dos Hot Wheels
// ==========================

pesquisa.addEventListener("input", function () {

    const textoPesquisa = pesquisa.value.toLowerCase();

    carros.forEach(function (carro) {

        const nomeCarro = carro
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (nomeCarro.includes(textoPesquisa)) {
            carro.style.display = "block";
        } else {
            carro.style.display = "none";
        }

    });

});


// ==========================
// API externa
// ==========================

const botaoApi = document.getElementById("carregar-api");
const resultadoApi = document.getElementById("resultado-api");

botaoApi.addEventListener("click", async function () {

    // Mensagem enquanto os dados são carregados
    resultadoApi.innerHTML = "<p>Carregando veículos...</p>";

    try {

        // Requisição para a API
        const resposta = await fetch(
            "https://fleetcatalog.disturbingbyte.pt/v1/makes?pageSize=10"
        );

        // Verifica se ocorreu algum erro
        if (!resposta.ok) {
            throw new Error("Erro ao carregar os dados da API.");
        }

        // Converte a resposta para JSON
        const dados = await resposta.json();

        // Limpa a mensagem de carregamento
        resultadoApi.innerHTML = "";


        // Cria um card para cada marca recebida
        dados.items.forEach(function (marca) {

            const card = document.createElement("article");

            card.classList.add("carro-api");

            card.innerHTML = `
                <h3>${marca.name}</h3>
                <p>Marca de veículo</p>
            `;

            resultadoApi.appendChild(card);

        });

    } catch (erro) {

        resultadoApi.innerHTML =
            "<p>Não foi possível carregar os veículos.</p>";

        console.error("Erro:", erro);

    }

});
const botaoLocalizacao = document.getElementById("btn-localizacao");
const resultadoLocalizacao = document.getElementById("resultado-localizacao");

botaoLocalizacao.addEventListener("click", () => {

    if (!navigator.geolocation) {
        resultadoLocalizacao.textContent =
            "Seu dispositivo não suporta geolocalização.";

        return;
    }

    resultadoLocalizacao.textContent = "Obtendo localização...";

    navigator.geolocation.getCurrentPosition(
        (posicao) => {

            const latitude = posicao.coords.latitude.toFixed(5);
            const longitude = posicao.coords.longitude.toFixed(5);

            resultadoLocalizacao.innerHTML = `
                Latitude: ${latitude}<br>
                Longitude: ${longitude}
            `;
        },

        (erro) => {
            resultadoLocalizacao.textContent =
                "Não foi possível obter sua localização.";

            console.log(erro);
        }
    );
});
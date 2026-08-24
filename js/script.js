const pesquisa = document.getElementById("pesquisa");
const carros = document.querySelectorAll(".carro");

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
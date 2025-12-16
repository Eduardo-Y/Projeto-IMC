document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", validarFormulario);

    function validarFormulario(event) {
        const resultadoElement = document.querySelector("#resultado");
        const campos = document.querySelectorAll(".obrigatorio");

        event.preventDefault();
        let valido = true;
        resetarSpan();
        resultadoElement.style.display = "none";

        for (let campo of campos) {
            if (campo.value == "" || campo.value == null) {
                const span = campo.parentNode.querySelector("span");
                span.textContent = "Campo Obrigatório";
                span.style.display = "inline-block";
                valido = false;
            }
        }

        if (valido) {
            const nome = document.querySelector("#inputNome").value;

            const inputAltura = document.querySelector("#inputAltura");
            const altura = inputAltura.value;
            inputAltura.value = Number(altura).toFixed(2);

            const inputPeso = document.querySelector("#inputPeso");
            const peso = inputPeso.value;
            inputPeso.value = Number(peso).toFixed(2);

            let imc = peso / altura ** 2;
            let categoria;

            if (imc < 18.5) {
                categoria = "Abaixo do peso";
                resultadoElement.style.backgroundColor = "#FFFF00";
            } else if (imc < 25) {
                categoria = "Peso normal";
                resultadoElement.style.backgroundColor = "#00FF00";
            } else if (imc < 30) {
                categoria = "Acima do peso";
                resultadoElement.style.backgroundColor = "#FFA500";
            } else {
                categoria = "Obesidade";
                resultadoElement.style.backgroundColor = "#FF0000";
            }

            resultadoElement.textContent = `${nome}, seu IMC é ${imc.toFixed(
                2
            )} e você está na categoria '${categoria}'`;
            resultadoElement.style.display = "inline-block";

            console.clear();
            const formObject = new FormData(form);
            for (let [chave, valor] of formObject.entries()) {
                console.log(chave + ":" + valor);
            }
            console.log("categoria:" + categoria);
        }
    }

    function resetarSpan() {
        const spans = document.querySelectorAll("span");

        for (let span of spans) {
            span.textContent = "";
            span.style.display = "none";
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const resultadoElement = document.querySelector("#resultado");

    form.addEventListener("submit", validarFormulario);

    function validarFormulario(event) {
        const campos = document.querySelectorAll(".obrigatorio");

        event.preventDefault();
        let valido = true;
        resetarForm();
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

            //
            const inputAltura = document.querySelector("#inputAltura");
            const valorAltura = inputAltura.value;
            inputAltura.value = Number(valorAltura).toFixed(2);

            const inputPeso = document.querySelector("#inputPeso");
            const valorPeso = inputPeso.value;
            inputPeso.value = Number(valorPeso).toFixed(2);

            let [imc, categoria] = calcularIMC(
                valorAltura,
                valorPeso,
                resultadoElement
            );

            resultadoElement.textContent = `${nome}, seu IMC é ${imc.toFixed(
                2
            )} e você está na categoria '${categoria}'`;
            resultadoElement.style.display = "inline-block";

            enviarDados(categoria);
        }
    }

    function resetarForm() {
        const spans = document.querySelectorAll("span");

        for (let span of spans) {
            span.textContent = "";
            span.style.display = "none";
        }
        resultadoElement.style.display = "none";
    }

    function calcularIMC(altura, peso, tagResultado) {
        let imc = peso / altura ** 2;
        let categoria;

        if (imc < 18.5) {
            categoria = "Abaixo do peso";
            tagResultado.style.backgroundColor = "#FFFF00";
        } else if (imc < 25) {
            categoria = "Peso normal";
            tagResultado.style.backgroundColor = "#00FF00";
        } else if (imc < 30) {
            categoria = "Acima do peso";
            tagResultado.style.backgroundColor = "#FFA500";
        } else {
            categoria = "Obesidade";
            tagResultado.style.backgroundColor = "#FF0000";
        }

        return [imc, categoria];
    }

    function enviarDados(categoria) {
        console.clear();
        const formObject = new FormData(form);
        for (let [chave, valor] of formObject.entries()) {
            console.log(chave + ":" + valor);
        }
        console.log("categoria:" + categoria);
    }
});

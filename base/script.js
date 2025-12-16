document.addEventListener("DOMContentLoaded", () => {
    // Selecionando os elementos: formulario, campos obrigatórios e resultado
    const form = document.getElementById("form");
    const camposObg = document.querySelectorAll(".obrigatorio");
    const resultadoElement = document.querySelector("#resultado");

    form.addEventListener("submit", (event) => {
        // Previnindo comportamento padrão
        event.preventDefault();

        // Resetando o formulário
        resetarForm(resultadoElement);

        if (validarCampos()) {
            // Selecionando os campos
            const nome = document.querySelector("#inputNome").value;

            const inputAltura = document.querySelector("#inputAltura");
            const valorAltura = inputAltura.value;
            inputAltura.value = Number(valorAltura).toFixed(2);

            const inputPeso = document.querySelector("#inputPeso");
            const valorPeso = inputPeso.value;
            inputPeso.value = Number(valorPeso).toFixed(2);

            // Calculando IMC
            let [imc, categoria] = calcularIMC(
                valorAltura,
                valorPeso,
                resultadoElement
            );

            // Mostrando resultado
            resultadoElement.textContent = `${nome}, seu IMC é ${imc.toFixed(
                2
            )} e você está na categoria '${categoria}'`;
            resultadoElement.style.display = "inline-block";

            // Enviando os dados
            enviarDados(categoria);
        }
    });

    // Função responsavel por resetar o formulário
    function resetarForm(tagResultado) {
        const spans = document.querySelectorAll("span");

        for (let span of spans) {
            span.textContent = "";
            span.style.display = "none";
        }
        tagResultado.style.display = "none";
    }

    // Função responsavel pelo cálculo da IMC
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

    // Função responsavel por enviar os dados
    function enviarDados(categoria) {
        console.clear();
        const formObject = new FormData(form);
        for (let [chave, valor] of formObject.entries()) {
            console.log(chave + ":" + valor);
            Edu;
        }
        console.log("categoria:" + categoria);
    }

    // Função responsavel pela validação dos campos
    function validarCampos() {
        for (let campo of camposObg) {
            if (campo.value == "" || campo.value == null) {
                const span = campo.parentNode.querySelector("span");
                span.textContent = "Campo Obrigatório";
                span.style.display = "inline-block";
                return false;
            }
        }
        return true;
    }
});

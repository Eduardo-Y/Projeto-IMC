# ⚖️ Calculadora de IMC

Este é um projeto de uma **Calculadora de Índice de Massa Corporal (IMC)** desenvolvida com foco em fundamentos de Front-end. A aplicação permite que o usuário insira nome, peso e altura para obter o valor do seu IMC e a classificação correspondente, com feedback visual dinâmico.

## Projeto

<img width="1361" height="641" alt="image" src="https://github.com/user-attachments/assets/4d2063d1-0019-47d9-b1e1-0cbc713f79cc" />

## 🎯 Objetivo do Projeto

O principal objetivo deste projeto foi aplicar e consolidar conhecimentos práticos de desenvolvimento front-end, especificamente:

-   **Manipulação de DOM:** Acessar e modificar elementos HTML em tempo real com JavaScript.
-   **Validação de Formulários:** Garantir que todos os campos obrigatórios sejam preenchidos antes do processamento.
-   **Lógica de Programação:** Implementação de cálculos matemáticos e estruturas condicionais para as categorias de peso.
-   **Design Responsivo e UI:** Uso de variáveis CSS, Flexbox e feedback visual de cores baseado no resultado (UX).
-   **Tratamento de Eventos:** Gerenciar o envio de formulários e prevenir comportamentos padrão de recarregamento de página.

## 🚀 Tecnologias Utilizadas

-   **HTML5:** Estruturação semântica do formulário e container.
-   **CSS3:** Estilização moderna utilizando variáveis (`:root`), Flexbox para centralização e efeitos de hover.
-   **JavaScript (ES6+):** Lógica principal, validação de campos e manipulação de classes/estilos dinâmicos.

## ⚙️ Funcionalidades

-   [x] Cálculo automático de IMC ao clicar em "Calcular".
-   [x] Validação de campos (exibe mensagem de "Campo Obrigatório" caso algum esteja vazio).
-   [x] Formatação automática de números (casas decimais).
-   [x] Alteração dinâmica da cor de fundo do resultado conforme a categoria:
    -   🟡 **Amarelo:** Abaixo do peso.
    -   🟢 **Verde:** Peso normal.
    -   🟠 **Laranja:** Acima do peso.
    -   🔴 **Vermelho:** Obesidade.
-   [x] Exibição de log no console simulando o envio de dados via `FormData`.

## 📸 Demonstração da Lógica

O cálculo é baseado na fórmula padrão:
$IMC = \frac{peso}{altura^2}$

---

## 🛠️ Como rodar o projeto

1. Clone este repositório:
    ```bash
    git clone [https://github.com/Eduardo-Y/Projeto-IMC.git](https://github.com/Eduardo-Y/Projeto-IMC.git)
    ```
2. Navegue até a pasta do projeto e abra o arquivo index.html em seu navegador de preferência.

👨‍💻 Autor

Desenvolvido por Yoda - Estudante de Desenvolvimento Web.

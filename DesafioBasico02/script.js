// Concatenar nome e sobrenome
const concatenarForm = document.getElementById("concatenarForm");
const concatenarResult = document.getElementById("concatenarResult");

concatenarForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;

    const nomeCompleto = nome + " " + sobrenome;
    concatenarResult.textContent = "Nome completo: " + nomeCompleto;
});

// Contar caracteres da string
const contarForm = document.getElementById("contarForm");
const contarResult = document.getElementById("contarResult");

contarForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const texto = document.getElementById("texto").value;

    const numCaracteres = texto.length;
    contarResult.textContent = "O texto possui " + numCaracteres + " caracteres.";
});

// Converter para letras maiúsculas
const maiusculasForm = document.getElementById("maiusculasForm");
const maiusculasResult = document.getElementById("maiusculasResult");

maiusculasForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const frase = document.getElementById("frase").value;

    const fraseMaiuscula = frase.toUpperCase();
    maiusculasResult.textContent = "Frase em caixa alta: " + fraseMaiuscula;
});

// Extrair parte da string
const extrairForm = document.getElementById("extrairForm");
const extrairResult = document.getElementById("extrairResult");

extrairForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const palavra = document.getElementById("palavra").value;

    const tresPrimeiros = palavra.substring(0, 3);
    extrairResult.textContent = "Os primeiros tres caracteres: " + tresPrimeiros;
});

// Substituir letras por caracteres específicos
const substituirForm = document.getElementById("substituirForm");
const substituirResult = document.getElementById("substituirResult");

substituirForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let texto = document.getElementById("textoSubstituir").value;

    texto = texto.replace(/A/gi, "4");
    texto = texto.replace(/I/gi, "1");
    texto = texto.replace(/E/gi, "3");
    texto = texto.replace(/O/gi, "0");
    texto = texto.replace(/S/gi, "5");

    substituirResult.textContent = "Texto substituido: " + texto;
});
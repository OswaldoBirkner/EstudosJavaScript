// Média de três notas
const mediaForm = document.getElementById("mediaForm");
const mediaResult = document.getElementById("mediaResult");

mediaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const media = (nota1 + nota2 + nota3) / 3;
    mediaResult.textContent = "A media das notas e: " + media.toFixed(2);
});

// Conversão de temperatura de Celsius para Fahrenheit
const temperaturaForm = document.getElementById("temperaturaForm");
const temperaturaResult = document.getElementById("temperaturaResult");

temperaturaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const temperaturaCelsius = parseFloat(document.getElementById("temperaturaCelsius").value);

    const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    temperaturaResult.textContent = "A temperatura em Fahrenheit e: " + temperaturaFahrenheit.toFixed(2);
});

// Cálculo da área de um retângulo
const areaForm = document.getElementById("areaForm");
const areaResult = document.getElementById("areaResult");

areaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const largura = parseFloat(document.getElementById("largura").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const area = largura * altura;
    areaResult.textContent = "A area do retangulo e: " + area.toFixed(2);
});

// Cálculo do Índice de Massa Corporal (IMC)
const imcForm = document.getElementById("imcForm");
const imcResult = document.getElementById("imcResult");

imcForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const alturaImc = parseFloat(document.getElementById("alturaImc").value);

    const imc = peso / (alturaImc * alturaImc);
    imcResult.textContent = "O Indice de Massa Corporal (IMC) é: " + imc.toFixed(2);
});

// Conversão de horas para minutos
const minutosForm = document.getElementById("minutosForm");
const minutosResult = document.getElementById("minutosResult");

minutosForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const horas = parseFloat(document.getElementById("horas").value);

    const minutos = horas * 60;
    minutosResult.textContent = horas + " horas equivalem a " + minutos + " minutos.";
});

// Conversão de km/h para mp/h
const milhasForm = document.getElementById("milhasForm");
const milhasResult = document.getElementById("milhasResult");

milhasForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const km = parseFloat(document.getElementById("km").value);

    const milhas = km / 1.609344;
    milhasResult.textContent = km + " km/h equivalem a " + milhas.toFixed(2) + " mp/h.";
});
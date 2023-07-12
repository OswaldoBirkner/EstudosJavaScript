// Exercício 1 - Verificar Par ou Ímpar
const parOuImparForm = document.getElementById("parOuImparForm");
const resultadoNum = document.getElementById("resultadoNum");

parOuImparForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById("numero").value);

    if (numero % 2 === 0) {
        resultadoNum.textContent = "O numero e par.";
    } else {
        resultadoNum.textContent = "O numero e impar.";
    }
});

// Exercício 2 - Calcular Desconto
const descontoForm = document.getElementById("descontoForm");
const resultadoDesconto = document.getElementById("resultadoDesconto");

descontoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const preco = parseFloat(document.getElementById("preco").value);
    const desconto = preco * 0.1;
    const precoComDesconto = preco - desconto;

    resultadoDesconto.textContent = "O valor com desconto e: " + precoComDesconto.toFixed(2);
});

// Exercício 3 - Verificar Número Primo
const numeroPrimoForm = document.getElementById("numeroPrimoForm");
const resultadoPrimo = document.getElementById("resultadoPrimo");

numeroPrimoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const numeroPrimo = parseInt(document.getElementById("numeroPrimo").value);
    let primo = true;

    if (numeroPrimo === 1) {
        primo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
            if (numeroPrimo % i === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        resultadoPrimo.textContent = "O numero e primo.";
    } else {
        resultadoPrimo.textContent = "O numero não e primo.";
    }
});

// Exercício 4 - Converter Idade para Dias
const idadeDiasForm = document.getElementById("idadeDiasForm");
const resultadoDias = document.getElementById("resultadoDias");

idadeDiasForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const idadeAnos = parseInt(document.getElementById("idadeAnos").value);
    const dias = idadeAnos * 365;

    resultadoDias.textContent = "A idade em dias e: " + dias;
});

// Exercício 5 - Formatar Número de Telefone
const telefoneForm = document.getElementById("telefoneForm");
const resultadoTelefone = document.getElementById("resultadoTelefone");

telefoneForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const numeroTelefone = document.getElementById("numeroTelefone").value;
    const telefoneFormatado =
        "(" +
        numeroTelefone.substr(0, 2) +
        ") " +
        numeroTelefone.substr(2, 4) +
        "-" +
        numeroTelefone.substr(6, 4);

    resultadoTelefone.textContent = "Numero de telefone formatado: " + telefoneFormatado;
});

// Exercício 6 - Lista de numeros pares
const numerosParesForm = document.getElementById("numerosParesForm");
const resultadoPares = document.getElementById("resultadoPares");
const numerosPares = [];

numerosParesForm.addEventListener("submit", function(event) {
    event.preventDefault();

    for (let i = 2; i <= 10; i += 2) {
        numerosPares.push(i);
    }

    resultadoPares.textContent = "Numeros pares de 1 a 10: " + numerosPares.join(", ");
});


// Exercício 7 - Medias de nota
const mediaForm = document.getElementById("mediaForm");
const resultadoMedia = document.getElementById("resultadoMedia");

mediaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    while (nota1 < 0 || nota1 > 10) {
        nota1 = parseFloat(prompt("Nota 1 invalida! Informe novamente a nota 1 (entre 0.0 e 10.0):"));
    }

    while (nota2 < 0 || nota2 > 10) {
        nota2 = parseFloat(prompt("Nota 2 invalida! Informe novamente a nota 2 (entre 0.0 e 10.0):"));
    }

    while (nota3 < 0 || nota3 > 10) {
        nota3 = parseFloat(prompt("Nota 3 invalida! Informe novamente a nota 3 (entre 0.0 e 10.0):"));
    }

    const media = (nota1 + nota2 + nota3) / 3;

    resultadoMedia.textContent = "A media das notas e: " + media.toFixed(2);
});


// Exercício 8 - Contagem regressiva

const contagemRegressivaForm = document.getElementById("contagemRegressivaForm");
const contagemElement = document.getElementById("contagem");

contagemRegressivaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let numero = 10;

    function iniciarContagemRegressiva() {
        contagemElement.textContent = numero;

        if (numero === 1) {
            clearInterval(intervalId);
            contagemElement.textContent = "Contagem finalizada!";
        }

        numero--;
    }

    const intervalId = setInterval(iniciarContagemRegressiva, 1000);
});

// Exercício 9 - Verificação de letra

const verificarLetraForm = document.getElementById("verificarLetraForm");
const resultadoElement = document.getElementById("resultadoLetra");

verificarLetraForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const palavra = document.getElementById("palavra").value;
    const letra = document.getElementById("letra").value.toLowerCase(); // Converter para minúscula

    let encontrada = false;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].toLowerCase() === letra) { // Converter para minúscula para comparação
            encontrada = true;
            break;
        }
    }

    if (encontrada) {
        resultadoElement.textContent = `A letra "${letra}" foi encontrada na palavra "${palavra}".`;
    } else {
        resultadoElement.textContent = `A letra "${letra}" nao foi encontrada na palavra "${palavra}".`;
    }
});

// Exercício 10 - Converter para maiúsculas
const converterMaiusculasForm = document.getElementById("converterMaiusculasForm");
const resultadoMaiusculas = document.getElementById("resultado");

converterMaiusculasForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const frase = document.getElementById("frase").value;
    let fraseMaiuscula = "";

    for (let i = 0; i < frase.length; i++) {
        const letra = frase[i];

        // Verifica se e uma letra minuscula e converte para maiuscula
        const letraMaiuscula = letra.toUpperCase();
        fraseMaiuscula += letraMaiuscula;
    }

    resultadoMaiusculas.textContent = `Frase convertida: ${fraseMaiuscula}`;
});

// Problema adicional 11 - Imprimir números ímpares
const imprimiImparesForm = document.getElementById("imprimiImparesForm");
const resultadoImpares = document.getElementById("resultadoImpares");

imprimiImparesForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let impares = "";

    for (let i = 1; i <= 20; i += 2) {
        impares += i + " ";
    }

    resultadoImpares.textContent = "Numeros impares de 1 a 20: " + impares;
});

// Problema adicional 12 - Calcular média de vetor
const mediaVetorForm = document.getElementById("mediaVetorForm");
const resultadoMediaVetor = document.getElementById("resultadoMediaVetor");

mediaVetorForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    const media = soma / vetor.length;

    resultadoMediaVetor.textContent = "Media do vetor: " + media.toFixed(2);
});

// Problema adicional 13 - Jogo de Adivinhação
const adivinhacaoForm = document.getElementById("adivinhacaoForm");
const resultadoAdivinhacao = document.getElementById("resultadoAdivinhacao");
const numeroAdivinhar = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

adivinhacaoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const adivinha = parseInt(document.getElementById("adivinha").value);

    if (adivinha === numeroAdivinhar) {
        resultadoAdivinhacao.textContent = `Parabens! Você acertou o numero em ${tentativas} tentativas.`;
    } else if (adivinha < numeroAdivinhar) {
        resultadoAdivinhacao.textContent = "Tente novamente. O numero e maior.";
        tentativas++;
    } else {
        resultadoAdivinhacao.textContent = "Tente novamente. O numero é menor.";
        tentativas++;
    }
});

// Problema adicional 14 - Somar elementos de vetor
const somaVetorForm = document.getElementById("somaVetorForm");
const resultadoSomaVetor = document.getElementById("resultadoSomaVetor");

somaVetorForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const vetor = [/* vetor com 100 elementos aqui */];
    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    resultadoSomaVetor.textContent = "Soma dos elementos do vetor: " + soma;
});

// Problema adicional 15 - Sequência de Fibonacci
const fibonacciForm = document.getElementById("fibonacciForm");
const resultadoFibonacci = document.getElementById("resultadoFibonacci");

fibonacciForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let a = 0;
    let b = 1;
    let fibonacci = "0, 1";

    for (let i = 2; i < 10; i++) {
        const proximo = a + b;
        fibonacci += ", " + proximo;
        a = b;
        b = proximo;
    }

    resultadoFibonacci.textContent = "Sequencia de Fibonacci: " + fibonacci;
});

// Problema adicional 16 - Maior número digitado
const maiorNumeroForm = document.getElementById("maiorNumeroForm");
const resultadoMaiorNumero = document.getElementById("resultadoMaiorNumero");
let maiorNumero = 0;

maiorNumeroForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let numerosInteiros = parseInt(document.getElementById("numerosInteiros").value);

    while (numerosInteiros !== 0) {
        if (numerosInteiros > maiorNumero) {
            maiorNumero = numerosInteiros;
        }

        numerosInteiros = parseInt(prompt("Digite numeros inteiros (digite 0 para encerrar):"));
    }

    resultadoMaiorNumero.textContent = "O maior numero digitado e: " + maiorNumero;
});

// Problema adicional 17 - Verificar senha
const senhaForm = document.getElementById("senhaForm");
const resultadoSenha = document.getElementById("resultadoSenha");
const senhaCorreta = "12345";

senhaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let senha = document.getElementById("senha").value;

    do {
        senha = prompt("Digite a senha:");
    } while (senha !== senhaCorreta);

    resultadoSenha.textContent = "Senha correta!";
});

// Problema adicional 18 - Contar letra
const contarLetraForm = document.getElementById("contarLetraForm");
const resultadoContarLetra = document.getElementById("resultadoContarLetra");

contarLetraForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const fraseLetra = document.getElementById("fraseLetra").value;
    const letra = "a";
    let contador = 0;

    for (let i = 0; i < fraseLetra.length; i++) {
        if (fraseLetra[i].toLowerCase() === letra) {
            contador++;
        }
    }

    resultadoContarLetra.textContent = `Quantidade de vezes que a letra "${letra}" aparece: ${contador}`;
});

// Problema adicional 19 - Números primos
const primosForm = document.getElementById("primosForm");
const resultadoPrimos = document.getElementById("resultadoPrimos");

primosForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let primos = "";

    for (let numero = 1; numero <= 100; numero++) {
        let primo = true;

        if (numero === 1) {
            primo = false;
        } else {
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    primo = false;
                    break;
                }
            }
        }

        if (primo) {
            primos += numero + " ";
        }
    }

    resultadoPrimos.textContent = "Numeros primos de 1 a 100: " + primos;
});

// Problema adicional 20 - Soma números pares
const somaParesForm = document.getElementById("somaParesForm");
const resultadoSomaPares = document.getElementById("resultadoSomaPares");
let somaPares = 0;

somaParesForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let numero = 1;

    while (numero <= 50) {
        if (numero % 2 === 0) {
            somaPares += numero;
        }

        numero++;
    }

    resultadoSomaPares.textContent = "A soma dos numeros pares de 1 a 50 e: " + somaPares;
});
var num1;
var num2;
var resultado;

function soma(){
    var elemento1 = document.getElementById("numero1");
    var elemento2 = document.getElementById("numero2");
    num1 = elemento1.value;
    num2 = elemento2.value;
    resultado = parseFloat(num1) + parseFloat(num2);
    var elementoR = document.getElementById("resultado");
    elementoR.innerHTML = 'Resultado = ' + resultado;
}

function subtracao(){
    var elemento1 = document.getElementById("numero1");
    var elemento2 = document.getElementById("numero2");
    num1 = elemento1.value;
    num2 = elemento2.value;
    resultado = parseFloat(num1) - parseFloat(num2);
    var elementoR = document.getElementById("resultado");
    elementoR.innerHTML = 'Resultado = ' + resultado;
}

function multiplicacao(){
    var elemento1 = document.getElementById("numero1");
    var elemento2 = document.getElementById("numero2");
    num1 = elemento1.value;
    num2 = elemento2.value;
    resultado = parseFloat(num1) * parseFloat(num2);
    var elementoR = document.getElementById("resultado");
    elementoR.innerHTML = 'Resultado = ' + resultado;
}

function divisao(){
    var elemento1 = document.getElementById("numero1");
    var elemento2 = document.getElementById("numero2");
    num1 = elemento1.value;
    num2 = elemento2.value;
    resultado = parseFloat(num1) / parseFloat(num2);
    var elementoR = document.getElementById("resultado");
    elementoR.innerHTML = 'Resultado = ' + resultado;
}

function potencia(){
    var elemento1 = document.getElementById("numero1");
    var elemento2 = document.getElementById("numero2");
    num1 = elemento1.value;
    num2 = elemento2.value;
    resultado = Math.pow(num1, num2);
    var elementoR = document.getElementById("resultado");
    elementoR.innerHTML = 'Resultado = ' + resultado;
}
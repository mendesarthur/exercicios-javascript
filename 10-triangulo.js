// A soma de qualquer dois lados deve ser menor que o terceiro//
var prompt = require('prompt-sync')();

var lado1 = parseInt(prompt('Digite o valor do lado 1:'));
var lado2 = parseInt(prompt('Digite o valor do lado 2:'));
var lado3 = parseInt(prompt('Digite o valor do lado 3:'));

var codicao1 =(lado1 + lado2 > lado3);
var condicao2 =(lado2 + lado3 > lado1);
var condicao3 =(lado3 + lado1 >lado2);

if (condicao1 && condicao2 && condicao3){
    console.log("Os três lados formam um triângulo!");
}
else{
    console.log("tente outra vez =( ");
}
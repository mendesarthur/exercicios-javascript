var prompt = require('prompt-sync')(); //importaçaõ da biblioteca prompt-sync (possibilita requisitar dados no terminal)

var numero = parseInt(prompt('Digite um número:')); //parseInt - converto o valor para inteiro

for (var i = 1; i <= 10; i++){
    console.log(numero + ' x ' + i + ' = ' + numero*i);
}
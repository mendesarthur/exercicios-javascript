var prompt = require('prompt-sync')();

var numero = prompt('digite um número:');

if (numero % 2 ==0) {
    console.log('O número digitado é PAR');
}
else {
    console.log('O número é ÍMPAR');
}
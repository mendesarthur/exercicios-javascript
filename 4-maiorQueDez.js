var prompt = require('prompt-sync')();

var numero = prompt('digite um número:');

if (numero > 10) {
    console.log("número é mairo que dez!");
}
else if (numero ==10){
    console.log("O número é igual a dez!");

}

else { // Não obrigatório
    console.log("O número NÃO é maior que dez!");
}

console.log('final do código');
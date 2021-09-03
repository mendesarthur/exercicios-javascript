var prompt = require('prompt-sync')();

var numero01 = prompt('digite o primeiro número:');
var numero02 = prompt('digite o segundo numero')

if (numero01>numero02) {
    console.log('O maior número é:'+numero01);
}
else if (numero1 == numero2){
    console.log('Os  número são iguais!:'+numero02)
}
else {
    console.log('O maior número é:'+numero2);
}

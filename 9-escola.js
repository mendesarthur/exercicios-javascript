var prompt = require('prompt-sync')();

var nota1 = parseint(prompt('digite a primeira nota: '));
var nota2 = parseint(prompt('digite a segunda nota: '));
var nota3 = parseint(prompt('digite a terceira nota: '));
var frequencia = parseint(prompt('digite sua frequência'))
var trabalho = prompt('entregou o trabalho(s/n)?');

var media = (nota1 + nota2 + nota3) / 3;


if (media < 5 || frequencia < 75 && trabalho == 'n'){
    console.log('Reprovado');
}

else if(media < 7 && trabalho =='n'){
    console.log('Recuperação!');
}
else {
    console.log('aprovado');
}
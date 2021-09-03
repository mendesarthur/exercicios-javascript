var prompt = require('prompt-sync')();

var nome = prompt('Digite o seu nome: ');
var hora = new Date().getHours();// função para retornar o valor das do horas do sistema

if (hora <12) {
    console.log('Bom dia,' +nome);
}
else if (hora< 18) {
    console.log('Boa tarde,'+nome);
}
else {
    console.log('Boa noite,'+nome );
}
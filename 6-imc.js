var prompt = require('prompt-sync')();

var peso = prompt('digite seu peso:');
var altura = prompt('digite sua altura');
var imc =  peso/(altura **2);

if(imc < 20){
    console.log('você esta abaixo do peso')
}

else if(imc >20 && imc <= 25){
    console.log('você esta no peso ideal');
}
else if(imc >25 && imc <= 30){
    console.log('você esta com sobre peso');
}
else if(imc >30 && imc <= 35){
    console.log('você é um obeso moderado');
}
else if(imc >35 && imc <= 40){
    console.log('você é um obeso severo')
}
else if(imc >40 && imc <= 50){
    console.log('você é um obeso morbido')
}



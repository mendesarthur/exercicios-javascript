var array = [5, 6, 11, 12, 6, 50, 8, 9, 19, 46, 53, 2, 8, 10];

var maiorQueDez = 0;
var menorQueDez = 0;

for (var i = 0; i < array.length; i++) {
    if (array[i] > 10){
        maiorQueDez += 1; //maiorQuedez++ ou maiorQueDez = maiorQueDez +1
    }
    else if (array[i] < 10) {
        menorQueDez += 1;
    }
}

console.log('Números maiores que dez:'+ maiorQueDez);
console.log('Números menores que dez:'+ menorQueDez);

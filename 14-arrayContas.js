var array = [2, 5, 6, 10, 2, 3, 4, 8, 12, 9, 17, 50];

var somo = 0;

for (var i = 0; i < array.length ;i++){
    console.log(array[i]);
    soma = soma + array[i]; //soma += array[i]
}

console.log('Soma:' + soma);
console.log('Média:' + soma/array.length);

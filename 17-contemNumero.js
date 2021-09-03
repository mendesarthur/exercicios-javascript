//criar uma função que recebe dois parâmetros.
//parâmetro 1: arrray com números [2, 3, 1, 6, 7]
//parâmetro 2: número 9
//função verifica se o número pertence ao array.

function contemnumero(array, numero){
    for(var i = 0; i <array.length ; i++){
        if (array[i]==numero){
            console.log('Contem o número!')
        }
    } 
}

contemnumero([1, 2, 3, 5, 6], 3);
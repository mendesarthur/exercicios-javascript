function saudacao(nome) {
    var hora = new Date().getHours();
    var minutos = new Date().getMinutes();
    if (hora < 12){
        console.log('Bom dia, ' + nome + ' - ' + hora + ':' + minutos);
    }
    else if (hora < 18){
    console.log('Boa tarde,' + nome+ ' - ' + hora + ':' + minutos);  
    }
    else{
        console.log('Boa noite,' + nome+ ' - ' + hora + ':' + minutos);
    }

}
saudacao('Arthur');
saudacao('Mendes');
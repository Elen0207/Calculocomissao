function calcular(){

    if(document.getElementById("Salario").value == "" || document.getElementById("Porcentos").value == "")
    {
    alert('É obrigatório preencher todos os campos')    
    }
    else{
        var s1 = document.getElementById("Salario").value;
        var s2 = document.getElementById("Porcentos").value;
        var s3 = parseFloat(s1) * parseFloat(s2) /100;
        document.querySelector('div#res').innerHTML = 'O percentual máximo de comissão que você pode receber é ' + s3/*
        alert('Seu percentual de comissão máximo é: ' +s3)*/
    }
}

    function total(){
        if(document.getElementById("contratos").value == "" || document.getElementById("vendas").value == "")
    {
    alert('É obrigatório preencher todos os campos')    
    }
    else{
        var s1 = document.getElementById("Salario").value;
        var s2 = document.getElementById("Porcentos").value;
        var s3 = parseFloat(s1) * parseFloat(s2) /100;
        
        var t1 = document.getElementById("contratos").value;
        var t2 = document.getElementById("vendas").value;
        
        var t3 = ((parseFloat(t1) + parseFloat(t2)) / 2) * s3 / 100;
        /*alert('Sua comissão será: ' + t3);*/
    document.querySelector('div#total').innerHTML = 'O percentual máximo de comissão que você pode receber é ' + t3;
                    
    }
}
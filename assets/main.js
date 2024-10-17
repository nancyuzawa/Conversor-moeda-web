function verificarCampos(){
    //Pega o tipo de moeda selecionada
    let moedaSelecionada = document.getElementById("converterDe").value;
    let moedaAConverter = document.getElementById("converterPara").value;

    //Guarda o valor a ser convertido
    let quantia = document.getElementById("inputValor").value;


    //VERIFICAÇÃO
    //Verifica se os dois campos foram selecionados em alguma moeda
    if (moedaSelecionada === "escolha" || moedaAConverter === "escolha"){
        alert("Selecione um campo válido para a conversão!!");
    }

    //Verifica se ambas moedas selecionadas são iguais
    else if(moedaSelecionada === moedaAConverter){
        alert("As moedas para a conversão precisam ser diferentes!!");
    }
    else{
        //Verifica se a quantia foi adicionada para o cálculo
        if(quantia == ""){
            alert("Adicione uma quantia para o cálculo!");
        }
        //Chama a função para calcular
        else{
            calcular(moedaSelecionada, moedaAConverter, quantia);
        }
    }
    
}

//FUNÇÃO PARA CONVERSÃO
function calcular(moedaSelecionada, moedaAConverter, quantia){
    let cotacaoDolarReal = 5.0;
    let cotacaoEuroReal = 5.5;
    let cotacaoDolarEuro = 1.07;
    let resultado;
    let tipoDeMoeda; //Usado para aparecer o símbolo no resultado final

    // Verificação do tipo e o cálculo correspondente
    if (moedaSelecionada === "dolar" && moedaAConverter === "real"){
        resultado = quantia * cotacaoDolarReal;
        tipoDeMoeda = "R$";
    }
    else if(moedaSelecionada === "euro" && moedaAConverter === "dolar"){
        resultado = quantia * cotacaoDolarEuro;
        tipoDeMoeda = "$";
    }
    else if(moedaSelecionada === "euro" && moedaAConverter === "real"){
        resultado = quantia * cotacaoEuroReal;
        tipoDeMoeda = "R$";
    }
    
    else if(moedaSelecionada === "real" && moedaAConverter === "dolar"){
        resultado = quantia / cotacaoDolarReal;
        tipoDeMoeda = "$";
    }
    else if(moedaSelecionada === "dolar" && moedaAConverter === "euro"){
        resultado = quantia / cotacaoDolarEuro;
        tipoDeMoeda = "€";
    }
    else if(moedaSelecionada === "real" && moedaAConverter === "euro"){
        resultado = quantia / cotacaoEuroReal;
        tipoDeMoeda = "€";
    }

    //Mostra no input 'Resultado'
    document.getElementById("inputResultado").value = tipoDeMoeda + resultado;
}
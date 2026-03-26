
//criar os preços

const precoGasolina = 6.39;
const precoEtanol = 5.89;

//função: Identificar o combustível 
function atualizarValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);

    let litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;
    switch (tipo){
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        default:
            console.log("Escolha Uma opção");
            return;
    };
    console.log(precoPorLitro);
    calcularValorAbastecimento(precoPorLitro, litros);
};

function calcularValorAbastecimento(precoCombustivel, litros){
    //let valorTotal = precoCombustivel * litros;
    //document.getElementById("resultado").textContent = valorTotal;
    
    if(litros<=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Insira valor válido";
        return;

    } else{
        let valorTotal = precoCombustivel * litros;
        document.getElementById("resultado").textContent = `Valor R$ ${valorTotal.toFixed(2)}`;
    }


};

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);

let litrosInput = document.getElementById("litros");
litrosInput.addEventListener("input", atualizarValor);

function formatarMoeda
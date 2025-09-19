function calcularTotal (precoUnitario, quantidade, callback) {
    let total = precoUnitario* quantidade;
    if (callback) {
        return callback(total);
    }
    return total;
}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9;
    }
    else {
        return valorTotal;
    }
}

function exibirResumo(valorBruto, valorFinal) {
    let mensagem = "Resumo da compra:\n";
    mensagem += "Valor total antes do desconto: R$ " + valorBruto.toFixed(2) + "\n";
    mensagem += "Valor final com desconto: R$ " + valorFinal.toFixed(2);
    alert(mensagem);
}

let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));
let quantidade = parseInt(prompt("Digite a quantidade comprada:"));

let valorBruto = precoUnitario * quantidade;
let valorFinal = calcularTotal(precoUnitario, quantidade, aplicarDesconto);

exibirResumo(valorBruto, valorFinal);
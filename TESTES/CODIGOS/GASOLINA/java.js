function calcular() {
    const totalGasolina = parseFloat(document.getElementById('total-gasolina').value);
    const numeroAmigos = parseInt(document.getElementById('numero-amigos').value);
    const fatorRapidez = parseFloat(document.getElementById('fator-rapidez').value);

    if (isNaN(totalGasolina) || isNaN(numeroAmigos) || isNaN(fatorRapidez) || numeroAmigos <= 0 || fatorRapidez <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const valorPorAmigo = (totalGasolina * fatorRapidez) / (numeroAmigos + fatorRapidez);
    const valorDonoCarro = totalGasolina - (valorPorAmigo * numeroAmigos);

    document.getElementById('resultado').innerHTML = `
        Cada amigo deve pagar: R$ ${valorPorAmigo.toFixed(2)}<br>
        O dono do carro deve pagar: R$ ${valorDonoCarro.toFixed(2)}
    `;
}


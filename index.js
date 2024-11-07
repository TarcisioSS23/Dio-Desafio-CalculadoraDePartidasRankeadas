let vitorias = 99;
let derrotas = 10;
calcularRank(vitorias, derrotas);


function calcularRank(vitorias, derrotas) {
    
    const saldoTotal = vitorias - derrotas;

    
    let nivel;
    if (saldoTotal < 10) {
        nivel = "Ferro";
    } else if (saldoTotal >= 10 && saldoTotal <= 20) {
        nivel = "Bronze";
    } else if (saldoTotal >= 21 && saldoTotal <= 50) {
        nivel = "Prata";
    } else if (saldoTotal >= 51 && saldoTotal <= 80) {
        nivel = "Ouro";
    } else if (saldoTotal >= 81 && saldoTotal <= 90) {
        nivel = "Diamante";
    } else if (saldoTotal >= 91 && saldoTotal <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    
    console.log("O Herói tem de saldo de " + saldoTotal + " e está no nível de " + nivel);
    
}



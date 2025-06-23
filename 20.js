const prompt = require('prompt-sync')();
let lado = Number(prompt("Digite o tamanho do lado do quadrado (1-20): "));
if (!Number.isInteger(lado) || lado < 1 || lado > 20) {
    console.log("Por favor, digite um número inteiro entre 1 e 20.");
} else {
    console.log(`\nQuadrado de lado ${lado}:`);
    for (let linha = 0; linha < lado; linha++) {
        let linhaQuadrado = "";
        for (let coluna = 0; coluna < lado; coluna++) {
            if (linha === 0 || linha === lado - 1 || coluna === 0 || coluna === lado - 1) {
                linhaQuadrado += "*";
            } else {
                linhaQuadrado += " ";
            }
        }
        console.log(linhaQuadrado);
    }
}

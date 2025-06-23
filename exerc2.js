prompt = require('prompt-sync')();
let cotacaoDolar = Number(prompt('Digite a cotação do dólar: '));
let valorDolar= Number(prompt('Digite o valor do produto em dólar: '));
let valorReal = valorDolar * cotacaoDolar;
console.log( `O valor do produto em reais é: R$ ${valorReal.toFixed(2)}`);

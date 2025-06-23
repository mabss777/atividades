const prompt = require('prompt-sync')();
const mm = 25.4;
let temperaturaFahrenheit = Number(prompt("Digite a temperatura em Fahrenheit: "));
let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9
console.log(`A temperatura em Celsius é: ${temperaturaCelsius.toFixed(1)}`);
let qntdChuva = Number(prompt("Digite a quantidade de chuva em polegadas: "));
let qntdChuvaMilimetros = qntdChuva * mm;
console.log(`A quantidade de chuva em milimetros é: ${qntdChuvaMilimetros.toFixed(2)}`);

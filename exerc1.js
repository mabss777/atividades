prompt = require('prompt-sync')();
let num1 = Number(prompt('Digite a primeira nota: '));
let num2 = Number(prompt('Digite a segunda nota: '));
let num3 = Number(prompt('Digite a terceira nota: '));
media = (num1 + num2 + num3) / 3;
console.log(`A média das notas é ${media}`);

prompt = require('prompt-sync')();
let horaTrabalhada = Number(prompt("Digite o total de horas trabalhadas: "));
let valorHora = Number(prompt("Digite o valor da hora trabalhada: "));
let salario = horaTrabalhada * valorHora;
let valeTransporte = salario * 0.06;
let salarioDescontado = salario - valeTransporte;
console.log(`Seu salário é de R$ ${salarioDescontado.toFixed(2)} e o valor do vale transporte é de R$ ${valeTransporte.toFixed(2)}`);

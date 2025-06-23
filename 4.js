prompt = require('prompt-sync')();
let salarioMensal = Number(prompt('Digite seu salário mensal: '));
let percentualAumento = Number(prompt('Digite o percentual de aumento: '));
let novoSalario = salarioMensal + (salarioMensal * percentualAumento) / 100
console.log(`O novo valor do seu salário é: ${novoSalario}`);

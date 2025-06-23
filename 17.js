const prompt = require('prompt-sync')();
let pares = 0;
let impares = 0;
for (let i = 1; i <= 10; i++) {
  let numero = Number(prompt(`Digite o ${i}º número inteiro: `)); 
  if (Number.isInteger(numero)) {
    if (numero % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  } else {
    console.log("Valor inválido! Por favor, digite apenas números inteiros.");
    i--; // repete esta iteração
  }
}
console.log(`\nQuantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);

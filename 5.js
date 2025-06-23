prompt = require('prompt-sync')();
let idade = Number(prompt('Digite uma idade: '));
let segundos = idade * 365 * 24 * 60 * 60;
console.log(`Seu coração já bateu/baterá por ${segundos} vezes`);

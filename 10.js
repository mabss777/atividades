prompt = require ('prompt-sync') ()
let taxaConsumoPotenciaEletrica = Number(prompt('Digite a taxa de consumo de potência elétrica: '));
let tempoHorasLigado = Number(prompt('Digite o tempo de uso em horas: '));
let valorQuilowattHora = Number(prompt('Digite o valor do quilowatt-hora: '));
let consumoEnergia = taxaConsumoPotenciaEletrica * tempoHorasLigado
let valorPago = taxaConsumoPotenciaEletrica * tempoHorasLigado * valorQuilowattHora
console.log(`Seu refrigerador consome ${consumoEnergia.toFixed(2)} de energia!`);
console.log(`E o valor a ser pago pela energia consumida é de R$ ${valorPago.toFixed(2)}`)

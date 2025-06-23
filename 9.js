prompt = require ('prompt-sync') ()
 
taxaFixaDia= Number (prompt ('Digite a taxa fixa por dia: '))
taxaPorKm= Number (prompt ('Digite a taxa por km: '))
numeroDeDias= Number (prompt ('Digite o numero de dias: '))
numeroDeRodados= Number (prompt ('Digite o numero de km rodados: ')) 
totalDia= (taxaFixaDia * numeroDeDias)
totalDesconto=(totalDia * 0.10)
totalKm= taxaPorKm * numeroDeRodados
total= totalKm - totalDesconto
console.log ('O total por dia: ', totalDia.toFixed(2))

console.log ('O total de desconto é: ', totalDesconto.toFixed(2))
console.log ('Valor para pagar: ', total.toFixed(2))

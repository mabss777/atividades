  let nota;
  while (true) {
      nota = Number(prompt('Digite uma nota de 0 a 10: '));
      if (nota > -1 && nota < 11) {
          break; 
      } else {
          console.log('Valor inválido! A nota deve estar entre 0 e 10.');
      }
  } 
  console.log(`Nota válida informada: ${nota}`);

prompt = require ('prompt-sync') ();
   num1 = Number(prompt('Digite o primeiro número: '));
   num2 = Number(prompt('Digite o segundo número: '));
   let menor = num1;
   let maior = num2;
   if (num1 > num2) {
     menor = num2;
     maior = num1;
   }
   let soma = 0;
   let numeros = "";
   for (let i = menor + 1; i < maior; i++) {
     numeros += i + " ";
     soma += i;
   }
   console.log ("Números entre eles: " + numeros.trim());
   console.log ("Soma: " + soma);

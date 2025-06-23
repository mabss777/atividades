prompt = require ('prompt-sync') ();
   let nTabuada = Number(prompt("Digite o número da tabuada: "));
   let nContador = 1;
   while (nContador <= 10){
       console.log(nTabuada + " x " + nContador + " = " + (nTabuada * nContador));
       nContador++;
   }

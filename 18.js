const prompt = require('prompt-sync')();
let n = Number(prompt("Quantos termos da série de Fibonacci você deseja ver? "));
if (!Number.isInteger(n) || n <= 0) {
  console.log("Por favor, digite um número inteiro positivo.");
} else {
  let fib = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      fib[i] = 1;
    } else {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  }
  console.log(`Os primeiros ${n} termos da série de Fibonacci são:`);
  console.log(fib.join(", "));
}

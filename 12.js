const prompt = require('prompt-sync')();
let loginValido = false;
do {
  let usuario = prompt("Usuário:");
  let senha = prompt("Senha:");

  if (usuario === "admin" && senha === "123") {
    console.log('Login realizado com sucesso!');
    loginValido = true;
  } else {
    console.log('Usuário ou senha inválidos. Tente novamente.');
  }
} while (!loginValido);

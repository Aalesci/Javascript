// Conversione IMPLICITA. 

let numero1 = "12";
let numero2 = 5;

const ris1 = numero1 + numero2 ;
console.log(ris1);

const ris2 = numero1 - numero2 ;
console.log(ris2);


const numero = 22;
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let input = document.getElementById("input").value;

  input = parseInt(input); // Questo permette di ricevere in entrata non più una stringa ma un numero! 

  console.log(input);
  document.write(numero + input);
});
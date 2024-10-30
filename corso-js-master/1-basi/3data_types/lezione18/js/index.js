
// Gli oggetti: 

const persona = {
    nome: "Enzo",
    cognome: "Cogno",
    age: 33,
    "si sposa": false,
    isRetired(age) { // metodo dell'ogetto
      return age > 60;
    },
  };
  
console.log(persona);
console.log(persona.nome); // Nome

const figli = ['mauri', 'anna'];

persona.figlii = figli; 

console.log(persona);

console.log(persona.isRetired(persona.age));

delete persona.figlii;

console.log(persona); 
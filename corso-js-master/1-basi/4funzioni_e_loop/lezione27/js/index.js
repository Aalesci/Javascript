

// Operatori logici
// || = OR e && = End

const nome1 =  'alfa';
const age1 = 40;

if(age1 >= 18 || nome1 === 'alfa'){ // OR
    console.log('Birra');
}else {
    console.log('Ciocola');
}


const isMaggiorenne = function (age) {
    console.log("Controllo età");
    return age >= 18;
  };
  
  const isProprietario = (nome) => {
    console.log("Controllo Nome");
    return nome === "Enzo";
  };
  
  const nome = "Pippo";
  const age = 19;
  
  if (isMaggiorenne(age) || isProprietario(nome)) {
    console.log("Birra");
  } else {
    console.log("Succo");
  }
//Generare password casuali della lunghezza specificata dall'utente
const letters =
  "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";

let PSW = '';
let PswLenth = 16; 
let min = 0  ;
let max = 62 ; //Numero di caratteri

function getRandomIntInclusive(min, max) {
  // genenera un numero random estremi inclusi. 
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
  // The maximum is inclusive and the minimum is inclusive
   }


function createPsw(PSW, PswLenth) {
  if (PswLenth >= 8) {
    for (let i = 0; i < PswLenth; i++) {
     PSW =  PSW + letters[getRandomIntInclusive(min, max)];
    }
    console.log("PSW  sicura: ", PSW);
  } else{
      console.log("PSW non sicura");
    }; 
}; 

createPsw(PSW, PswLenth)









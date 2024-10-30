// SWITCH statement un po' come il C++. 

// Ricordarsi di mettere il break alla fine del case. 

const fruit = "Banana";

switch (fruit) {
  case "Arancia":
    console.log("Le Arance costano 0.50€ al Kg");
    break;
  case "Pera":
    console.log("Le Pere costano 0.29€ al Kg");
    break;
  case "Banana":
    console.log("Esauriti, spiacente");
    break;

  default:
    console.log("Il negozio non è fornito di questo protto");
    break;
}
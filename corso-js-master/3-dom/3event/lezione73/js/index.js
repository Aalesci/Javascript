

////////////////////////////////////
////// Reference Functions  ////////
////////////////////////////////////

const btn = document.getElementById("btn");
const heading = document.querySelector("h1");
let number = 0;


// Per Prassi il nome della funzione richima quello che va a gestire 

function handleClick(){
    if (number < 5) {
      addHeading();
    } else {
      const headings = document.querySelectorAll('h3');
      headings.forEach( (el) => document.body.removeChild(el));
      number = 0 ;
      };
    };


const addHeading = function () {
  const title = document.createElement("h3");
  number++;
  title.innerText = `sono il div numero ${number}`;
  document.body.appendChild(title);
};

// btn.addEventListener("click", function () {
//   heading.classList.toggle("orange");
//   if (number < 5) {
//     addHeading();
//   }
// });

btn.addEventListener("click", handleClick);

// btn.addEventListener("click", addHeading); // NOTA IMPORTANTISSIMA: 
// qui scrivo la funzione senza le parentesi finali NON perchè mi sono 
// dimenticato ma perchè se metto le parentesi la funzione verrebbe eseguita 
// al omneto della compilazione del codice. E poi se clicco non funzionerebbe più. 

// se la funzione non ha return la funzione ritorna UNDEFINE. 
// questa funzione prende il nome di reference function!

// Esempio posso anche scrivere: 

// const gianni = addHeading; 
// btn.addEventListener("click", gianni);
// E funzionerebbe tutto.



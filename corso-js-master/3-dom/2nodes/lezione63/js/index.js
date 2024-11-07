// className
// classList
// Sono proprietà delle classi. 

const primo = document.querySelector(".primo"); 
const secondo = document.querySelector(".secondo"); 
// ricordarsi di usare gli short-cut di visual studio code
// in questo modo puoi scrivere in sue posti contemporaneamente.
// come si fa? tieni premuto 
const terzo = document.querySelector(".terzo"); 

// Ctr + alt più tastierino sotto. scrive più righe 

// contemporaneamnete 
// xdcdc
// xdcdc
// xdcdc
// xdcdc
// xdcdc

// selezionare la parte da commnetare + ctrl +ù
// sdkldsnf
// dsansal


// Riprendiamo con l'esercizio: 
console.log(primo);
console.log(primo.className); // ritorna il nome della classe

primo.className = 'text';  // posso assegnare delle classi 
primo.className = 'text2345';  // posso assegnare delle classi

console.log(primo.className); 

secondo.className = 'secondo red'; // coloro il secodno di rosso così. 
console.log(secondo);

//////////// Terzo -> Class list -> DOMToken list ///////////


terzo.classList.add('red'); 
terzo.classList.remove('red');

terzo.classList.add('text','red');  // sono metodi. 

terzo.classList.toggle('red');

const result =  terzo.classList.contains('red');


if (result)  {
    terzo.classList.remuve('red'); 
} else{
    terzo.classList.add('red');
}
// questo è quello che succede nel toggle. 

console.log('Terzo class list:' ,terzo.classList); //è quasi un array 
// di fatto è un DOMToken list. 


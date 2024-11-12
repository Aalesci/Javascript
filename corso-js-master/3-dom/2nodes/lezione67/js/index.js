//prepend
//innerText

// const root = document.querySelector("#root");


// const root = document.querySelector("#root");
const root = document.querySelector(`#root`);

//const heading = document.createElement("h2");
const heading = document.createElement("h2");

// heading.className = "blue";
heading.className = "blue"; 

// heading.innerText = "Sono il titolo";
heading.innerText = "Sono un titolo";

// root.prepend(heading);
root.prepend(heading);

console.log(heading.innerText);

// NOTA IMPORTANTISSIMA! SE SBAGLI LA SINTASSI DEI COMANDI NON FUNZIONA 
// E SOPRATUTTO NON TI DA ERRORE !

// ABBIAMO VISTO:  

// ---->>>> appendChild nuovo last child. 
// ---->>>> prepand vuole mettersi come nuovo First Child.

// ----> inner text invece è un altro modo per 
// inserire del testo dentro un elemento. 

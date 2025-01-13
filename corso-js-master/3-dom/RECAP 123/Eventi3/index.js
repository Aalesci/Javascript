

console.log('Lista oggetti selezionati:');

// lista di selettori: 

// Usa . per le classi.
// Usa # per gli ID.

// Seleziona il primo paragrafo con la classe "testo"
var primoParagrafo = document.querySelector('.testo');
console.log(primoParagrafo);

// Seleziona il div con l'ID "contenitore"
var contenitore = document.querySelector('#contenitore');
console.log(contenitore);

const cont2 = document.getElementById('contenitore');
console.log(cont2); 
// I due codici danno il medesimo risultato. 


// Seleziona tutti i paragrafi con la classe "testo"
var paragrafi = document.querySelectorAll('.testo');
console.log(paragrafi);



// VEDIAMO COME LUPPARE TRA i VARI ELEMNTI
const list = document.getElementsByTagName("li");
console.log(list);

//Array From
const newArray = Array.from(list);
//Spread Operator
//const newArray = [...list];

newArray.forEach(function (item, index) {
    item.style.color = "green";
    console.log(item, index)
    if (index === 2) { item.style.color = "red"; }
});


// seleziono gli elementi in base alla loro classe: 

const listaTesto = document.getElementsByClassName('testo');

const newArray_listaTesto = [...listaTesto];

newArray_listaTesto.forEach((el, index) => {
    el.style.color = 'blue'; // Imposta il colore blu per tutti gli elementi
  
    // Esempio di utilizzo dell'indice
    if (index === 3) {
      el.style.color = 'red'; // Cambia il colore dell'elemento all'indice 2 in rosso
    }
  });
  




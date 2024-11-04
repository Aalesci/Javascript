//Permette di selezionare un elemento in base al suo ID

// getElementById()


// INIZIAMO CON I SELETTORI

const titolo = document.getElementById("title"); 
console.log(titolo);
titolo.style.color = "green";


const btn = document.getElementById("btn").style.backgroundColor = "blue";

console.log(btn); // Nota in questa espressione otterrei
// solo il colore del bottone non il bottone. 



// infatti sarebbe più corretto scrivere:

const btn2 = document.getElementById("btn")
btn2.style.backgroundColor = 'Yellow'

// or

btn2.style.color = "green";

// Conviene eseguire queste operazioni nel CSS. !!!!
// il CSS viene caricato prima del nostro file javascript !!!!
// questo viene deciso nel file HTML ! Ma è corretto così. 



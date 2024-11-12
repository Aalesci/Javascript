//insertBefore('Elemento Da inserire', 'prima di quale Elemento')

const root = document.querySelector("#root");

const heading = document.createElement("h4");
heading.classList.add("blue");

heading.appendChild(document.createTextNode("Sono un H4"));

root.appendChild(heading);



// ESEMPIO CREATO DA ME PER PROVARE A RIFARE!   ////////////////////

// // Creare un nuovo elemento 'p'
var nuovoParagrafo = document.createElement('p');

// // aggiungo caratteristiche. 
nuovoParagrafo.id = 'mioP'; 
nuovoParagrafo.className = 'classe P'; 

// // Creare un nodo di testo
var testoParagrafo = document.createTextNode('Ciao, sono un nuovo paragrafo!');

// // Aggiungere il nodo di testo all'elemento 'p'
nuovoParagrafo.appendChild(testoParagrafo);

// // Aggiungere il nuovo elemento 'p' al body del documento
root.appendChild(nuovoParagrafo);

 // ESEMPIO CREATO DA ME PER PROVARE A RIFARE!   ////////////////////


////////////////////// MeTODO INSERT BEFORE ///////

const title =  document.createElement('H2');
const NewTitle = document.createTextNode('Nuovo Titolo');
title.appendChild(NewTitle);
root.insertBefore(title, heading); 

// Primo elemneto: Quello che voglio insereire. 
// Secondo elemento: Prima dell'elemento che voglio inserie.  

document.querySelector('.container-xl').insertBefore(title,root);

////////////////////// MeTODO INSERT BEFORE ///////
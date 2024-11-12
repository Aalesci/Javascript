

/////////// COME RIMPIAZZAREUN VECCHIO ELEMENTO CON UNO NUOVO! ////////////
/// replaceChild('Nuovo', 'Vecchio')


const root = document.querySelector("#root");

const heading = document.createElement("h4");
heading.classList.add("blue");

heading.appendChild(document.createTextNode("Sono un H4"));

root.appendChild(heading);


// Abbiamo creato l'h4 


// Abbiamo sostituito l'H4 con L'H6 

const title = document.createElement('h6');
title.classList.add("yellow");

title.appendChild(document.createTextNode('Sono un H6'));

root.replaceChild(title, heading);
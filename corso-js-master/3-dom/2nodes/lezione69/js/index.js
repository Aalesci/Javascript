//remove
//removeChild



const root = document.querySelector('#root');

const heading = document.querySelector("#heading"); 


// Le due possibilità : in cui rimuovo tutto Heading 
// RIMUOVO TUTTO L'ELEMENTO. 

// heading.remove();
//root.removeChild(heading);


// Qui in questo caso rimuovo solo un un componenete di Heading. 
const titolo = heading.querySelector("h1");

console.log(titolo);

heading.removeChild(titolo); 






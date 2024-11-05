// getAttribute()
// setAttribute()


// Accedere agli attributi di un elemento. 

// Gli attributi sono nell'HTML sono class = "container", 
// class= "button" , id ="root" .. ecc ecc..

// Il .button indica che stiamo cercando proprio una classe.
// Primo BOTTONE
const first = document.querySelector('.button-md');
console.log(first); // codice Html. 

const classValue = first.getAttribute("class");
console.log('Valore delle classe: ', classValue); // Il valore della classe.

const Value = first.textContent;
console.log('Nome del bottone:', Value); // Quello che c'è scritto.



// Secondo BOTTONE

const second = first.nextElementSibling;
second.setAttribute("class", classValue);


// Posso settarlo come voglio. 
second.setAttribute("data-prova", 'sugo');

const button = document.querySelectorAll(".button-md");
console.log('Nodelist: ', button);
// nota se avessi settato solo un valore, 


















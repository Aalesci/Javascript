//nodeValue
//textContent



// Accedo al nostro contenuto testuale.


const text = document.getElementById("text");
console.log(text);

const value = text.firstChild.nodeValue; // questa è una proprietà 
console.log(value);


const content = text.textContent; // questa è una proprietà 
console.log(content);
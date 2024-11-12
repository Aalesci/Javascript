// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)


// Creiamo degli elementi HTML Div -> root.

const root = document.querySelector('#root');
console.log(root);


// ho iserito l'elemento <div>Testo del div</div> 
const div = document.createElement("div");
const divText = document.createTextNode('Testo del div');
div.classList.add('calss');

div.appendChild(divText);
root.appendChild(div);


// Inserisco l'H4 
const heading = document.createElement('h4');
heading.classList.add('blue');
heading.appendChild(document.createTextNode('sono un H4'));
div.appendChild(heading);

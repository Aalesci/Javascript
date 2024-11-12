// insertAdjacentElement('posizione', Elemento)

const root = document.querySelector(`#root`);





// Insert ADjacent element. 
const heading = document.createElement('h2');

heading.innerText = 'Titolo232';
heading.classList.add("blue");

root.insertAdjacentElement("beforebegin", heading);  
root.insertAdjacentElement("afterbegin" ,heading); // prepand 
root.insertAdjacentElement("beforeend",heading); // appendChild 
root.insertAdjacentElement("afterend",heading);

// NOTE IMPORTANTI. 

// beforebegin  --> lo appendo prima che l'elemento cominci 
// afterbegin --> lo appendo appena l'elemnto (root) comincia
// beforend ---> lo appendo prima che l'elemneto (root) finisca
// afterend  -->lo appendo dopo che l'elemento finisce 








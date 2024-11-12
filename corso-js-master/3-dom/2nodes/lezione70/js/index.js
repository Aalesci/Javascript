// innerHTML

const root = document.querySelector(`#root`);
const heading = document.querySelector(`#heading`);
const list = document.querySelector(".list");



// INSERIAMO DIREATTAMEMTE DELL' HTML. 

console.log(list.textContent);
console.log(list.innerHTML);

list.innerHTML = `<li>Primo</li>  
                <li>Secondo</li> 
                <li>Secondo</li>
                <li>Secondo</li>
                <li>Secondo</li>`;


// Così posso inserire più elementi. 

list.insertAdjacentHTML('beforeend', '<li> CICCIO </li>')

list.insertAdjacentHTML('afterbegin', '<li> Cocco </li>')
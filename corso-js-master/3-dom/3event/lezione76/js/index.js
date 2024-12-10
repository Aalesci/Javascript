// Event Object
// Informazioni sull'evento triggerato
// Accedere all'elemento dal quale viene triggerato l'evento
// preventDefault()

const btn = document.getElementById("btn");
const heading = document.querySelector("h1");


// Event Object Parametro da cui possimo
// accedere dalla nostra call back function. 

heading.addEventListener("mouseenter", function (event){
    // console.log(event);
    // console.log(event.currentTarget);
    event.currentTarget.classList.add('orange');
});


// Accedo dalla reference function
function handleClick(e, text) {
    console.log(e.currentTarget);
    console.log(text);
};

btn.addEventListener("click",(e) => handleClick(e, 'CioPP'));


// Caso di prevent default
const link = document.getElementById('link');
link.addEventListener('click', (e) =>{
    e.preventDefault();
});
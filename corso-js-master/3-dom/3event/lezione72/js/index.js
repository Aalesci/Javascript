//1- Seleziona elemento
//2- Seleziona il trigger
//3- Gestisci l'evento



const btn = document.getElementById("btn");

const heading = document.querySelector("h1");
let number = 0;


const addHeading = function(){
    const title = document.createElement('h3')
    number ++;
    // Opzione 1: 
    title.innerText = 'sono un H3';  
   
    // Opzione 2: 
    // Template litteral string `string text ${expression} string text`

    title.innerText = `Sono il tentativo N: ${number}`;

    document.body.appendChild(title);
};


//1- Seleziona elemento

btn.addEventListener('click', function(){
    //console.log('ciao');
    if (number < 10 ){
        addHeading(); 
    }
}); 
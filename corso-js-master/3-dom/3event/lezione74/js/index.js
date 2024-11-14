// Mouse Events
// mousedown - Bottone viene premuto
// mouseup - Bottone viene rilasciato
// mouseenter - Mouse entra all' interno dell'elemento
// mouseleave - Mouse esce dall'elemento

const btn = document.getElementById("btn");

const heading = document.querySelector("h1");


let printEvent = function (text) {
    console.log(text || "click" ); 
    // || = nel caso non fosse valorizata allora scrivo click
}

btn.addEventListener( 'click', function () {
    printEvent("click"); 
});

btn.addEventListener( 'click', () => printEvent("click 2 Function")); // questa la più comune



// opzione 2:  

function printEvent2(text){
    return function () {
        console.log( text || "click" );
    }; 
}

// modo diverso di chiamare la funzione: 
btn.addEventListener("click", printEvent2("click")); 



// btn.addEventListener('click', function () {
//     console.log("Click");
// });

// btn.addEventListener('mousedown', function () {
//     console.log("Down");
// });

// btn.addEventListener('mouseup', function () {
//     console.log("Up");
// });

// Click è la somma degli eventi. 




//////////////////////////////////////////////////
// Altri due esempi //


heading.addEventListener('mouseenter', function () {
    heading.classList.add("orange"); 
});

heading.addEventListener('mouseleave', function () {
    heading.classList.remove("orange"); 
});


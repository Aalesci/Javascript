// Key Events
// keypress - Al premere di un tasto
// keydown - Tasto rimane premuto
// keyup - Il tasto "torna su"

const input = document.getElementById("text");


let printEvent = (text) => {
    console.log(text);  // || le due stangette corrispondo a un oppure. 
};



input.addEventListener('keydown', function ()  {
    printEvent("down");
}) ;

input.addEventListener('keypress', function ()  {
    printEvent('Press');
}) ;

input.addEventListener('keyup', function ()  {
    printEvent("Up");
}) ;


// Down: il tasto viene premuto, 
// Press il tasto arriva in fondo, 
// Up il tasto risale. 


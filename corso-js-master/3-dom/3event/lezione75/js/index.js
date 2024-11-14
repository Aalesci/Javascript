// Key Events
// keypress - Al premere di un tasto
// keydown - Tasto rimane premuto
// keyup - Il tasto "torna su"

const input = document.getElementById("text");


let printEvent = (text) => {
    console.log(text || "Press");
};


input.addEventListener('keypress', function ()  {
    printEvent();
}) ;









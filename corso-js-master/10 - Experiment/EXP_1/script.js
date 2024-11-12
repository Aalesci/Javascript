const domande = [
    "Qual é la tua opinione?",
    "Non c'é niente di meglio!",
    "Caffé o té?",
    "Dove é la stazione?",
    "É tutto pronto?",
    "La torta é buonissima!",
    "Non c'era più nulla da fare.",
    "Che ora é?",
    "É possibile visitare il museo?",
    "Vuoi venire al cinema?"
];

function caricaDomande() {
    const quizDiv = document.getElementById("quiz");
    domande.forEach((domanda, index) => {
        const div = document.createElement("div");
        div.className = "question";
        if (index === 0) div.classList.add("active");
        div.innerHTML = `
            <label for="q${index}">${domanda}</label>
            <input type="text" id="q${index}" name="q${index}" />
        `;
        quizDiv.appendChild(div);
    });
}

function mostraDomanda(index) {
    const domande = document.querySelectorAll(".question");
    domande.forEach((domanda, i) => {
        domanda.classList.toggle("active", i === index);
    });
}

let currentQuestion = 0;

function precedente() {
    if (currentQuestion > 0) {
        currentQuestion--;
        mostraDomanda(currentQuestion);
    }
}

function prossimo() {
    if (currentQuestion < domande.length - 1) {
        currentQuestion++;
        mostraDomanda(currentQuestion);
    }
}

function verificaRisposte() {
    const risposteCorrette = [
        "Qual è la tua opinione?",
        "Non c'è niente di meglio!",
        "Caffè o tè?",
        "Dove è la stazione?",
        "È tutto pronto?",
        "La torta è buonissima!",
        "Non c'era più nulla da fare.",
        "Che ora è?",
        "È possibile visitare il museo?",
        "Vuoi venire al cinema?"
    ];

    let punteggio = 0;
    risposteCorrette.forEach((risposta, index) => {
        const input = document.getElementById(`q${index}`).value;
        if (input.trim() === risposta) {
            punteggio++;
        }
    });

    const risultatoDiv = document.getElementById("risultato");
    risultatoDiv.textContent = `Hai risposto correttamente a ${punteggio} domande su 10.`;
}

// Carica le domande quando la pagina è caricata
document.addEventListener("DOMContentLoaded", caricaDomande);

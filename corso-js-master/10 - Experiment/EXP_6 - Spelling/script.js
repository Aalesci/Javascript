

const exercise = [
  { guid: "0001", tipoEX: "Spelling", domanda: "Casa", opzioni: "", rispostaCorretta: "" },
  { guid: "0002", tipoEX: "Spelling", domanda: "Macchina", opzioni: "", rispostaCorretta: "" },
  { guid: "0003", tipoEX: "Spelling", domanda: "Aereo", opzioni: "", rispostaCorretta: "" },
  { guid: "0004", tipoEX: "Spelling", domanda: "Treno", opzioni: "", rispostaCorretta: "" },
  { guid: "0004", tipoEX: "Spelling", domanda: "Bus", opzioni: "", rispostaCorretta: "" },
];

let domandaCorrente = 0;
let punti = 0;

const quizContainer = document.getElementById('quiz');
const resultDiv = document.getElementById('result');

function mostraDomanda() {
  if (domandaCorrente < exercise.length) {
    const riga = exercise[domandaCorrente];


    // quizContainer.innerHTML = `
    //     <div class="question-box">
    //       <p>${riga.domanda}</p>
    //     </div>

    //      <div class="options">
    //        ${riga.opzioni.map((opzione, index) => `<button class="option${index + 1}" onclick="controllaRisposta('${opzione}')">${opzione}</button>`).join('')}
    //      </div> 
    //   `;

    
  } else {
    quizContainer.innerHTML = '';
    resultDiv.textContent = `Hai risposto correttamente a ${punti} domande su ${exercise.length}.`;
  }
};

function controllaRisposta(risposta) {
  const domanda = exercise[domandaCorrente];
  if (risposta === domanda.rispostaCorretta) {
    punti++;
  }
  domandaCorrente++;
  mostraDomanda();
};

mostraDomanda();
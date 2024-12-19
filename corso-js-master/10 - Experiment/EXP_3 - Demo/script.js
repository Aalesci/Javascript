

  const exercise = [
    { guid: "0001", tipoEX: "Verbo essere", domanda: "Io ***** felice oggi", opzioni: ["sono", "è", "siamo"], rispostaCorretta: "sono"}, 
    { guid: "0002", tipoEX: "Verbo essere", domanda: "Tu ***** il mio migliore amico", opzioni: ["sono", "è", "sei"], rispostaCorretta: "sei"}, 
    { guid: "0003", tipoEX: "Verbo essere", domanda: "Noi ***** pronti per partire", opzioni: ["siete", "siamo", "é"], rispostaCorretta: "siamo"}, 
    { guid: "0004", tipoEX: "Verbo essere", domanda: "Lei ***** molto intelligente", opzioni: ["siete", "è", "sei"], rispostaCorretta: "è"},
    { guid: "0004", tipoEX: "Verbo essere", domanda: "L'Angelica è *****", opzioni: ["bellissima", "inteligente", "Dolce qunado vuole", "Cattiva"], rispostaCorretta: "Dolce qunado vuole"},

];

  let domandaCorrente = 0;
  let punti = 0;

  const quizContainer = document.getElementById('quiz');
  const resultDiv = document.getElementById('result');

  function mostraDomanda() {
    if (domandaCorrente < exercise.length) {
      const riga = exercise[domandaCorrente];
      quizContainer.innerHTML = `
        <div class="question-box">
          <p>${riga.domanda}</p>
        </div>
        <div class="options">
          ${riga.opzioni.map((opzione, index) => `<button class="option${index + 1}" onclick="controllaRisposta('${opzione}')">${opzione}</button>`).join('')}
        </div>
      `;
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
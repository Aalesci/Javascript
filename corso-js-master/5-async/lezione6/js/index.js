// Fare un zuppa
// Bollire Acqua 10 min
// Tagliare le Carote
// Buttare Carote per 5 minuti
// Tagliare le Cipolle
// Buttare Cipolle per 5 minuti

// async await
// try catch

const boilWater = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("boilWater");
      resolve();
    }, 3000);
  });
};

const makeCarote = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("makeCarote");
      resolve();
    }, 3000);
  });
};

const stopPromise = () => {
  return new Promise((_, reject) => {
    reject("Errore");
  });
};

const makeCipolle = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("makeCipolle");
      resolve();
    }, 3000);
  });
};

const makeZuppa = async function () {  
  try{
  
  await boilWater();
  await makeCarote();
  await stopPromise(); // Rappresenta il mio caso di errore
  await makeCipolle();

  console.log('Zuppa preonta')
  } catch(error){
    console.log(error);
  } finally{ 
    console.log('Finito'); 
  }

};


makeZuppa(); 

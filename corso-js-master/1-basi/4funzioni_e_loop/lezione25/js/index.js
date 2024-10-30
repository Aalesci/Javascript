

function isGreaterThen10(param) {
    if (typeof param === "number") {
      return param > 10;
    }
    return false;
  }

console.log(isGreaterThen10(11));

if (isGreaterThen10(5)) {
    console.log('Maggiore di 10');
    } else {
    console.log('Minore di 10');
}


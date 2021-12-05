// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

// Ejemplos:

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
      

// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

export default function isValid(letter) {
  const checkNumberOfParentheses = letter => {
    let left = 0;
    let right = 0;
    [...letter].forEach((char) => {
      if (char === "(") {
        left++;
      }
      if (char === ")") {
        right++;
      }
    });
    return left === right;
  };

  const checkEmptyParentheses = (letter) => {
    const gifts = letter.split(" ");
    const thereAreEmpty = gifts.some((gift) => {
      const re = /\(\)/;
      return re.test(gift);
    });
    return !thereAreEmpty;
  };

  const checkBrackets = (letter) => {
    const gifts = letter.split(" ");
    const thereAreBrackets = gifts.some((gift) => gift.includes("{") || gift.includes("["));
    return !thereAreBrackets;
  };

  return checkNumberOfParentheses(letter) && checkEmptyParentheses(letter) && checkBrackets(letter)
}
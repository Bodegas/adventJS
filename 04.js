// ¡Es hora de poner el árbol de navidad en casa! 🎄

// Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

// Si le pasamos el argumento 5, se pintaría esto:

// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____

// Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

// Otro ejemplo con un árbol de altura 3:

// __*__
// _***_
// *****
// __#__
// __#__

// Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.

export default function createXmasTree(height) {
  if (height < 1 || height > 100) {
    return "";
  }

  let tree = "";
  const maxWidth = 2 * (height - 1) + 1;
  for (let i = 0; i < height; i++) {
    const numberOfAsterisk = 2 * i + 1;
    const asteriks = "*".repeat(numberOfAsterisk);
    const numberOfUnderline = maxWidth - numberOfAsterisk;
    const halfUnderline = "_".repeat(numberOfUnderline / 2);
    tree = `${tree}\n${halfUnderline}${asteriks}${halfUnderline}`;
  }
  const halfFoot = "_".repeat((maxWidth - 1) / 2);
  let foot = `${halfFoot}#${halfFoot}`;
  tree = `${tree}\n${foot}\n${foot}`;
  console.log(tree);
  console.log(tree.trim());
  return tree;
}

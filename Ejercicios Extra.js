/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:  

   let paresClaveValor = [];

   for (let property in objeto) {
      let newArray = [property, objeto[property]];
      paresClaveValor.push(newArray);
   }
   return paresClaveValor;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   let abcdario = 'abcdefghijklmnñopqrstuvwxyz'
   let newObj = {};

   for (let i = 0; i < abcdario.length; i++) {
      let letra = abcdario[i];
      let contador = 0;

      for (let j = 0; j < string.length; j++) {
         if (string[j] === letra) {          //Si la letra actual del string coincide con la letra actual del alfabeto, se incrementa el contador
            contador++
         }
      }
      if (contador > 0) {                 //si el contador es mayor que cero, 
         newObj[letra] = contador;        //se agrega una propiedad al objeto de resultado con el nombre de la letra actual del alfabeto y el valor del contador
      }
   }
   return newObj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   let abcdarioMayus = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
   let abcdarioMinus = 'abcdefgghijklmnñopqrstuvwxyz';
   let letrasMayus = [];
   let letrasMinus = [];

   for (let i = 0; i < string.length; i++) {
      if (abcdarioMayus.includes(string[i])) {
         letrasMayus.push(string[i]);
      }
      if (abcdarioMinus.includes(string[i])) {
         letrasMinus.push(string[i]);
      }
   }
   return letrasMayus.join('') + letrasMinus.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let palabras = frase.split(' ');

   let palabrasInvertidas = palabras.map(function (palabra) {
      return palabra.split('').reverse().join('');
   });

   let fraseInvertida = palabrasInvertidas.join(' ');

   return fraseInvertida;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let str = numero.toString();
   let strInverse = str.split('').reverse().join('');

   if (str === strInverse) {
      return "Es capicua";
   } return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   return string.replace('a', '').replace('b', '').replace('c', '');
   //return string.replace(/[abc]/g, '');                //cumplen la misma funcion de forma mas sencilla. /[abc]/ es el parametro a eliminar y 'g' indica q la busqueda debe ser global
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   arrayOfStrings.sort((a, b) => a.length - b.length);
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   arr3 = [];

   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            arr3.push(array1[i])
         }
      }
   }
   if (arr3.length === 0) {
      return arr3;
   } return arr3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

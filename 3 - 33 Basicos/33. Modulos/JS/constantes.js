//para que se importe es necesario agregar el export
//de esta manera se exporta sólo lo que necesites ocupar.
export const PI = Math.PI;

export let usuario = "Osmar";

//no puede usarse default al comienzo en variables.
//como no se declara hasta despues; marca error, por ende es necesario exportarla post definición
const pass = "qwerty";

//export default pass;

//funcion expreasada
//recordar que si mando a llamar hello antes de la expresion habrá error en caso de ser una funcion expresada
const hello = () => console.log("Hola");

//default, sirve para que cuando se exporte, se cargue automaticamente, y solo puede tenerse un default.

//funcion definida
export default function saludar() {
  console.log("Hola modulos +ES6");
}

//las unicas que permiten la exportación por defecto son las funciones y las clases

export class Saludar {
  constructor() {
    console.log("Hola soy una clase");
  }
}

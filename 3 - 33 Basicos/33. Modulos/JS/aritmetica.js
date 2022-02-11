//para utilizar estas funciones también es necesario realizar un export
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

//asi mismo podemos englobar las funciones en un objeto e importarlo
export const aritmetica = {
  sumar,
  restar,
};

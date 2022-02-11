//se importa de la direccion proporcionada
import saludar, { Saludar, PI, usuario } from "./constantes.js";
//podemos crear un alias a la importación utilizando el "as"
import { aritmetica as calculos } from "./aritmetica.js";
//import React, { Component } from "react";

console.log("Archivo Modulos");
console.log(PI, usuario);
console.log(calculos.sumar(3, 4));
console.log(calculos.restar(3, 4));
saludar();
let saludo = new Saludar();
saludo;

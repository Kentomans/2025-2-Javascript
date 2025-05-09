// Ejercicio: Simulador de clima
// Crear un programa que simule un clima basado en la temperatura actual.
// El programa debe pedir al usuario la temperatura actual y mostrar un mensaje indicando si hace frío, calor o si está templado.
// La lógica es la siguiente:
// - Si la temperatura es menor a 10 grados, mostrar "Hace frío"
// - Si la temperatura está entre 10 y 20 grados, mostrar "Está templado"
// - Si la temperatura está entre 20 y 30 grados, mostrar "Hace calor"
// - Si la temperatura es mayor a 30 grados, mostrar "Hace mucho calor"

const { ask } = require('../helpers/input.js');

async function main() {
  
    
    const number = Number(await ask("Ingresa un número "));
// TODO : Convertir a switch
const multiplo5 = (number % 5 === 0);
const multiplo3 = (number % 3 === 0);
const multiploAmbos = multiplo5 && multiplo3;

switch( multiplo5 || multiplo3 || multiploAmbos){
    case multiploAmbos:
        console.log("Múltiplo de 3 y 5");
       break;
 case multiplo5:
    console.log("Múltiplo de 5");
   break;
   case multiplo3:
    console.log("Múltiplo de 3");
   break;
 default:
    console.log("No es múltiplo de 3 ni de 5");
   break;
}


}

main();

// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.

const { exit } = require('process');
const { ask } = require('../helpers/input');

async function main() {

  const op = 0;
  do{

  console.log('\n-----CALCULADORA-----');
  console.log('1.Suma');
  console.log('2.Resta');
  console.log('3.Multiplicacion');
  console.log('4.Division');
  console.log('5.Salir');
  
  const op = Number(await ask('\nIngresa número de la Opcion: '));

  if(op>=0 && op<=4){

  const num1 = Number(await ask('\nIngresa el primer número: '));
  const num2 = Number(await ask('Ingresa el segundo número: '));
 

    switch(op){
      case 1:
    const s = num1 + num2;
      console.log(`\nLa Suma de ${num1} + ${num2} = ${s}`);
      break;

      case 2:
       const r = num1 - num2;
        console.log(`\nLa Resta de ${num1} - ${num2} = ${r}`);
        break;

       case 3:
      const m = num1 * num2;
      console.log(`\nLa Multiplicacion de ${num1} * ${num2} = ${m}`);
      break;

      case 4:
      const  d = num1 / num2;
        console.log(`\nLa Division de ${num1} / ${num2} = ${d}`);
        break;

    }
 
   }else if(op == 5){
    return 0;
  }else{
    console.log("\nIngrese Una Opcion Valida");
  }

  }while (op==2);
}

main();

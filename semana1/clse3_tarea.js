
const { ask } = require('../helpers/input');

async function main() {
  const dia = Number(await ask("Ingresa un número del 1 al 7:"));
  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  // TODO : Implementar la lógica para mostrar el día de la semana según el número ingresado
  // Ejemplo: Si el usuario ingresa 1, debe mostrar "Lunes"

  if (dia >= 1 && dia <= 7) {
    console.log(diasSemana[dia - 1]);
  }
  else {
    console.log("Numero no válido");
  }
}

main();
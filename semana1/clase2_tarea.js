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
    const op = 0;
    do{

        console.log('\n-----Temperatura-----');
        console.log('1.Consultar');
        console.log('2.Salir');
        
        const op = Number(await ask('\nIngresa número de la Opcion: '));
      
        if(op===1){
        const tem = Number(await ask('\nIngresa la temperatura: '));
        
        if(tem <=10){
            console.log('\nHace Frio');
        }else if(tem >10 && tem<=20){
            console.log('\nEsta Templado');
        }else if(tem >20 && tem<=30){
            console.log('\nHace Calor');
        }else if(tem >30){
            console.log('\nHace mucho Calor');
        }else{
            console.log('\nOpcion Invalida');
        }

    }else if(op === 2){
        return 0;
    }else{
        console.log('\nOpcion Invalida');
    }
   
    }while (op!=2);
    


}

main();
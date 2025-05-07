const { ask } = require('../helpers/input.js');

async function main() {
 
    const age = Number(await ask('Cuantos ages tienes?'));

    if(age >1 && age<18){

    }else if(age>=18 && age<65){

    }else{

    }

}

main();
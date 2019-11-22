const { crearArchivo } = require('./multiplicar/multiplicar.js')

//const operacion = require('./multiplicar/multiplicar.js')
//crearArchivo = operacion.crearArchivo;

let base = process.argv[2]; //lectura de la base por consola

crearArchivo(base).then((resultado) => {
    console.log(`Archivo ${resultado} creado!`);
}).catch((error) => {
    console.log(error);
});
//imprime todas las variables de 
//proceso actual
//console.log(process.argv);
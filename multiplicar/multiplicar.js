//requireds
const fs = require('fs'); //archivos propios de node
//const fs = require('express');//archivos instalados
//const fs = require('./fs');//nuestros achivos

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }


        let data = '';
        //tabla de multiplicar
        for (let i = 1; i <= 10; i++) {
            //console.log(`${base}*${i}=${base*i}`);
            data = data + `${base}*${i}=${base*i}\n`; //cadena de texto
        }

        //funcoin que crea un archivo de texto (nombre,texto,callback)
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (error) => {
            if (error)
                reject(error);
            else
                resolve(`tabla-${base}.txt`);

        });

        // para regresar al directerio anterior     ../
        // para ir al directorio raiz               ./

    })
}
module.exports = {
    crearArchivo

}
const argv = require('./config/yargs').argv;
const clima = require('./clima/clima')
const lugar = require('./lugar/lugar');




let getInfo = async(direccion) => {
    let coors = await lugar.getLugar(direccion);
    let temp = await clima.getClima(coors.latitud, coors.longitud);
    return `La temperatura actual en ${argv.direccion} es ${temp}º centígrados`;
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log('Error:', e));
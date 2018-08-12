const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direcciòn de la ciudad para obtener clima',
            demand: true
        }
    }).argv;

module.exports = {
    argv
}
const axios = require('axios');




const getLugar = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA3Ic879j-Zk3lcUXoovj6fZFSloB8USgs`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${direccion}`);
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        latitud: coors.lat,
        longitud: coors.lng
    }
}

module.exports = {
    getLugar
}
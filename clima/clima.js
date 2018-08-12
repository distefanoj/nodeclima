const axios = require('axios');



const getClima = async(lat, long) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=f4bec54c36e57ec546f2c1a4a6ef646d`)
    return resp.data.main.temp;

}




module.exports = {
    getClima
}
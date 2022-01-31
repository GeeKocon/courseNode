const request = require('request')


const forecast = (latitude,longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=8ae9c7ad6326e350fb8fc86762a63981&query=' + latitude + ',' + longitude + '&units=m';

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('No internet connection', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else{

            const temperature = body.current.temperature;
            const windSpeed = body.current.wind_speed;
            const weatherDescription = body.current.weather_descriptions[0]
            callback(undefined, 'It is currently ' + temperature + ' degrees out. There is a ' + windSpeed + ' wind speed. \n' + weatherDescription)
        }
    })
}
module.exports = forecast;


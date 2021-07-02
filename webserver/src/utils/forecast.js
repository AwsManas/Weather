const request = require('postman-request')
const forecast = (latitude,longitude,callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=e6aa12e814d5dc9f0595297368ebc4d3&query='+encodeURIComponent(latitude.toString())+',' + encodeURIComponent(longitude.toString())
//    console.log(url)
    request({url ,json : true},(error,{ body } )=>{
        if(error)
        {
         callback("Cant connect to internet",undefined)
        }
    else if (body.error)
        {
            callback("Unable to find loction",undefined)
        }
    else
        {
            callback(undefined,{
                weatherType : body.current.weather_descriptions[0],
                currentTemp : body.current.temperature,
                FeelsLike : body.current.feelslike
            })
        }
    })
    
}
module.exports = forecast
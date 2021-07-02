const request = require('postman-request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
//const url = "http://api.weatherstack.com/current?access_key=e6aa12e814d5dc9f0595297368ebc4d3&query=37.8267,122.4233&units=s"
const address = process.argv[2]
if(!address)
    {
        console.log("Please provide address")
    }
//setTimeout(()=>{
//    console.log("After 2 secs")
//} , 2000)
//
//setTimeout(()=>{
//    console.log("After 0 secs")
//},0)

//request({ url : url , json : true} ,(error,response) => {
////    console.log(response.body.current)
//    if(error)
//        {
//         console.log("Cant connect to internet")
//        }
//    else if (response.body.error)
//        {
//            console.log("Unable to find loction")
//        }
//    else
//        {
//    console.log(response.body.current.weather_descriptions[0]+" : It is currently "+ response.body.current.temperature + " degrees out, it feels like " + response.body.current.feelslike + " degrees out")
//        }
//})
else 
    {
geocode(address,(error,{longitude , latitude, location}={})=>{
    if(error)
        {
            return console.log(error)
        }
    forecast(longitude,latitude,  (error, dataforecast) => {
    if(error)
        {
            return console.log(error)
        }
    console.log("Location : " ,location)
    console.log(dataforecast)
    
})
})
    }
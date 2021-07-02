const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const request = require('postman-request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
// help


app.use(express.static(path.join(__dirname,'../public')))
const viewPaths = path.join(__dirname,'../templates/views')
const partialPaths = path.join(viewPaths,'../partials')
hbs.registerPartials(partialPaths)

app.set('views',viewPaths)
app.set('view engine','hbs')


app.get('/',(req,res)=>{
  res.render('index',{
      title : 'Weather App',
      name : 'Manas',
      message : 'This is home page'
  })  
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About page',
        name : 'Manas',
        message : 'You are awesome'
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address)
        {
            return res.send({
                error : 'No address passed'
            })
        }
    
    geocode(req.query.address,(error,{longitude , latitude, location}={})=>{
    if(error)
        {
            return res.send({error : error})
        }
    forecast(longitude,latitude,  (error, dataforecast) => {
    if(error)
        {
            return res.send({error : error})
        }
    console.log("Location : " ,location)
    console.log(dataforecast)
        res.send({
        location : location,
        weather : dataforecast,
        address : req.query.address
    })
    
})
})
})
app.get('/products',(req,res)=>{
    if(!req.query.search)
        {
            return res.send({
                error : 'Seaarch term must be there'
            })
        }
    console.log(req.query)
    res.send({
        product : [],
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Manas',
        message : 'What can i do?'
    })
})
app.get('*',(req,res)=>{
    res.render('error404',{
        title:'Error 404',
        name:'Manas',
        message:'Request page not found'
    })
})
app.listen(3000,()=>{
    console.log("Port running is 3000")
})

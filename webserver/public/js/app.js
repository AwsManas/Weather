console.log("Client side Javascript running")
// node js coe wont work 


const weatherform = document.querySelector('form')
const searchtext = document.querySelector('input')
const paraone = document.querySelector('#message-1')
const paratwo = document.querySelector('#message-2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    paraone.textContent=''
    paratwo.textContent=''
    const location = searchtext.value
    if(!location)
        {
            paratwo.textContent='A location must be entered'
            console.log('A location must be entered')
        }
    else
    {
    paraone.textContent='Loading...'    
    const url = 'http://localhost:3000/weather?address='+location
    fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
            {
                paraone.textContent=''
                paratwo.textContent='Error occured  - '+data.error
                console.log(data.error)
            }
        else 
            {
                paraone.textContent=data.location+'--'+data.weather.weatherType+'--'+data.weather.currentTemp+'--'+data.weather.FeelsLike
                console.log(data.location+'--'+data.weather.weatherType+'--'+data.weather.currentTemp+data.weather.FeelsLike)
            }
    })
    })
    }
})
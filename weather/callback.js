setTimeout(()=> {
    console.log("After 2 secs")
},3000)

const geocode = (address,callback) => {
    setTimeout(()=> {
    const data = {
        latitude : 0,
        longitude : 0
    }
    callback(data)
},2000)
}

geocode('India',(data) => {
    console.log(data)
})

// same but not using return 
//const add = (a,b,callback)=>{
//    setTimeout(()=>{
//    callback(a+b)
//    },2000)
//}
//add(1,4,(sum)=>{
//    console.log(sum)
//})
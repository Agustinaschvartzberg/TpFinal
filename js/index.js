let apiKey= 'ba0b591fbb4dcbf21e7a279fceca5d5e'
fetch(`=${apiKey}`)
.then (function (response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})


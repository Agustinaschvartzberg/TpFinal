let apiKey= 'aa7bab2a0951387ff624d304c5d79062'
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




// buscador

function buscar() {
    textInput = document.getElementsById ("#busqueda")
    volordebusqueda= textInput.value()
    window.location.href = "./serch-results.html?" + "HOLA" + valordebusqueda
    URLSearchParams()
}

let botonBusqueda= document.getElementsById ("boton-buscar")
botonBusqueda.addEventListner ("click",buscar)

let contendor= document.querySelector('.contendor')

for (let i=0 ; i<productos.data.lenght ; i++) {
    contenedor.inner
}


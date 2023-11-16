let key="aa7bab2a0951387ff624d304c5d79062";
let parametrosURL= new URLSearchParams(location.search);
let id= parametrosURL.get("id");
let nombreGenero= parametrosURL.get("nombre_genero_pelicula");
let endpoint= `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${id}`;

let titulo= document.querySelector(".titulo");
let contendorGenero = document.querySelector(".contenedorDetalleGenero");
titulo.innerHTML = nombreGenero ;


// En este fetch lo que hacemos es buscar las peliculas por genero con el query que nos llega por la url
fetch(endpoint)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let peliculas = data.results;
   
   
    // En este then lo que hacemos es recorrer los resultados y mostrarlos en pantalla
    for (let i = 0; i < peliculas.length; i++) {
     
        // Cada pelicula tiene un titulo, una imagen y un id
     
        // El id lo usamos para crear el link a la pagina de detalle
      contenedorGenero.innerHTML += `<li class="itemDetalleGenero"><a href="./detail-movie.html?id=${peliculas[i].id}"><img src="https://image.tmdb.org/t/p/w500${peliculas[i].poster_path}" alt="Poster">
            <p>${peliculas[i].original_title}</p>
            </a></li>`;
    }
  });

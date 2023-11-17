//Definimos las variables importantes
let consulta = location.search;
let consulta_objeto = new URLSearchParams(consulta);
let id = consulta_objeto.get("id");
let key = "aa7bab2a0951387ff624d304c5d79062";

let urlpeliculas = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
let reviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}`;
let trailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`;

// En este fetch lo que hacemos es buscar las peliculas con el query que nos llega por la url
fetch(urlpeliculas)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // En este then lo que hacemos es recorrer los resultados y mostrarlos en pantalla
    // El id lo usamos para crear el link a la pagina de detalle
    let contendor = document.querySelector(".contenedorDetallePelicula");
    let titulo = data.original_title;
    let imagen = data.poster_path;
    let sinopsis = data.overview;
    let fechaestreno = data.release_date;
    let duracion = data.runtime;
    let calificacion = data.vote_average;
    let generos = [];
    for (let i = 0; i < data.genres.length; i++) {
      generos.push(data.genres[i]);
    }
    let generosMostrar = "";
    for (let i = 0; i < generos.length; i++) {
      generosMostrar += `<a  class="detalle-genero" href="./detail-genres-movie.html?id=${generos[i].id}&nombre_genero_pelicula=${generos[i].name}">${generos[i].name}</a>`;
    }
    // Muestra en pantalla los datos de la pelicula
    contendor.innerHTML = `
    <div class="detalle">
    <img src="https://image.tmdb.org/t/p/w500${imagen}" alt="Poster">
    <div class="detalle-texto">
    <h2>${titulo}</h2>
    <p>Fecha de estreno: ${fechaestreno}</p>
    <p>Sinopsis: ${sinopsis}</p>
    <p>Duración: ${duracion} minutos</p>
    <p>Calificación: ${calificacion}</p>
    <p>Géneros: ${generosMostrar}</p>
    </div>
    </div>
    `;
  })
  .catch(function (error) {
    console.log(error);
  });

// En este fetch lo que hacemos es buscar las reviews con el query que nos llega por la url
fetch(reviews)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // En este then lo que hacemos es recorrer los resultados y mostrarlos en pantalla
    let contenedorReviews = document.querySelector(".contenedorReviews");
    let reviews = data.results;
    // Si el array de resultados es igual a 0, no tiene reviews y mostramos en pantalla
    if (reviews.length == 0) {
      contenedorReviews.innerHTML += `
      <div class="review">
      <h3>No hay reviews para esta pelicula</h3>
      </div>
      `;
    } else {
      for (let i = 0; i < reviews.length; i++) {
        let autor = reviews[i].author;
        let contenido = reviews[i].content;
        contenedorReviews.innerHTML += `
      <div class="review">
      <h3>${autor}</h3>
      <p class="contenido">${contenido}</p>
      </div>
      `;
      }
    }
  })
  .catch(function (error) {
    console.log(error);
  });


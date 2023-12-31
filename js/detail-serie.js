let consulta = location.search;
let consulta_objeto = new URLSearchParams(consulta);
let id = consulta_objeto.get("id");
let key = "aa7bab2a0951387ff624d304c5d79062";

let urlpeliculas = `https://api.themoviedb.org/3/tv/${id}?api_key=${key}`;
let reviews = `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${key}`;
let trailer = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}`;

// En este fetch lo que hacemos es buscar las peliculas con el query que nos llega por la url
fetch(urlpeliculas)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    // En este then lo que hacemos es recorrer los resultados y mostrarlos en pantalla
    // Cada serie tiene un titulo, una imagen y un id
    // El id lo usamos para crear el link a la pagina de detalle
    let contendor = document.querySelector(".contenedorDetallePelicula");
    let titulo = data.name;
    let imagen = data.poster_path;
    let sinopsis = data.overview;
    let fechaestreno = data.first_air_date;
    let calificacion = data.vote_average;
    let generos = [];
    for (let i = 0; i < data.genres.length; i++) {
      generos.push(data.genres[i]);
    }
    let generosMostrar = "";
    for (let i = 0; i < generos.length; i++) {
      generosMostrar += `<a class="detalle-genero" href="./detail-genres-tv.html?id=${generos[i].id}&nombre_genero_tv=${generos[i].name}">${generos[i].name}</a>`;
    }
    // Muestra en pantalla los datos de la pelicula
    contendor.innerHTML = `
    <div class="detalle">
    <img src="https://image.tmdb.org/t/p/w500${imagen}" alt="Poster">
    <div class="detalle-texto">
    <h2>${titulo}</h2>
    <p>Fecha de estreno: ${fechaestreno}</p>
    <p>Sinopsis: ${sinopsis}</p>
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
      <h3>No hay reviews para esta serie</h3>
      </div>
      `;
    } else {
      // Si el array de resultados es mayor a 0, recorremos el array y mostramos en pantalla
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

// En este fetch lo que hacemos es buscar el trailer con el query que nos llega por la url
fetch(trailer)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // En este then lo que hacemos es recorrer los resultados y mostrarlos en pantalla
    let contenedorTrailer = document.querySelector(".contenedorTrailer");
    // Si no hay resultados, mostramos que no hay trailer
    if (data.results.length == 0) {
      contenedorTrailer.innerHTML += `
      <div class="review">
      <h3>No hay trailer para esta serie</h3>
      </div>
      `;
    }
    // Si hay resultados, obtenemos el primer resultado para mostrar en pantalla
    let trailer = data.results[0];
    // Cada trailer tiene un key que es el id del video
    // Usamos ese id para mostrar el video en pantalla
    let key = trailer.key;
    // Muestra en pantalla el trailer con un iframe
    contenedorTrailer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  })
  .catch(function (error) {
    console.log(error);
  });
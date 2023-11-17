let key = "aa7bab2a0951387ff624d304c5d79062";

let peliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`;
let series = `https://api.themoviedb.org/3/genre/tv/list?api_key=${key}`;

// En este fetch lo que hacemos es buscar los generos de peliculas
fetch(peliculas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // En este then lo que hacemos es recorrer los resultados y mostrarlos en pantalla
    // En este caso, los resultados son un array de generos
    let generos = data.genres;
    let contenedor = document.querySelector(".listaPeliculas");
    for (let i = 0; i < generos.length; i++) {
      // Recorremos los resultados y los mostramos en pantalla
      contenedor.innerHTML += `<li><a href="./detail-genres-movie.html?nombre_genero_pelicula=${generos[i].name}&id=${generos[i].id}">${generos[i].name}</a></li>`;
    }
  })
  .catch(function (error) {
    console.log(error);
  });

// Hacemos lo mismo que antes
fetch(series)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let generos = data.genres;
    let contenedor = document.querySelector(".listaTV");
    for (let i = 0; i < generos.length; i++) {
      contenedor.innerHTML += `<li><a href="./detail-genres-tv.html?nombre_genero_tv=${generos[i].name}&id=${generos[i].id}">${generos[i].name}</a></li>`;
    }
  })
  .catch(function (error) {
    console.log(error);
  });

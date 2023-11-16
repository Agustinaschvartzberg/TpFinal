let keyy = "aa7bab2a0951387ff624d304c5d79062";
let seriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${keyy}`;
let peliculasMasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${keyy}`;
let peliculasMasVotadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${keyy}`;

// Hacemos el fetch de las series populares
fetch(seriesPopulares)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let contenedorSeries = document.querySelector(".Series");
    let series = data.results;
    for (let i = 0; i < 8; i++) {
      contenedorSeries.innerHTML += `<li class="item"><a href="./detail-serie.html?id=${series[i].id}"><img src="https://image.tmdb.org/t/p/w500${series[i].poster_path}" alt="Poster">
            <p>${series[i].name}</p>
            <p>${series[i].first_air_date}</p>
            </a></li>`;
    }
  })
  .catch(function (error) {
    console.log(error);
  });

  // Hacemos el fetch de las peliculas mas populares
fetch(peliculasMasPopulares)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  // En este then lo que hacemos es recorrer los resultados y mostrarlos en pantalla
  // En este caso, los resultados son un array de peliculas
  // Cada pelicula tiene un titulo, una imagen y un id
  // Vamos a utilizar el id para ir al detalle de cada pelicula
  // Vamos a mostrar los primeros 8


  let contenedorPopulares = document.querySelector(".Peliculas-Populares");
  let peliculasPopulares = data.results;
  for (let i = 0; i < 8; i++) {
    contenedorPopulares.innerHTML += `<li class="item"><a href="./detail-movie.html?id=${peliculasPopulares[i].id}"><img src="https://image.tmdb.org/t/p/w500${peliculasPopulares[i].poster_path}" alt="Poster">
          <p>${peliculasPopulares[i].original_title}</p>
          <p>${peliculasPopulares[i].release_date}</p>
          </a></li>`;
  }
})
.catch(function (error) {
  console.log(error);
});


// Hacemos el fetch de las peliculas mas votadas
fetch(peliculasMasVotadas)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  // En este then lo que hacemos es recorrer los resultados y mostrarlos en pantalla
  // En este caso, los resultados son un array de peliculas
  // Cada pelicula tiene un titulo, una imagen y un id
  // Vamos a utilizar el id para ir al detalle de cada pelicula
  // Vamos a mostrar los primeros 8
  let contenedorMasVistas = document.querySelector(".Peliculas-mas-vistas");
  let peliculasMasVistas = data.results;
  for (let i = 0; i < 8; i++) {
    contenedorMasVistas.innerHTML += `<li class="item"><a href="./detail-movie.html?id=${peliculasMasVistas[i].id}"><img src="https://image.tmdb.org/t/p/w500${peliculasMasVistas[i].poster_path}" alt="Poster">
          <p>${peliculasMasVistas[i].original_title}</p>
          <p>${peliculasMasVistas[i].release_date}</p>
          </a></li>`;
  }
})
.catch(function (error) {
  console.log(error);
});

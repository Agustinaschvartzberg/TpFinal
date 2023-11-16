let keyy = "aa7bab2a0951387ff624d304c5d79062";
let seriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${keyy}`;
let peliculasMasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${keyy}`;
let peliculasMasVotadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${keyy}`;

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
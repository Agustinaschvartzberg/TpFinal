let campo=document.querySelector("#buscador");

let aviso = document.querySelector(".textoAviso");
let formulario = document.querySelector("#formularioBusqueda");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  console.log(campo.value);
  console.log("Error. Sin enviar");
  if (campo.value == "") {
    aviso.innerText = "El campo no puede estar vacío";
    aviso.style.color = "white";
  } else if (campo.value.length < 3) {
    aviso.innerText = "Debe ingresar más caracteres";
    aviso.style.color = "white";
  } else {
    this.submit();
  }
});

let consulta = location.search;
let consulta_objeto = new URLSearchParams(consulta);
let buscado = consulta_objeto.get("search");
let key = "aa7bab2a0951387ff624d304c5d79062";
let urlpeliculas = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${buscado}`;
let urlseries = `https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${buscado}`;

// En este fetch lo que hacemos es buscar las peliculas con el query que nos llega por la url
fetch(urlpeliculas)
  .then(function (response) {
    return response.json();
  })
  .then(function (resultados) {
    // En este then lo que hacemos es recorrer los resultados y mostrarlos en pantalla
    let titulo = document.querySelector(".buscado");
    // En este caso, los resultados son un array de peliculas
    if (resultados.results.length == "") {
      titulo.innerText = `No se encontraron resultados para ${buscado}`; //crear una alert
    } else {
      titulo.innerText = `Resultados para ${buscado}`;
    }
    let resultadosContenedor = document.querySelector(".resultadosBusqueda");
    for (let i = 0; i < resultados.results.length; i++) {
      // Recorremos los resultados y los mostramos en pantalla
      // Cada pelicula tiene un titulo, una imagen y un id
      // El id lo usamos para crear el link a la pagina de detalle
      let pelicula = resultados.results[i];
      let titulo = pelicula.title;
      let imagen = pelicula.poster_path;
      let estreno = pelicula.release_date;
      let id = pelicula.id;
      resultadosContenedor.innerHTML += `<li class="pelicula"><a href="./detail-movie.html?id=${id}"><img src="https://image.tmdb.org/t/p/w500${imagen}" alt="Poster">
            <p>Nombre: ${titulo}</p>
            <p>Estreno: ${estreno}</p>
            </a></li>`;
    }
  })
  .catch(function (error) {
    console.log(error);
  });


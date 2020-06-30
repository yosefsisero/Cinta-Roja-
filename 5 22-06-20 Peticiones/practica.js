/*1.- Hacer una petición a cualquier pokemon y mostrar sus 
tipos.   https://pokeapi.co/*/

/*2.- Hacer una funcion que haga una petición 
    (Ejemplo: peticionLibro(“i robot”);
    Buscar un libro y traer el o los autores del primer libro
    http://openlibrary.org/search.json?q=i+robot) */

const request = require('request')

request('http://openlibrary.org/search.json?q=i+robot', function(error, response, body){
    console.log(error)
    console.log(response.statusCode)
    let a = JSON.parse(body)
    console.log(a.docs[0].author_name)
} )


/*    
3.- Hacer una petición por autor y devolver la lista de 
    sus libros
        http://openlibrary.org/search.json?author=asimov*/

  request('http://openlibrary.org/search.json?author=asimov', function(error, response, body){
         console.log(error)
         console.log(response.statusCode)
         let a = JSON.parse(body)
         for(let i = 0; i < a.docs.length; i++){
             console.log(a.docs[i].title_suggest)
         }
          
 } )


/*        
4.- Hacer una petición y devolver el género de la banda deseada
    http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse*/

    request('http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse',  function(error, response, body){
        console.log('Error', error)
        console.log(response.statusCode)
        let data = JSON.parse(body)
        console.log(data.artists[0].strGenre)
    })



 /*   
5.- Hacer una petición a la swapi a un personaje y obtener 
    sus películas.  https://swapi.co/   */


    request('https://swapi.dev/api/people/2/', function(error, response, body){
        console.log('Error', error)
        console.log(response.statusCode)
        let data = JSON.parse(body)
        console.log(`El personaje ${data.name} aparece en las siguientes peliculas ${data.films[0]}.`)
    })

 

 /*                   
6.- Devolver los asteroides que sean potencialmente peligrosos
    para la tierra de la semana pasada hasta el día de ayer.
                    https://api.nasa.gov/    */

/*
7.- Traer los primeros 151 pokemon de la primera generacion y 
    devolver un arreglo de objetos con el nombre, sus moves, 
    tipos, tamaño y peso.
    https://pokeapi.co/*/


    const request = require("request");

    const POKEAPI_URL = "https://pokeapi.co/api/v2/generation/1/";
    request(POKEAPI_URL, (err, res, body) => {
      let respuesta = JSON.parse(body).results;
    
      for (let i = 1; i <= 151; i++) {
          let Pokemon = {
            nombre: respuesta[i].name
            // movimientos: respuesta[i].moves,
            // tipos: respuesta[i].types,
            // altura: respuesta[i].height,
            // peso: respuesta[i].weight,
          };
          console.log(Pokemon);
      
      }
    });



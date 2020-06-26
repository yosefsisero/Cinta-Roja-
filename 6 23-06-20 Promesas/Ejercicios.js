const axios = require('axios')
/*----------------------------------


IMPORTANTE: PARA HACER QUE FUNCIONE HAY QUE COMPROBAR BIEN LOS DATOS 
CON POSTMAN Y DESPUES EJECUTAR LA FUNCION QUE QUERRAMOS


------------------------------------*/ 

/*Escribe el código que permita hacer las operaciones elementales
de la siguiente API genérica (Hay que leer con GET, Crear con POST, Editar con Put y borrar con DELETE):
         https://goodreads-devf-aaron.herokuapp.com/docs/ 
    Recuerda probar con Postman
    cómo hay que hacer las peticiones a la API
    para ver qué y cómo responde el servidor.*/


    /*
    1.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para crear un autor nuevo. 
        La función debe retornar el autor nuevo en una promesa.*/

     function crear(){
        let URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'
        axios.post(URL, {

            "name": "Yosef",
            "last_name": "SIS",
            "nacionalidad": "MX",
            "biography": "Esto si funciono",
            "gender": "M",
            "age": 20,
            "is_alive": true
        })

        .then((response) => {
          console.log("esto esta pasando en THEN");
          console.log(response.data);
        })
        .catch((error) => {
          console.log("Estamos en el catch");
          console.log(error.response.data);
        });
      
    }
     
    crear()


     /* 
    2.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para hallar un 
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor. */
        
      
function recibe(id){

    let URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`

    axios.get(URL)

    .then((response)=> {
        console.log("esto esta pasando en THEN");
        console.log(response.data);
    })

    .catch((error) => {
        console.log("Estamos en el catch");
        console.log(error.response.data)
    })

}

recibe(6714)



   /*     
 3.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para modificar un autor existente.
        Al ejecutar La función, esta debe retornar el autor 
        modificado en una promesa.*/

function modificar(){

    let URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/4686/' 

    axios.put(URL, {

        "id": 4686,
        "name": "Mi segundo post",
        "last_name": "Apellido",
        "nacionalidad": "MX",
        "biography": "No entiendo nada",
        "gender": "M",
        "age": 3445,
        "is_alive": true
    })

    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error.response.data)
    })
}

modificar()


  /*   
    4.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para eliminar un
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor.*/

function borrar(id){
    let URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${id}/`

    axios.delete(URL)

    .then((response) => {
        console.log("Se borro correctamente");
        console.log(response.data)
    })
    .catch((error) => {
        console.log("Estamos en el catch");
        console.log(error.response.data)
    })
}

borrar(4756)
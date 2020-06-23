/*1.- Muestra un mensaje en consola mediante un callback. 
La función de orden superior que escribas debe poder mostrar el mensaje 
como console.warn, 
console.log, console.info (Todos son lo mismo, solo pueden poner colores deiferentes).*/

function saludar(callback){

console.log('lo que sea')
    callback()
}

function reir(){
    console.log ('jajajajaj')
}

saludar(reir)

/*
2.- Crear una función de orden superior que reciba como
    argumento una variable de cualquier tipo y un callback. 
    La función de orden superior debe retornar como resultado, mediante el callback, 
    cual es el tipo de dato de la variable ingresada e imprimir su contenido.*/


function comida(variable, callback){
  callback(variable)
  
}
function tipo(a){
    console.log(typeof(a))
}

comida('hola', tipo)

/*3.- Crear una función de orden superior que reciba como 
    argumentos dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números.*/

function math(numero1, numer02, callback){
    callback(numero1, numer02)
}

function sumar(a, b){
  console.log (a + b) 
}
function restar(a, b){
    console.log (a - b)
}
function mult(a, b){
    console.log (a * b)
}

math(2,2, sumar)

/*4.- Escribe una función de orden superior que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayúsculas o en minúsculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELARTO*/

 function palabra(callback, variable){
     callback(variable)
 }           

function mayus(a){
   console.log(a.toLocaleUpperCase())
}

function minus(a){
  console.log(a.toLocaleLowerCase()) 
}

palabra(mayus, 'pejelagarto')
palabra(minus,'PEJELAGARTO')






/*5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
    EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
    mayores a dos horas (hacer la comparación en horas) 
    mediante un callback.*/


    function numeros(a, callback){
        callback(a)
    }
    function mayores(b){
        let numeros = b
        let mayores = [];
        for (let i=0;i<numeros.length;i++)
        if (numeros[i] >= 120)
        mayores.push(numeros[i]);
        console.log(mayores)
        
    }
    numeros([120, 80, 200, 100],mayores)

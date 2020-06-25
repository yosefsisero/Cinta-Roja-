

function getUsers(callback){

    let datos = [
        {'name': 'Juan', 'age': 40 },
        {'name': 'pablo', 'age': 50 },
        {'name': 'jaime', 'age': 30 }
    ]
    setTimeout(()=>{
        callback(datos, 'recibiendo datos')
    }, 3000)
    
}

console.log('obteniendo datos')
getUsers(function(data, mensaje){
    console.log(data)
    console.log(mensaje)
}
)

/*
lo que estamos haciendo es como invertir la funcion, es decir 
en el renglon 11 ya pusimos el callback diciendo los datos 
y los que queremos que diga y en el renglon 16 armamos la 
funcion que le vamos a pasar los parametros que escribimos antes
*/ 

/*
3.- Crear una función de orden superior que reciba como 
    argumentos dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números.
     */

 
function operacion(num1, num2, operacion /*callback = operacion*/){
   return operacion(num1, num2)
}     

function suma(num1, num2){
    return num1 + num2
}

function resta(num1, num2){
    return num1 - num2
}

function mult(num1, num2){
    return num1 * num2
}

console.log(operacion(7, 8, suma))
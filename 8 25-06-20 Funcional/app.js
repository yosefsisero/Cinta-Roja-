
/*
Cuando llamas el método map en un array (lista), este ejecuta el 
callback en cada elemento dentro de él, retornando un nuevo array 
con los valores que el callback retorna.
*/

let data = [12, 22, 10, 2, 9]
let double = data.map(function(elements){
    return elements * 2
})
console.log('datos originales: ', data)
console.log('datos al doble: ', double)

/*
 En cambio cuando usamos el metodo forEach tenemos que crear un arreglo antes de correlo
 y usar el push para poner lo que estamos iterando con lo que queramos hacer en este caso 
 multiplicarlo
 */

let dobles = new Array()

let dobs = data.forEach(function(elems){
    dobles.push(elems * 2)
})

console.log(dobles)

/*
El método filter como lo dice filtra el arreglo
 */

let ages = [33, 12, 19, 18, 2, 17, 14, 22]

let underAged = ages.filter((elements)=>{
    return elements < 18 
})

console.log(underAged)


/* sort ordena por orden tanto en letras como en numeros */

underAged.sort()
console.log('estos son menores de edad: ' + underAged)

let alumnos = ['Alberto', 'Juan', 'Beto', 'Eddy', 'Jose']
alumnos.sort()
console.log(alumnos)


/* pop borra el ultimo*/

ages.pop()



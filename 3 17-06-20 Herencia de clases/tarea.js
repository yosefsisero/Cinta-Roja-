/*1. Hacer superclase Maestro y subclases Maestro de Física y 
   Maestro de Música y a cada uno asignarle su materia y 
   calcular su promedio de grupo a partir de calificaciones	 
   (puedes usar arreglos). El maestro de física tiene un 
   atributo "antigüedad" que guarda un valor numérico, 
   mientras que el maestro de música tiene un atributo "edad"
   también guardando un valor numérico.*/

class Maestro{
    constructor(nombre, materia, calificaciones ){ 
    this.nombre = nombre    
    this.materia = materia
    this.calificaciones = calificaciones
    }
    promedio(){
        let total = 0
        for(let i = 0; i < this.calificaciones.length; i++){
             total = total + this.calificaciones[i] 
           
        }
        let c = total / this.calificaciones.length
    
        return `El promedio de sus alumnos es: ${c}`
    }
}


class Fisica extends Maestro{
    constructor(nombre, materia, calificaciones, antigüedad){
        super(nombre, materia, calificaciones)
        this.antigüedad = antigüedad
    }

}


class Musica extends Maestro{
    constructor(nombre, materia, calificaciones, edad){
        super(nombre, materia, calificaciones)
        this.edad = edad
    }

}

let Jaime = new Fisica ('Jaime', 'profesor de física', [9, 7, 0, 5, 7], 20)

let Pedro = new Fisica ('Pedro', 'profesor de física', [9, 7, 10, 5, 6], 25)

console.log(Jaime)


/*2.- Crear la clase construcción que hereda a otras dos 
    clases "casa" y "edificio". 
    a. Sus atributos son: numPuertas, numVentanas, numPisos,
       direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un método que regresa los metros 
       cuadrados
    c. Un método debe regresar la direccion
    d. Un método debe permitir modificar la direccion
    e. Buscar la mejor manera de aprovechar la herencia*/


    class construccion{
        constructor(numPuertas, numVentanas, numPisos, Direccion, altura, largo, ancho){
            this.numPuertas = numPuertas
            this.numVentanas = numVentanas
            this.numPisos = numPisos
            this._Direccion = Direccion
            this.altura = altura
            this.largo = largo
            this.ancho = ancho
        }
        mcuadrados(){
          let total = this.largo * this.ancho  
          return `Tu propiedad tiene ${total} metros cuadrados`
        }
        getDireccion(){
            return this._Direccion
        }
        setDireccion(Direccion){
            this._Direccion = Direccion
        }
    }

    class casa extends construccion{
        constructor(numPuertas, numVentanas, numPisos, Direccion, altura, largo, ancho){
            super(numPuertas, numVentanas, numPisos, Direccion, altura, largo, ancho)
        }
    }

    class edificio extends construccion{
        constructor(numPuertas, numVentanas, numPisos, Direccion, altura, largo, ancho){
            super(numPuertas, numVentanas, numPisos, Direccion, altura, largo, ancho)
        }
    }

    let casa1 = new casa (20, 30, 5, 'a la vuelta del marenas', 20, 20, 100)
    let marenas = new edificio (50, 100, 30, 'a la vuelta de casa', '900m', 50, 500 )

console.log(casa1)
console.log(casa1.mcuadrados())
console.log(marenas)
console.log(marenas.mcuadrados())
casa1.setDireccion('aca')
casa1.getDireccion()



/*
3.- Crear una clase Bebida que herede a dos clases Cerveza 
    y Refresco. Ambas clases deben tener la propiedad 
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo 
    porcentajeAlcohol
. Crear los getters y setters
    correspondientes.*/
/*4.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100*/


class Electrodoméstico{
    constructor(precio, color, capacidad){
         this.precio = precio
         this.color = color
         this.capacidad = capacidad
    }
}

class heladera extends Electrodoméstico{
    constructor (precio, color, capacidad, consumoEnergetico=100){
        super(precio, color, capacidad)
        this.consumoEnergetico = consumoEnergetico
    }
   
}


/*    
5.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.*/


class Lavadora extends Electrodoméstico{
    constructor(precio, color, capacidad, carga, consumoEnergetico=100){
        super(precio, color, capacidad)
        this.carga = carga
        this.consumoEnergetico = consumoEnergetico
    }
    precioFinal(){
       var a = this.carga * this.consumoEnergetico
       return `El precio final es de $${a}`
    }
}

let LG = new Lavadora (1000, 'blanca', '5kg', 10, 100  )

console.log(LG.precioFinal())
class Mascota {
    constructor (nombre="Fido", color="Cafe"){
        this.nombre = nombre
        this.color = color
      
    }
    comer(alimento){
        return `Soy ${this.nombre} y como ${alimento}`
    }

}
class Perro extends Mascota{
    constructor(nombre, color,patas, raza, peso){
        super(nombre, color)
        this.patas = patas
        this.raza = raza
        this.peso = peso
        // this.alimento = 'Croquetas'
    }
}
class Pez extends Mascota{
    constructor(nombre, color, tipoDeAgua, cantidadDeAlimento, tipoDePez){
        super(nombre, color)
        this.tipoDeAgua = tipoDeAgua
        this.tipoDePez = tipoDePez
        this.cantidadDeAlimento = cantidadDeAlimento
    }
}
let firulais = new Perro('Firulais', 'verde',4,'Pug','5kg' )
let nemo = new Pez('Nemo', 'Naranja', 'Agua Salada', '10gms', 'Pez Payaso')
console.log(firulais.comer('Carnita'))
console.log(nemo)
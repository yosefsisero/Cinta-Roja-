class Largometraje{
    constructor(titulo, duracion){
        this._titulo = titulo
        this._duracion = duracion
      
    }
    getTitulo(){
        return this._titulo
    }
    getDuracion(){
        return this._duracion
    }
    setTitulo(titulo){
        this._titulo = titulo
    }
    setDuracion(){
        this._duracion = duracion
    }
}
class Pelicula extends Largometraje{
    constructor(titulo, duracion, genero, clasificacion){
        super(titulo, duracion, )
        this._genero = genero
        this._clasificacion = clasificacion
    }
    getGenero(){
        return this._genero
    }
}
class Documental extends Largometraje{
    constructor(titulo, duracion, pais, patrocinador){
        super(titulo, duracion, )
        this.pais = pais
        this.patrocinador = patrocinador
    }
}
class Cine{
    constructor(nombre){
        this.nombre = nombre
    }
    // MAS CORTO Y ENTENDIBLE
    reproducir(largometraje){
        return `Estan viendo ${largometraje.getTitulo()}`
    }
    // DEMASIADO LARGO 
    // reproducirPelicula(pelicula){
    //     return `Estan viendo ${pelicula.titulo}`
    // }
    // reproducirDocumental(documental){
    //     return `Estan viendo ${documental.titulo}`
    // }
}
let Juanita = new Pelicula('la pelicula de Juanita', '2 Horas','Comedia', 'A')
let Michael = new Documental('Michael Jordan, el documental', '3 Horas','USA', 'NBA')
let cinemex = new Cine('Cinemex')

console.log(cinemex.reproducir(Michael))
console.log(cinemex.reproducir(Juanita))
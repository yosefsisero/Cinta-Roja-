/*Objetos:  
11.- Haz una clase llamada Persona que siga las siguientes condiciones:
	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	 calcularIMC()
	 esMayorDeEdad()
	 El constructor pide nombre, edad,sexo,peso y altura
	 Generar el RFC a partir de el nombre, edad y sexo*/


class Persona{
    constructor(nombre, apellido1, apellido2, edad, cumple, sexo, peso, altura){
        this.nombre = nombre
        this.apellido1 = apellido1
        this.apellido2 = apellido2
        this.edad = edad
        this.cumple = cumple
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }
  IMC(){
    
     var imc = this.peso / (this.altura ** 2 )
     return `${imc}es el índice de masa corporal de ${this.nombre}`
  }

  mayorDeEdad(){
      if(this.edad >= 18){
          return `${this.nombre} es mayor de edad`
      } else{
        return `${this.nombre} es menor de edad`
      }
  }
  RFC(){
      var a = this.apellido1.slice(0,2)
      var b = this.apellido2.slice(0,1)
      var c = this.nombre.slice(0,1)
      var d = this.cumple.slice(8,10)
      var e = this.cumple.slice(3,5)
      var f = this.cumple.slice(0,2)
      var g = a+b+c+d+e+f
      return  `${g} es el RFC de ${this.nombre}`
  }

}

let yosef = new Persona ('yosef', 'sisero', 'misraji', '20', '13/12/1999', 'masculino','67', '1.69' )


console.log(yosef.IMC())
console.log(yosef.mayorDeEdad())
console.log(yosef.RFC())


/*12.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
	 -Titular y cantidad, estado 
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
	 Como regla de negocio no debe de tener más de $900 y menos de $1*/

 
     class Cuenta{
        constructor (titular, cantidad){
            this.titular = titular;
            this.cantidad = cantidad;
            
        }
       
        depositar(deposito){
            if(this.cantidad + deposito <= 900 && this.cantidad + deposito >=10){
            var a = this.cantidad + deposito;
            this.cantidad = a
            return `Gracias por tu deposito tu saldo es de ${a}`;}
            else {
            return `No puedes depositar eso, Busca otro Banco,`;
            }
        }
        retirar(retiro){
           if(this.cantidad - retiro <= 900 && this.cantidad - retiro >=10){
            var a = this.cantidad - retiro;
            this.cantidad = a
            return `Que tengas Buen dia, tu saldo es de ${a}`;}
            else {
            return `No puedes retirar tanto, tu saldo no puede ser menor de 10,`;
            }
        }
    }
    
    
    let yosef = new Cuenta("yosef", 890);
    
    
    console.log(jacobo.depositar(908))
    console.log(jacobo.retirar(8))
    console.log(jacobo.cantidad)
    
    
    
class NombreDeLaClase{
    constructor(atributo){
        this.propiedad=atributo
    }
    metodo(){
        console.log(this.propiedad)
    }
}
let instancia = new NombreDeLaClase("valor")
//instancia.metodo()
let variable = instancia.propiedad

class Persona{
    constructor(nombre,){
        this.nombre=nombre
    }
    presentarse(){
        console.log("mi nombre es",this.nombre)
    }
}

let gabriel = new Persona("Gabriel")
gabriel.presentarse()
//Ejercicio: Agregar mas atributos a la clase y crear una instancia con sus propios nombres
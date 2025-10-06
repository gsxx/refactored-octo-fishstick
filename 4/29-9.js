class Padre{
    constructor(nombre,apellido){
        this.nombre=nombre
        this.apellido=apellido
    }
}

class Madre{
    constructor(nombre){
        this.nombre=nombre
    }
}
class Hijo extends Madre{
    constructor(nombre,apellido,año){
        super(nombre)
        this.padre=new Padre(nombre,apellido)
        this.año=año
    }
    nombreCompleto(){
        console.log("mi nombre es "+this.nombre+" "+this.padre.apellido)
    }
}
let gabriel = new Hijo("Gabriel","Sanchez","Cuarto")
gabriel.nombreCompleto()
//constante
const anchoDePixel = 8
let tamañoDeImagen = 2 * anchoDePixel
const paso = 2
const total = 10
let contador = 4
for ( ; contador < total ; contador+=paso) {
    console.log(contador)
}
tamañoDeImagen = tamañoDeImagen * anchoDePixel
console.log("tamañoDeImagen",tamañoDeImagen)
//anchoDePixel = tamañoDeImagen * anchoDePixel
console.log("anchoDePixel",anchoDePixel)
console.log(tamañoDeImagen)

let funcion = () => console.log(1)

funcion()
const edad = 10
const mayorDeEdad = 18
const esMayorDeEdad = edad > mayorDeEdad
function condicional () {
    if (esMayorDeEdad){
        console.log("es Mayor De Edad")
        return
    }
    console.log("no es mayor de edad")
}
const numero1 = 37
const numero2 = 67
const sonIguales = numero1 == numero2
function igualar(){
    if (sonIguales){
        console.log("son Iguales")
        return
    }
    console.log("no son iguales")
}
condicional()
igualar()
const objeto = {nombre: "gabriel",edad:24}
function cumplirAños() {
    objeto.edad++
}
cumplirAños()
console.log(objeto)

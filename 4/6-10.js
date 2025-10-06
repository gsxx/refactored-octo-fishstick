let numero = 12321
let cadena = String(numero)
let lista = cadena.split("")
let darVuelta = lista.reverse()
cadena = darVuelta.join("")
let numeroAlReves = parseInt(cadena)
let esPalindromo = numero === numeroAlReves
console.log(esPalindromo);

let numeroDeEntrada = "XVII"
const numerosRomanos = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
}
let respuesta = 0
for (let i = 0; i<numeroDeEntrada.length - 1;i++){
    let caracterActual = numeroDeEntrada[i]
    let caracterSiguiente = numeroDeEntrada[i+1]
    if (numerosRomanos[caracterActual]<numerosRomanos[caracterSiguiente]){
        respuesta -= numerosRomanos[caracterActual]
    } else {
        respuesta += numerosRomanos[caracterActual]
    }
}
respuesta+=numerosRomanos[numeroDeEntrada[numeroDeEntrada.length-1]]
console.log(respuesta)
// Generador de números romanos desde decimal
function aRomano(numero) {
    const valores = [
        { rom: 'M', val: 1000 },
        { rom: 'CM', val: 900 },
        { rom: 'D', val: 500 },
        { rom: 'CD', val: 400 },
        { rom: 'C', val: 100 },
        { rom: 'XC', val: 90 },
        { rom: 'L', val: 50 },
        { rom: 'XL', val: 40 },
        { rom: 'X', val: 10 },
        { rom: 'IX', val: 9 },
        { rom: 'V', val: 5 },
        { rom: 'IV', val: 4 },
        { rom: 'I', val: 1 }
    ];
    let resultado = '';
    for (let i = 0; i < valores.length; i++) {
        while (numero >= valores[i].val) {
            console.log(numero)
            resultado += valores[i].rom;
            numero -= valores[i].val;
        }
    }
    return resultado;
}

// Ejemplo de uso:
console.log(aRomano(2025)); // MMXXV
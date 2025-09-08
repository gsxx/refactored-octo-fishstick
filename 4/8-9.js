let palabras = ["manzana", "banana", "cereza", "pera"];
let ultimaPalabra = palabras[palabras.length - 1];
//console.log(ultimaPalabra);
palabras.forEach(element => {
    element = "la "+element
    console.log(element) 
});
console.log(palabras)
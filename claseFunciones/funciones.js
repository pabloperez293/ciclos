// funciones de Declaracion 
function saltar(){

    console.log("salto alto")
    console.log("salto medio")
    console.log("salto bajo")

}
// ejecutar funcion
saltar();

let miFuncion = saltar

console.log(miFuncion)
console.log(typeof miFuncion)

let ejecucion = saltar()
console.log(ejecucion)
console.log(typeof ejecucion)

// Toda funcion retorna a algo
// En caso que no sea explicito devolvera undefined

function sumar(){
    console.log
}

// funciones de Expresion ambas hacen lo mismo
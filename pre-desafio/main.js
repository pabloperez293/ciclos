// Botones de operaciones
function sumar(){
    let x = parseInt(document.getElementById("valor1").value)
    let y = parseInt(document.getElementById("valor1").value)
    alert(x + y)
}

function restar(){
    let x = parseInt(document.getElementById("valor1").value)
    let y = parseInt(document.getElementById("valor1").value)
    alert(x - y)
}

function dividir(){
    let x = parseInt(document.getElementById("valor1").value)
    let y = parseInt(document.getElementById("valor1").value)
    alert(x / y)
}

function multiplicar(){
    let x = parseInt(document.getElementById("valor1").value)
    let y = parseInt(document.getElementById("valor1").value)
    alert(x * y)
}
function porcentaje(){
    let x = parseInt(document.getElementById("valor1").value)
    let y = parseInt(document.getElementById("valor1").value)
    alert(x * 100 / y)
}



// Boton de borrado 
function clear() {
    document.getElementById("formulario").requestFullscreen()
}
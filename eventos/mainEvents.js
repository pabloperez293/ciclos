// 1) Forma menos recomendada
function saludar(){
    document.querySelector("h2").textContent = "Buenos dias"
}

const cambiarColor = () => {
    document.querySelector("p").style.color = 'blue'
}
const volverColor = function() {
    document.querySelector("p").style.color = 'black'
}

// 2) Otra manera de usar events

let btn1 = document.querySelector("button")

btn1.addEventListener("click",function(){
    console.log("click al buytton")
})

// la manera de arriba y la de abajo funcionan dela misma manera.

// document.querySelector("button").addEventListener("click",function(){
//     console.log("click al buytton")
// })

// primero tengo q definir la funcion antes de llamarla , linea 28 al 30
const clickUsuario =() =>{
    console.log("click al boton")
}

btn1.addEventListener("click", clickUsuario)

// function clickUsuario(){
//     console.log("click al boton")
// }

// 3) metodo de event

const btn2 = document.querySelector("#btn2")

// btn2.onclick = function(){
//     console.log("hiciste un clik")
// }

btn2.onclick = ()=>{
    console.log("hiciste un clik")
}
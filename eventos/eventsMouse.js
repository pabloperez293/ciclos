// Eventos de mouse 
// mouse down cuando presionamos
// click es el evento mas utilizado
// dbclick reaccionar al doble click
// mouseup al soltar el btn

let nav = document.querySelector("ul")

// Con esto hace funcionar la busqueda del input
const busqueda = document.querySelector(".busqueda")

// busqueda-addEventListener("input", ()=>{
//     console.log("escribiendo")
// })

// Eventos de telado ingresando y dejando de escribir en el teclado.
busqueda.addEventListener("keydown", ()=>{
    console.log("abajo")
})

busqueda.addEventListener("keyup", ()=>{
    console.log("arriba")
})

// es cuando pierdo foco en donde estoy apuntando
busqueda.addEventListener("blur", ()=>{
    console.log("se desconecto de la busqueda")
})

// Parecido al efecto hover este evento         
nav.addEventListener("mouseenter", ()=>{
    console.log("entro a navegar")

    nav.style.backgroundColor = "black"
    nav.style.color = "white"
})

nav.addEventListener("mouseout", ()=>{
    console.log("saliendo del navegar")

    nav.style.backgroundColor = "white"
    nav.style.color = "black"
})

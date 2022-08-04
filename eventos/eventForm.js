

const formulario = document.querySelector(".formulario")

const link = document.querySelector("a")

link.addEventListener("click", (evt)=>{
    evt.preventDefault()
    console.log("click en el link")
})

formulario.addEventListener("submit", (evt)=>{
    evt.preventDefault()
    console.log("enviado")
    let entrada = document.querySelector("#entrada")
    if(entrada.value === ""){
        console.log("No se cargo")
    }else{
        console.log(entrada.value)
    }
})
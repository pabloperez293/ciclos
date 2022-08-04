// // Esto sirve cuando el script esta arriba de todo para que cargue rapido
document.addEventListener("DOMContentLoaded",  ()=>{
    let btn_on = document.querySelector("#btn_on")
    let btn_off = document.querySelector("#btn_off")

    document.querySelector("#resultado").innerHTML = 
    "<p> hola gente </p>"
})

function encender(){
    document.querySelector("img").setAttribute("src", "flow.jpg")  
}

function apagar(){
    document.querySelector("img").setAttribute("src", "flow2.jpg")
}


btn_on.addEventListener("click", encender)
btn_off.addEventListener("click", apagar)

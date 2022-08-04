// variable global
let player = document.querySelector("#player")

const playMusic = () =>{
    player.play()
}

const pauseMusic = () =>{
    player.pause()
}

const stopMusic = () =>{
    player.pause()
    player.currentTime = 0
}
const changeVolumen = (e) => {
    player.volumen = e.target.value 
}

const changeSong = (evt) => {
    // console.log(evt.target.textContent)
    player.setAttribute("src", `media/${evt.target.textContent}.mp3`)
    player.play()
}

const randoMize = () =>{
    const songs = document.querySelectorAll("li")
    let item  = Math.floor(Math.random() * songs.lenght)
    console.log(item)
    // player.setAttribute("src",`media/${songs[item].textContent}.mp3` )
    player.play()
} 


document.addEventListener("DOMContentLoaded", ()=>{
    const play =  document.querySelector("#play")
    const pause =  document.querySelector("#pause")
    const stop =  document.querySelector("#stop")
    const volumen =  document.querySelector("#volumen")
    const song =  document.querySelector("li")
    const random =  document.querySelector("#random")

    // se llama al volumen
    player.volumen = volumen.value 

    // se inicia con un for el evento li con un click 
     for(let song of songs){
        song.addEventListener("click", changeSong)
     }

    play.addEventListener("click" , playMusic)
    pause.addEventListener("click" , pauseMusic)
    stop.addEventListener("click" , stopMusic)
    random.addEventListener("click", randomMize)
    volumen.addEventListener("change", changeVolumen)


})


// function changeSong(li){
//     // console.log(`media/${li.textContent}.mp3`)
//     let cancion = `media/${li.textContent}.mp3`
//     player.setAttribute("src" , cancion)
//     // console.log(player)
//     player.play()
// }
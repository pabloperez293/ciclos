// Pedir text mediante prompt, concatenarlo en c/repeticion 
// realizando una salida por cada resultado hasta que se ingrese "esc"


let texto = prompt("ingrese una palabra")

do{
    let conca = prompt("Introduce otra palabra");
    if(texto == ""){
        texto = texto + conca;
    }else{
        texto = texto + " " + conca;
    }
  
}while(confirm("Desea seguir escribiendo?"));
document.write(texto)

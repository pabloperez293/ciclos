const min_power = 20;
const max_power = 30;

let energiaSpiderMan = 300;
let energiaVenom = 300;

function calcularGolpe(){
    return Math.ceil(Math.random() * (max_power - min_power) + min_power)
}

while (energiaSpiderMan > 0  && energiaVenom > 0 ){


    let golpeSpiderMan = calcularGolpe()
       console.log("Golpe Spider :D " + golpeSpiderMan)


    let golpeVenom = calcularGolpe()
    console.log("Golpe Venom D: " + golpeVenom)

    if(golpeVenom > golpeSpiderMan){
        energiaSpiderMan = energiaSpiderMan - golpeVenom;
    }else{
        energiaVenom = energiaVenom - golpeSpiderMan;
    }
    console.log("Spider-pierde vida "+ energiaSpiderMan)
    console.log("Venom pierde vida " + energiaVenom)
}

if(energiaSpiderMan > 0 ){
    console.log("Gano Spider-man")
}else{
    console.log("Gano Venom")
}
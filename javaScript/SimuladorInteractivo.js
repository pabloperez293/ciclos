// Calcular edad promedio de personas registradas
alert("Hola Bienvenido al Simaldor Interactivo");
alert("Se solicitara una edad numerica de enteros.")

function calcularPromedio(edad){

   const sumarEdad = edad.reduce(function(valuesAsc = 0, newElement){
    return valuesAsc + newElement;
   });

   const calcular = sumarEdad / edad.length;
   return calcular;
}

console.log(calcularPromedio([10, 15, 51, 50]));

'use strict'


let num1;
let num2;
num1 = prompt("introduzca un número Positivo:");
num2 = prompt("introduzca otro número Positivo:");
let suma = 0;
    if (num1 > 0 & num2 > 0){
        suma = parseFloat(num1) + parseFloat(num2); 
        console.log("el resultado de la suma es:"+suma);
        alert("El resultado de la suma es: "+suma);
    }
    else{
        alert("Un número no es positivo, ingreselo nuevamente...");
    }

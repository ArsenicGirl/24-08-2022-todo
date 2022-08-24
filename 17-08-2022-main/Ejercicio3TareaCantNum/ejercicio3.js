'use strict'

let CantNum 
let CantPos
let CantNeg 
let Cant0
let i
let Num = 0;

CantPos = 0;
CantNeg = 0;
Cant0 = 0;


while(true){
CantNum = prompt("introduzca la cantidad de números enteros a valuar y le dire cuantos son positivos,cuantos son negativos y cuantos son cero:");
CantNum = parseInt();

if (CantNum > 0){ 
    for (i = 1; i <= CantNum; i++){
        Num = prompt ("Ingrese un numero: ");
        Num = parseFloat;  
        }
        if (Num > 0){
        CantPos++;
    }
    else if (Num < 0){
        CantNeg++;
    }
    else{
        Cant0++;
    }
    System.out.println("la cantidad de números positivos fue"+CantPos);
}
else {
    
}
}

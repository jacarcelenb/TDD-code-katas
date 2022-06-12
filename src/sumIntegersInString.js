/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/



const sumStrings = (stringNum) =>{
    let regex = /(\d+)/g;
    let numeros = stringNum.match(regex); 
    let suma = 0
    let numero = 0
   if (numeros != null) {
    for (let i = 0; i <numeros.length; i++) {
        numero = parseInt(numeros[i])
        suma+= numero;
                  
      }
   }
    return suma
}
// 1 caso cadena vacia
// 2 caso cadena con solo caracteres numericos
// 3 caso cadena con solo caracteres alfabeticos
// 4 caso cadena con numeros y letras que es lo que se desea 

function OnlyLetters(cadena){
    let lista = []
    let contador = 0
    
     for (let index = 65; index <91; index++) {
          lista[contador] =  String.fromCharCode(index).toLowerCase()
          contador++    
      }
    let palabra = cadena
    let pos = 0
    let contLetters = 0
    for (let index = 0; index <palabra.length; index++) {
      
       for (let i = 0; i <lista.length; i++) {
                if(palabra.charAt(index) ==lista[i]){
                   contLetters= contLetters+1;
                }
         }
    }
    if(contLetters==palabra.length){
      return true
    }
      return false
    }
    
    
    function OnlyNumbers(cadena){
     let lista = []
     let contador = 0
    
     for (let index = 48; index <58; index++) {
          lista[contador] =  String.fromCharCode(index).toLowerCase()
          contador++    
      }
    let palabra = cadena
    let pos = 0
    let contNum = 0
    for (let index = 0; index <palabra.length; index++) {
      
       for (let i = 0; i <lista.length; i++) {
                if(palabra.charAt(index) ==lista[i]){
                   contNum= contNum+1;
                }
         }
    }
    if(contNum==palabra.length){
      return true
    }
      return false
    }
    
export const sumOfIntegersInString = (stringNumber) => {
    let result = "";

    if (stringNumber==="") {
      console.log("You should input a String ")
    }
    if (OnlyLetters(stringNumber)) {
        result = "0";
    }
    if (OnlyNumbers(stringNumber)) {
        result = stringNumber;
    }
   else{
        result = String(sumStrings(stringNumber))
    }

    
    return result
};

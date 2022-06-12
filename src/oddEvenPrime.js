/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
If number is odd print 'Odd' instead of the number. IMPARES
If number is even print 'Even' instead of number.   PARES
Print number as a string, if it does not meet above two conditions, means if number is Prime.
 */

export const GAME_KEYS = Object.freeze({
    odd: 'Odd',
    even: 'Even'
  })

// funcion para generar el rango de los numeros
function NumberRange(){
   let number = 0

   for (let index = 0; index < 100; index++) {
        number = index +1;
        console.log(game(number))
    }

}

// funcion para determinar si el numero es impar
const isOdd =(number) =>{
    return number % 2 !=0;
}

export const game = (number) =>{
    let result = "";
    if (isOdd(number)== false) {
       result = GAME_KEYS.even;
    }
    if (isOdd(number)) {
        result = GAME_KEYS.odd;
    }
    if (isPrime(number)) {
        result =String(number);
    }
    return result;

} 

function isPrime (num) {
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    } 
    return num > 1;
 }

 

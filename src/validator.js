const validator = {
    isValid: (creditCardNumber) => {
      //Introduciendo el string a un array en orden inverso
      let stringToArray = creditCardNumber.split('').reverse() 
      // Convirtiendo el array de string a array de números 
      let arrayOfNumber = stringToArray.map((stringToArray) => {
          return Number(stringToArray)
      });
      console.log(stringToArray)
      console.log (arrayOfNumber)
   
    //Buscando los números que están en posiciones pares del array para multiplicarlos por 2
      let suma = 0
      for  (let i = 0; i <arrayOfNumber.length; i++){
        let digit = arrayOfNumber[i]
        const isOdd = (i % 2!==0)
        console.log('nDigit original', digit)
        if (isOdd) {
          if ((digit *= 2) > 9) digit -= 9;
          console.log('nDigit modificado', digit)
          
        }
        console.log('es impar',isOdd)
        suma += digit;
      }
    return suma % 10 ==0 ? true : false
    },
  
  maskify: (creditCardNumber) => {
    
  }
};

export default validator;


/*Buscando los números que están en posiciones pares del array para multiplicarlos por 2
for  (let i = 0; i <arrayOfNumber.length-1; i+=2){
}

return !(value.replace(/\D/g, '').split('').reverse().reduce(function(a, d, i) {
}, 0) % 10);
suma += arrayOfNumber[i] * (i % 2!==0 ? 2 : 1) 
return a + d * (i % 2 ? 2.2 : 1) | 0;
*/



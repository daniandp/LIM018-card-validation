const validator = {
  isValid: (creditCardNumber) => {
    //Introduciendo el string a un array en orden inverso
    let stringToArray = creditCardNumber.split('').reverse(); 
   
    // Convirtiendo el array de string a array de números 
    let arrayOfNumber = stringToArray.map((stringToArray) => {
        return parseInt(stringToArray);
    });

    //Bucle for para encontrar los números de las posiciones pares e impares
    let sum = 0;
    for (let i = 0; i < arrayOfNumber.length; i++){
      let digits = arrayOfNumber[i];
      const isPair = (i % 2!==0);
      // Los números en las posiciones pares se multiplican por 2
          if (isPair) {
            digits *=2;
           
            // Si la multiplicación es mayor a 9 se le restan 9 al número
              if (digits > 9){
                  digits -= 9
              }    
          } 
      // Sumando valor de sum y el NUEVO valor de digits en cada ciclo del bucle
      sum += digits 
   }
    //Valores que debe retornar la función isValid
     if (sum % 10 === 0) {
          return true;
      } else {
          return false;
        }
      
  },
  
  maskify: (creditCardNumber) => {
    //Nuevo string que extrae los últimos 4 dígitos para reservarlos
    let lastFourNumbers = creditCardNumber.slice(-4);
   
    //Convirtiendo el string a array
    let newArr = creditCardNumber.split('');

    //Bucle for para sustituir cada elemento del array por un #
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = newArr[i].replace(/[A-Za-z0-9]/,'#');
     }

    //Convirtiendo el array en string de nuevo
    let arrToString = newArr.join('');
    
    // Extrayando caracteres del string para concatenarlos con los 4 que habíamos reservado
    let mask = arrToString.slice(0,-4) + lastFourNumbers;
    
    //String que debe retornar la función maskify 
    return mask   
  }
      
};
    

  export default validator;
  
  




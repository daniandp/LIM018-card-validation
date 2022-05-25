const validator = {
  isValid: (creditCardNumber) => {
    //Introduciendo el string a un array en orden inverso
    let stringToArray = creditCardNumber.split('').reverse(); 
   
    // Convirtiendo el array de string a array de números 
    let arrayOfNumber = stringToArray.map((stringToArray) => {
        return parseInt(stringToArray);
    });
   
    //console.log ('estos son los datos en orden inverso', stringToArray);
   // console.log ('esto es el array tipo number', arrayOfNumber);
   // console.log ('array of number es de tipo', (typeof arrayOfNumber));

    //Bucle for para diferenciar los números de las posiciones pares e impares
    let sum = 0;
    for (let i = 0; i < arrayOfNumber.length; i++){
      let digits = arrayOfNumber[i];
      const isPair = (i % 2!==0);
      //console.log('¿la posición es par?',isPair);
      //console.log('el digito original es', digits);
      // Los números de las posiciones pares se multiplican por 2
          if (isPair) {
            digits *=2;
            //console.log ('el digito multplicado por 2 es =', digits);
            // Si la multiplicación es mayor a 9 se le restan 9 al número
              if (digits > 9){
                  digits -= 9
                  //console.log ('el digito menos 9 es =', digits); 
              }
         
          } 
      // Sumando valor de sum y el NUEVO valor de digits en cada ciclo del bucle
      sum += digits 
      //console.log ('suma de los números en cada ciclo =', sum);
      
   }
    
    //console.log ('esto es el valor TOTAL de la suma', sum)
    
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
    //console.log('estos son los últimos 4 dígitos reservados =',lastFourNumbers);
    //console.log ('esto es el string en un array', newArr );

    //Bucle for para sustituir cada elemento del array por un #
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = newArr[i].replace(/[A-Za-z0-9]/,'#');
      //console.log (newArr);
      //console.log ('cada elemento sustituido por #', newArr[i]);
     }

    //Convirtiendo el array en string de nuevo
    let arrToString = newArr.join('');
    //console.log ('esto es el array a cadena', arrToString);
    
    // Extrayando caracteres del string para concatenarlos con los 4 que habíamos reservado
    let mask = arrToString.slice(0,-4) + lastFourNumbers;
    //console.log ('esto es la cadena con caracteres sustituidos menos los últimos 4 =', mask);
    //console.log ('mask es de tipo', (typeof mask));
    
    //String que debe retornar la función maskify 
    return mask   
  }
      
};
    

  export default validator;
  
  




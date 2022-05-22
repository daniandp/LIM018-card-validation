const validator = {
  isValid: (creditCardNumber) => {
    //Introduciendo el string a un array en orden inverso
    let stringToArray = creditCardNumber.split('').reverse(); 
   
    // Convirtiendo el array de string a array de números 
    let arrayOfNumber = stringToArray.map((stringToArray) => {
        return parseInt(stringToArray);
    });
   
    console.log(stringToArray);
    console.log (arrayOfNumber);
    console.log ('array of number es de tipo', (typeof arrayOfNumber));

    //Buscando los números que están en posiciones pares del array para multiplicarlos por 2
    let sum = 0;
    for (let i = 0; i <arrayOfNumber.length; i++){
      let digits = arrayOfNumber[i];
      const isPair = (i % 2!==0);
      console.log('¿la posición es par?',isPair);
      console.log('el digito original es', digits);
          if (isPair) {
            digits *=2;
            console.log ('el digito multplicado por 2 es =', digits);
              if (digits > 9){
                  digits -= 9
                  console.log ('el digito menos 9 es =', digits); 
              }
         
          } 
      
      sum += digits 
      console.log ('sumando los números en cada ciclo', sum);
      
   }
    
    console.log ('esto es el valor TOTAL de la suma', sum)
    
     if (sum % 10 === 0) {
          return true;
      } else {
          return false;
        }
      
  },
  
  maskify: (creditCardNumber) => {

  }

}
    
    export default validator;
  
    
 
  
  


/*
.reduce(function(a,b){
          return parseInt(a+b)
          })
          let newArray = [];
          console.log('digito multiplicado por 2 es = ', newDigits)
          //newArray = newArray.reduce(function(a,b){
            //return parseInt(newArray) + parseInt(newArray);


          newArray = newDigits.toString().split('');
          console.log ('este es el nuevo array' ,newArray);
          newArray = parseInt(newArray[0]) + parseInt(newArray[1]);

          console.log ('esta es la suma dentro del newarray', newArray);
          console.log ('newarray es de tipo', (typeof newArray));

          let newDigits = digits *=2;
          console.log ('el digito multplicado por 2 es =', newDigits);
          console.log ('newdigits es de tipo', (typeof newDigits));
        if (newDigits >= 10) {
          let resDigits = newDigits - 9
          console.log ('el digito menos 9 es =', resDigits);
        } */




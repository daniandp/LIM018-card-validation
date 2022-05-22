import validator from './validator.js';

console.log(validator);

 
let payButton = document.getElementById('pagar');

payButton.addEventListener ('click', ()=> {
   let creditCardNumber = document.getElementById('cardnumber').value;
   let luhnAlgo = validator.isValid(creditCardNumber);
    
   console.log('¿la tarjeta es válida?', luhnAlgo); 
    
   if (luhnAlgo === true ) {
       alert ('tarjeta valida');
        
   } else {alert ('tarjeta invalida');
      }

}); 




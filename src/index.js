import validator from './validator.js';

console.log(validator);

//let creditCardNumber = '4556364607935616'

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



/*let replaceCharacters = document.getElementById('cardnumber').value;
replaceCharacters.addEventListener ('input', () => {
let creditCardNumber = document.getElementById('cardnumber').value;
let getMask = validator.maskify (creditCardNumber);
console.log ('esto es ', getMask);
});*/

//let getMask = validator.maskify (creditCardNumber);






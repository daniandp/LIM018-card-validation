import validator from './validator.js';

console.log(validator);

 
let payButton = document.getElementById('pagar')

payButton.addEventListener ('click', ()=> {
   const creditCardNumber = document.getElementById('cardnumber').value;
    const isValid = validator.isValid(creditCardNumber);
    console.log('aqui', isValid) 
    if (isValid) {
       alert ('tarjeta valida')
        
    } else {alert ('tarjeta invalida')}


})  




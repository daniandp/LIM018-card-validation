import validator from './validator.js';

//console.log(validator);

//let creditCardNumber = '4556364607935616'




let payButton = document.getElementById('pagar');
let creditCardNumber = document.getElementById('cardnumber');

payButton.addEventListener ('click', ()=> {
   let luhnAlgo = validator.isValid(creditCardNumber.value);
   creditCardNumber.value =  validator.maskify (creditCardNumber.value)
   console.log('¿la tarjeta es válida?', luhnAlgo); 
    
   if (luhnAlgo === true ) {
       alert ('tarjeta valida');
        
   } else {alert ('tarjeta invalida');
      }
      console.log('esto es el maskify', validator.maskify (creditCardNumber.value))
});

/*creditCardNumber.addEventListener ('keyup', ()=>{
   validator.maskify (creditCardNumber.value)
    console.log('esto es el maskify', validator.maskify (creditCardNumber.value) )
});*/



//creditCardNumber.addEventListener ('input', validator.maskify (creditCardNumber))
//creditCardNumber.on('keyup',validator.maskify (creditCardNumber))
//let replaceCharacters = document.getElementById('cardnumber').value;
//replaceCharacters.on('keyup', '[cardnumber]', validator.maskify (creditCardNumber))

/*creditCardNumber = document.getElementById('cardnumber').value;
let getMask = validator.maskify (creditCardNumber);
console.log ('esto es getmask', getMask);*/
//let getMask = validator.maskify (creditCardNumber);
//creditCardNumber.value =  validator.maskify (creditCardNumber.value)






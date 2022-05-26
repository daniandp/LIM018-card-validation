import validator from './validator.js';

document.getElementById("inscription").addEventListener('click', () => {
    document.getElementById("paysection").classList.remove("sección_de_pago");
    document.getElementById("firstpage").style.display="none";
})

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
   creditCardNumber.value =  validator.maskify (creditCardNumber.value)
    console.log('esto es el maskify', validator.maskify (creditCardNumber.value) )
});*/







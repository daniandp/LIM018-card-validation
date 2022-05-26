import validator from './validator.js';

//Botón de la primera página
let inscriptionButton = document.getElementById('inscription');

inscriptionButton.addEventListener('click', () => {
    document.getElementById('firstpage').style.display='none';
})
//Botones y datos de la segunda página
let creditCardNumber = document.getElementById('cardnumber');
let payButton = document.getElementById('pay');
let cleanButton = document.getElementById('clean');

//Botón de pagar, muestra válida o inválida y enmascara los números
payButton.addEventListener('click', ()=> {
   let luhnAlgo = validator.isValid(creditCardNumber.value);
   creditCardNumber.value =  validator.maskify (creditCardNumber.value);
   console.log('¿la tarjeta es válida?', luhnAlgo); 
    
   if (luhnAlgo === true ) {
       document.getElementById('validation1').innerHTML = '¡Su tarjeta es válida!'
        
    } else { document.getElementById('validation').innerHTML = '¡Su tarjeta es inválida!'
      }
      console.log('esto es el maskify', validator.maskify (creditCardNumber.value));
});

//Botón de limpiar, borra los datos agregados
cleanButton.addEventListener ('click', ()=> {
    document.getElementById('validation').style.display='none';
})










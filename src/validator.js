const validator = {

isValid: function (creditCardNumber) {
let stringToArray = creditCardNumber.split('').reverse(); // ingresé los dígitos de la tarjeta en un array e invertí las posiciones
let arrayOfNumber = stringToArray.map((stringToArray)=>{ // convertí el array de string a array de números 
return Number(stringToArray)
});

for  (let i = 0; i <= arrayOfNumber.length-1; i++){


}






},



maskify: function (creditCardNumber) {

},
 
 
};

export default validator;


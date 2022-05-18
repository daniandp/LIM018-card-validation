import validator from './validator.js';

console.log(validator);

let creditCardNumber= '4829485459083998'

validator.isvalid (creditCardNumber);

validator.maskify (creditCardNumber);

import validator from './validator.js';

console.log(validator);

let creditCardNumber= '4036074665905431';


validator.isvalid (creditCardNumber);

validator.maskify (creditCardNumber);

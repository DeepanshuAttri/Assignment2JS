// index.js

import { greetUser, celsiusToFahrenheit, factorial, generatePassword } from './utilities.js';

// Call the functions
greetUser("John", "Doe");

console.log(`25°C is ${celsiusToFahrenheit(25)}°F`);

console.log(`Factorial of 5 is ${factorial(5)}`);

console.log(`Generated Password: ${generatePassword(10)}`);

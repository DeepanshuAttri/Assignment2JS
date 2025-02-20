// index.js

import { greetUser, celsiusToFahrenheit, factorial, generatePassword } from './utilities.js';

// Call the functions
greetUser("Deepanshu", "Attri");

console.log(`50°C is ${celsiusToFahrenheit(50)}°F`);

console.log(`Factorial of 6 is ${factorial(6)}`);

console.log(`Generated Password: ${generatePassword(8)}`);

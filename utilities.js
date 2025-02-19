// utilities.js

// Function 1: Print a welcome message
export function greetUser(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Function 2: Convert Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function 3: Calculate factorial
export function factorial(n) {
    if (n < 0) return "Invalid input"; // Factorial is not defined for negative numbers
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function 4: Generate a random password
export function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

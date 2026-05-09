# Mini Calculator — JS Project

A simple calculator built with JavaScript as a practice project while learning JS fundamentals.

## Concepts Covered

- Arrow Functions
- Return values vs console.log
- if/else statements
- IIFE (Immediately Invoked Function Expression)
- Module Pattern — keeping functions private

## How It Works

All internal functions (add, sub, mul, div) are private inside an IIFE. Only the `calculate` function is exposed to the outside world.

## How to Run

Make sure you have Node.js installed, then run:

```
node script.js
```

## Example Usage

```javascript
console.log(calculator.calculate(10, 5, "add"))  // 15
console.log(calculator.calculate(10, 5, "sub"))  // 5
console.log(calculator.calculate(10, 5, "mul"))  // 50
console.log(calculator.calculate(10, 5, "div"))  // 2
```

## Author

Waleed Khan 

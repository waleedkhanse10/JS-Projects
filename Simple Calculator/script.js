const calculator = (() => {

    const add = (n1, n2) => {
        return n1 + n2
    }

    const sub = (n1, n2) => {
        return n1 - n2
    }

    const mul = (n1, n2) => {
        return n1 * n2
    }

    const div = (n1, n2) => {
        return n1 / n2
    }

    const calculate = (n1, n2, operator) => {
        if (operator === "add") {
            return add(n1, n2);
        } else if (operator === "sub") {
            return sub(n1, n2);
        } else if (operator === "mul") {
            return mul(n1, n2);
        } else if (operator === "div") {
            return div(n1, n2);
        } else {
            console.log("Invalid Opertor!")
        }
    }
    
    return {
        calculate
    }

}) ();

console.log(calculator.calculate(10, 5, "add"))  
console.log(calculator.calculate(10, 5, "sub"))
console.log(calculator.calculate(10, 5, "mul"))  
console.log(calculator.calculate(10, 5, "div"))
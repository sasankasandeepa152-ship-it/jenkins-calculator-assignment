const {
    add,
    subtract,
    multiply,
    divide
} = require("./calculator");

const operations = {
    add,
    subtract,
    multiply,
    divide
};

function main() {
    const [operation, firstValue, secondValue] =
        process.argv.slice(2);

    if (
        !operation ||
        firstValue === undefined ||
        secondValue === undefined
    ) {
        console.log("Simple Calculator");
        console.log(
            "Usage: node [path-to-index.js] " +
            "<add|subtract|multiply|divide> <number1> <number2>"
        );
        return;
    }

    if (!Object.prototype.hasOwnProperty.call(operations, operation)) {
        console.error("Unknown operation: " + operation);
        process.exitCode = 1;
        return;
    }

    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);

    if (
        !Number.isFinite(firstNumber) ||
        !Number.isFinite(secondNumber)
    ) {
        console.error("Both values must be valid numbers.");
        process.exitCode = 1;
        return;
    }

    try {
        const result = operations[operation](
            firstNumber,
            secondNumber
        );

        console.log("Result: " + result);
    } catch (error) {
        console.error("Error: " + error.message);
        process.exitCode = 1;
    }
}

main();
const test = require("node:test");
const assert = require("node:assert/strict");

const {
    add,
    subtract,
    multiply,
    divide
} = require("../src/calculator");

test("Addition works correctly", () => {
    assert.equal(add(2, 3), 5);
});

test("Subtraction works correctly", () => {
    assert.equal(subtract(3, 5), -2);
});

test("Multiplication works correctly", () => {
    assert.equal(multiply(4, 3), 12);
});

test("Division works correctly", () => {
    assert.equal(divide(10, 2), 5);
});

test("Division supports decimal results", () => {
    assert.equal(divide(5, 2), 2.5);
});

test("Division by zero produces an error", () => {
    assert.throws(
        () => divide(10, 0),
        /Cannot divide by zero/
    );
});

test("Addition works with negative numbers", () => {
    assert.equal(add(-2, -3), -5);
});
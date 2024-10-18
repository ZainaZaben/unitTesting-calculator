const calc = require("./calculator");

describe("Calculator operations between two numbers", () => {
  it("Should return 5 when the adding 2 and 3", () => {
    expect(calc(2, "+", 3)).toBe(5);
  });

  it("Should return 3 when subtract 2 from 5", () => {
    expect(calc(5, "-", 2)).toBe(3);
  });

  it("Should return 24 as a result of a production between 4 and 6", () => {
    expect(calc(4, "*", 6)).toBe(24);
  });

  it("Should return 5 when dividing 10 by 2", () => {
    expect(calc(10, "/", 2)).toBe(5);
  });

  it("Should throw an error when dividing by zero", () => {
    expect(() => calc(6, "/", 0)).toThrow("Division by zero");
  });

  it("Should return -3 when adding -8 and 5", () => {
    expect(calc(-8, "+", 5)).toBe(-3);
  });

  it("Should handle decimal numbers correctly and give 7 when multiply 3.5 by 2", () => {
    expect(calc(3.5, "*", 2)).toBe(7);
  });

  it("Should throw an error for an invalid operator like a $", () => {
    expect(() => calc(5, "$", 3)).toThrow("Invalid operator");
  });

  it("should throw an error for invalid input types like a string plus sign", () => {
    expect(() => calc("2", "+", 3)).toThrow("Invalid input type");
  });

  // Test case: Order of operations
  it("should follow the correct order of operations", () => {
    expect(calc(2, "+", 3, "*", 4)).toBe(14);
  });
});

describe("Calculator operations for more than two numbers", () => {
  it("Should return 9 when the operation is adding 2, 3 and 4", () => {
    expect(calc(2, "+", 3, "+", 4)).toBe(9);
  });

  it("Should ignore numbers bigger than 1000", () => {
    expect(calc(1001, "+", 2)).toBe(2);
  });

  it("Should return 15 when the operation is 8 + 3 * 4 - 5", () => {
    expect(calc(8, "+", 3, "*", 4, "-", 5)).toBe(15);
  });

  it("Should return -7 when the operation is 5 - 3 * 4", () => {
    expect(calc(5, "-", 3, "*", 4)).toBe(-7);
  });

  it("Should throw an error for invalid input types", () => {
    expect(() => calc("26", "+", "3", "*", 4, "-", 3)).toThrow(
      "Invalid input type"
    );
  });

  it("Should ignore the operand with value greater than 1000", () => {
    expect(calc(2023, "+", 3, "*", 4, "-", 5, "/", 2, "*", 3)).toBe(4.5);
  });

  it("Should result the same inserted value when we insert just one operand", () => {
    expect(calc(5)).toBe(5);
  });
});

describe("Test for ignoring the operand with value greater than 1000 in different operations", () => {
  it("Should return -1.5 for the operation 2 + 1008 * 4 - 5 / 2 * 3", () => {
    expect(calc(2, "+", 1008, "*", 4, "-", 5, "/", 2, "*", 3)).toBe(-1.5);
  });

  it("Should respect the mathematical order of operations and return -16 for 2 - 3 * 6 - 0 / 2 * 3", () => {
    expect(calc(2, "-", 3, "*", 6, "-", 0, "/", 2, "*", 3)).toBe(-16);
  });

  it("Should return 12.5 for the operation 2 + 3 * 4 - 1005 / 2 * 3", () => {
    expect(calc(2, "+", 3, "*", 4, "-", 1005, "/", 2, "*", 3)).toBe(12.5);
  });
});

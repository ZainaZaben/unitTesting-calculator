function calc(...args) {
  let result;
  let operandIndex = 0;
  let operationIndex = 1;
  let finalArray = [];

  while (operandIndex < args.length) {
    if (typeof args[operandIndex] !== "number") {
      throw new Error("Invalid input type");
    }

    if (
      args[operandIndex] > 1000 &&
      (args[operationIndex] === "+" || args[operationIndex] === "-")
    ) {
      args[operandIndex] = 0;
    } else if (
      args[operandIndex] > 1000 &&
      (args[operationIndex] === "*" || args[operationIndex] === "/")
    ) {
      args[operandIndex] = 1;
    }

    if (operandIndex === args.length - 1) {
      finalArray.push(args[operandIndex]);
      break;
    }

    if (args[operationIndex] === "*") {
      args[operationIndex + 1] = args[operandIndex] * args[operandIndex + 2];
    } else if (args[operationIndex] === "/") {
      if (args[operandIndex + 2] === 0) {
        throw new Error("Division by zero");
      }
      args[operationIndex + 1] = args[operandIndex] / args[operandIndex + 2];
    } else if (args[operationIndex] === "+" || args[operationIndex] === "-") {
      finalArray.push(args[operandIndex]);
      finalArray.push(args[operationIndex]);
    } else {
      throw new Error("Invalid operator");
    }

    operationIndex += 2;
    operandIndex += 2;
  }
  operandIndex = 0;
  operationIndex = 1;
  while (operandIndex < finalArray.length - 1) {
    if (finalArray[operationIndex] === "+") {
      finalArray[operandIndex + 2] =
        finalArray[operandIndex] + finalArray[operandIndex + 2];
    } else {
      finalArray[operandIndex + 2] =
        finalArray[operandIndex] - finalArray[operandIndex + 2];
    }

    operandIndex += 2;
    operationIndex += 2;
  }
  result = finalArray.pop();
  return result;
}

module.exports = calc;

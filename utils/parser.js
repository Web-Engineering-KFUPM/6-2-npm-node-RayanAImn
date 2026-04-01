import _ from "lodash";

export function parseNumbers(input) {
  // Use lodash map to convert strings to numbers
  const numbers = _.map(input, (str) => Number(str));
  // Use lodash compact to remove any non-numeric entries (like NaN)
  // Actually, lodash compact removes only falsy values (null, undefined, false, 0, "")
  // To reach the goal of removing invalid entries, I'll filter out NaN.
  return _.compact(_.filter(numbers, (num) => !isNaN(num)));
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}

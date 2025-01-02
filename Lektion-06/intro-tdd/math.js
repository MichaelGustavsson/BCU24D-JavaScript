// export function add(){}
export const add = (a, b) => {
  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const sum = (numbers) => {
  let result = 0;

  if (numbers === undefined) {
    throw new Error('No arguments');
  }

  for (let number of numbers) {
    // result += parseInt(number);
    result += +number;
  }

  // numbers.forEach((number) => {
  //   result += +number;
  // });

  return result;
};

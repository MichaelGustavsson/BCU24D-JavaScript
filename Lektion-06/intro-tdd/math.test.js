import { it, expect, describe } from 'vitest';

import { add, subtract, multiply, sum } from './math';

describe('Simple math calculations', () => {
  // Test 1.
  it('should summarize two input values', () => {
    // Arrange...
    const x = 10;
    const y = 10;

    // Act...
    const result = add(x, y);

    // Assert... (Förväntat resultat...)
    // Förväntar oss att x + y = 20...
    expect(result).toBe(20);
  });

  // Test 2.
  it('should display the subtracted sum of two values', () => {
    // Arrange...
    const x = 10;
    const y = 5;

    // Act...
    const result = subtract(x, y);

    // Assert...
    expect(result).toBe(5);
  });

  // Test 3.
  it('Should return the product of two values', () => {
    // Arrange...
    const x = 4;
    const y = 2;

    // Act...
    const result = multiply(x, y);

    // Assert...
    expect(result).toBe(8);
  });
});

describe('A bit more complex calculations', () => {
  it('should return the sum of all values in a list', () => {
    // Arrange...
    const values = [5, 2, 3, 5];

    // Act...
    const result = sum(values);

    // Assert...
    expect(result).toBe(15);
  });

  it('should return the sum of all values that can be interpreted as numeric values', () => {
    // Arrange...
    const values = ['5', '2'];

    // Act...
    const result = sum(values);

    // Assert...
    expect(result).toBe(7);
  });

  it('should return the NaN(Not a Number) if the values cannot be interpreted as numeric values', () => {
    // Arrange...
    const values = ['five', '2'];

    // Act...
    const result = sum(values);

    // Assert...
    expect(result).toBeNaN();
  });

  it('should return an error if one or more arguments are sent instead of an array', () => {
    // Arrange...
    const x = 4;
    const y = 5;

    // Act...
    // Detta funkar inte!!!
    // Vi måste skicka en funktion till sum så
    // vi kan fånga eventuella felmeddelandena...
    // const result = sum(x, y);
    const resultFn = () => {
      sum(x, y);
    };

    // Assert...
    expect(resultFn).toThrowError(/numbers is not iterable/);
    // expect(resultFn).toThrowError(/numbers.forEach is not a function/);
  });

  it('should return an error if no arguments are sent to the function', () => {
    // Arrange...

    // Act...
    const resultFn = () => {
      sum();
    };

    // Assert...
    expect(resultFn).toThrowError(/No arguments/);
  });
});

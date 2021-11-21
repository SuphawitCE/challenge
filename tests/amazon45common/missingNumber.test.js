const { missingNumber } = require('../../amazon45common/missingNumber');

const generateExceptOne = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

describe('Amazon 45 common - Missing number', () => {
  test('Should [3, 7, 1, 2, 8, 4, 5] return 6', () => {
    const input = [3, 7, 1, 2, 8, 4, 5];
    const received = missingNumber(input);
    const expected = 6;
    expect(received).toEqual(expected);
  });

  test('Should [3, 7, 1, 2, 6, 8, 4, 5, 10] return 9', () => {
    const input = [3, 7, 1, 2, 6, 8, 4, 5, 10];
    const received = missingNumber(input);
    const expected = 9;
    expect(received).toEqual(expected);
  });

  test('Should [3, 7, 1, 2, 6, 8, 4, 5, 0] return -1', () => {
    const input = [3, 7, 1, 2, 6, 8, 4, 5, 0];
    const received = missingNumber(input);
    const expected = -1;
    expect(received).toEqual(expected);
  });

  for (let i = 0; i < 100; i++) {
    test(`Test - generateNumber and generateExceptOne return positive integer and -1 round: ${i}`, async () => {
      let min = 1;
      let max = 101;
      const generateOne = generateExceptOne(min, max);
      const temp = [];
      for (let i = min; i < max; i++) {
        if (i !== generateOne) {
          temp.push(i);
        }
      }
      let received = missingNumber(temp);
      let expected = generateOne;
      if (received === -1) {
        expect(received).toEqual(-1);
      } else {
        expect(received).toEqual(expected);
      }
    });
  }
});

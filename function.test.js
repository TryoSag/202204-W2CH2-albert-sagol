const { number } = require("yargs");

const strictEquals = (a, b) => {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  }
  if (Object.is(a, 0) && Object.is(b, -0)) {
    return true;
  }
  if (Object.is(a, -0) && Object.is(b, 0)) {
    return true;
  }

  return Object.is(a, b);
};

describe("Given a strictEquals (a, b)", () => {
  describe("When it recives (1, 1)", () => {
    test("Then it should return true", () => {
      const numberToTestOnA = 1;
      const numberToTestOnB = 1;
      const expectedResult = true;

      const resultOfTest = strictEquals(numberToTestOnA, numberToTestOnB);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (NaN, NaN)", () => {
    test("Then it should return false", () => {
      const numberToTestOnA = NaN;
      const numberToTestOnB = NaN;
      const expectedResult = false;

      const resultOfTest = strictEquals(numberToTestOnA, numberToTestOnB);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (0, -0)", () => {
    test("Then it should return true", () => {
      const numberToTestOnA = 0;
      const numberToTestOnB = -0;
      const expectedResult = true;

      const resultOfTest = strictEquals(numberToTestOnA, numberToTestOnB);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (-0, 0)", () => {
    test("Then it should return true", () => {
      const numberToTestOnA = -0;
      const numberToTestOnB = 0;
      const expectedResult = true;

      const resultOfTest = strictEquals(numberToTestOnA, numberToTestOnB);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (1, '1')", () => {
    test("Then it should return false", () => {
      const numberToTestOnA = 1;
      const numberToTestOnB = "1";
      const expectedResult = false;

      const resultOfTest = strictEquals(numberToTestOnA, numberToTestOnB);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (true, false)", () => {
    test("Then it should return false", () => {
      const numberToTestOnA = true;
      const numberToTestOnB = false;
      const expectedResult = false;

      const resultOfTest = strictEquals(numberToTestOnA, numberToTestOnB);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (false, false)", () => {
    test("Then it should return true", () => {
      const numberToTestOnA = false;
      const numberToTestOnB = false;
      const expectedResult = true;

      const resultOfTest = strictEquals(numberToTestOnA, numberToTestOnB);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives ('Water', 'oil')", () => {
    test("Then it should return false", () => {
      const numberToTestOnA = "Water";
      const numberToTestOnB = "oil";
      const expectedResult = false;

      const resultOfTest = strictEquals(numberToTestOnA, numberToTestOnB);

      expect(resultOfTest).toBe(expectedResult);
    });
  });
});

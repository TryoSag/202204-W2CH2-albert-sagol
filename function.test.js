const strictEquals = (a, b) => {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  } else if (Object.is(a, 0) && Object.is(b, -0)) {
    return true;
  } else if (Object.is(a, -0) && Object.is(b, 0)) {
    return true;
  } else {
    return Object.is(a, b);
  }
};

describe("Given a strictEquals (a, b)", () => {
  describe("When it recives (1, 1)", () => {
    test("Then it should return true", () => {
      const numberToTest = (1, 1);
      const expectedResult = true;

      const resultOfTest = strictEquals(numberToTest);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (NaN, NaN)", () => {
    test("Then it should return false", () => {
      const numberToTest = (NaN, NaN);
      const expectedResult = false;

      const resultOfTest = strictEquals(numberToTest);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (0, -0)", () => {
    test("Then it should return true", () => {
      const numberToTest = (0, -0);
      const expectedResult = true;

      const resultOfTest = strictEquals(numberToTest);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (-0, 0)", () => {
    test("Then it should return true", () => {
      const numberToTest = (-0, 0);
      const expectedResult = true;

      const resultOfTest = strictEquals(numberToTest);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (1, '1')", () => {
    test("Then it should return false", () => {
      const numberToTest = (1, "1");
      const expectedResult = false;

      const resultOfTest = strictEquals(numberToTest);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (true, false)", () => {
    test("Then it should return false", () => {
      const numberToTest = (true, false);
      const expectedResult = false;

      const resultOfTest = strictEquals(numberToTest);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives (false, false)", () => {
    test("Then it should return true", () => {
      const numberToTest = (false, false);
      const expectedResult = true;

      const resultOfTest = strictEquals(numberToTest);

      expect(resultOfTest).toBe(expectedResult);
    });
  });

  describe("When it recives ('Water', 'oil')", () => {
    test("Then it should return false", () => {
      const numberToTest = ("Water", "oil");
      const expectedResult = false;

      const resultOfTest = strictEquals(numberToTest);

      expect(resultOfTest).toBe(expectedResult);
    });
  });
});

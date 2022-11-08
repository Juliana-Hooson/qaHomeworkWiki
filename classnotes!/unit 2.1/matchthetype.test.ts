describe("value testing", () => {
    test("strings are string", () => {
      expect("Hello World").toBe("Hello World");
      expect(stringCheck("Any")).toBeTruthy();
      expect(stringCheck("This is a sentance.")).toBeTruthy();
      expect(stringCheck(63489629386523)).toBeFalsy();
    });
    test("numbers are numbers", () => {
      expect(3.14159).toBe(3.14159);
      expect(numberCheck(0.2)).toBeTruthy();
      expect(numberCheck(5 + 5)).toBeTruthy();
      expect(numberCheck("world")).toBeFalsy();
    });
    test("booleans are booleans", () => {
      expect(false).toBe(false);
      expect(booleanCheck(1 === 1)).toBeTruthy();
      expect(booleanCheck(10>12)).toBeTruthy();
      expect(booleanCheck(1234)).toBeFalsy();
    });
  });
  
  function numberCheck(x) {
    return typeof x == "number";
  }
  function stringCheck(x) {
    return typeof x == "string";
  }
  function booleanCheck(x) {
    return typeof x == "boolean";
  }

  
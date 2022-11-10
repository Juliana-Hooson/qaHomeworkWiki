describe("Testing the calculator", () => {
    test("Example test", () => {
      expect(calculator.add(2, 50)).toBe(52);
    });
    test("Addition works", () => {
      expect(calculator.add(4,2)).toBe(6);
    });
    test("Subtraction works", () => {
      expect(calculator.subtract(10,5)).toBe(5);
    });
    test("Multiplication works", () => {
      expect(calculator.multiply(15,2)).toBe(30);
    });
    test("Division works", () => {
      expect(calculator.divide(100,2)).toBe(50);
    });
    describe("Stretch Goals", () => {
      test("(2+2)/4 == 1", () => {
        expect(calculator.divide(calculator.add(2, 2), 4)).toBe(1);
      });
      test("(28/4)*(6/2)*(30-27+(3-4)) == 42", () => {
        expect(calculator.divide(28,4)).toBe(7);
        expect(calculator.divide(6,2)).toBe(3);
        expect(calculator.multiply(7,3)).toBe(21)
        expect(calculator.subtract(30,27)).toBe(3);
        expect(calculator.subtract(3,4)).toBe(-1);
        expect(calculator.add(3,-1)).toBe(2);
        expect(calculator.multiply(21,2)).toBe(42);
      });
    });

  const calculator = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */
    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */
    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */
    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */
    divide: (a: number, b: number): number => a / b,
  }
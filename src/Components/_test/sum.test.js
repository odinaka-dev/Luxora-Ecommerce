const { multiply } = require("../sum");

describe("multiply", () => {
  it("should multiply two numbers to give 27", () => {
    expect(multiply(3, 9)).toBe(27);
  });
});

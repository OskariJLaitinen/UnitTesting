// test/test_mylib.js
const { expect } = require("chai");
const mylib = require("../mylib");

describe("mylib arithmetic operations", function () {
  before(function () {
    console.log("Starting the test suite...");
  });

  after(function () {
    console.log("All tests completed!");
  });

  it("should add two numbers", function () {
    expect(mylib.add(2, 3)).to.equal(5);
  });

  it("should subtract two numbers", function () {
    expect(mylib.subtract(5, 2)).to.equal(3);
  });

  it("should multiply two numbers", function () {
    expect(mylib.multiply(4, 3)).to.equal(12);
  });

  it("should divide two numbers", function () {
    expect(mylib.divide(10, 2)).to.equal(5);
  });

  it("should throw error when dividing by zero", function () {
    expect(() => mylib.divide(10, 0)).to.throw("ZeroDivision: Cannot divide by zero");
  });
});

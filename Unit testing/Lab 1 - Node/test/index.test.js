const { capitalizeText, createArray } = require("../index");
const { assert, expect } = require("chai");
const should = require("chai").should();
// const should = chai.should();

describe("test capitalizeText function", () => {
  //? test that the function takes a string it will return a string
  it("will return a string", () => {
    assert.isString(capitalizeText("hamada"));
    expect(capitalizeText("hamada")).to.be.an("string");
    capitalizeText("hamada").should.to.be.an("string");
  });
  //? test that the function takes a string and return it after capitalize it
  it("will return a string after capitalizing it", () => {
    assert.equal(capitalizeText("hamada"), "HAMADA");
    expect(capitalizeText("hamada")).to.equal("HAMADA");
    capitalizeText("hamada").should.to.equal("HAMADA");
  });
  //? test if the function takes number it will throw type error says parameter should be string
  it("throw error if parameter is number", () => {
    assert.throw(
      () => capitalizeText(5),
      TypeError,
      "parameter should be string"
    );
    expect(() => capitalizeText(5)).throw(
      TypeError,
      "parameter should be string"
    );
    (() => capitalizeText(5)).should.Throw(
      TypeError,
      "parameter should be string"
    );
  });
});

describe("test createArray function", () => {
  //? test that the return value of type array
  it("return value of type array", () => {
    assert.isArray(createArray(3));
    expect(createArray(3)).to.be.an("array");
    createArray(3).should.to.be.an("array");
  });
  //? test if we pass 3 it will return array of length 3 and test it's include 1
  it("return value of type array", () => {
    assert.isArray(createArray(3));
    assert.lengthOf(createArray(3), 3);
    assert.include(createArray(3), 1);

    expect(createArray(3))
      .to.be.an("array")
      .to.have.lengthOf(3)
      .that.includes(1);

    createArray(3)
      .should.to.be.an("array")
      .to.have.lengthOf(3)
      .that.includes(1);
  });
});

setTimeout(() => {
  run();
}, 5000);

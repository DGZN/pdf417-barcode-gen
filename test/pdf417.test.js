const { inspect } = require("util");

let chai = require("chai"),
  expect = chai.expect,
  should = chai.should(),
  sinon = require("sinon"),
  chaiAsPromised = require("chai-as-promised"),
  debug = require("debug")("PDF417-BARCODE-GEN:tests:debug");

chai.use(require("chai-integer"));

let { getRndInteger, getRndLetter } = require("../src/util.js");
const { type } = require("os");

describe("Utility Functions", async () => {
  beforeEach(async () => {});

  it("Should return a random integer", async () => {
    getRndInteger(2, 5).should.be.an.integer();
  });

  it("Should return a random letter", async () => {
    let letter = getRndLetter();
    letter.should.be.a("string");
  });

  afterEach(async () => {});
});

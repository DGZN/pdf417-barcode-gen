const { inspect } = require('util')

let chai = require('chai')
, expect = chai.expect
, should = chai.should()
, sinon = require('sinon')
, chaiAsPromised = require("chai-as-promised")
, debug = require("debug")("PDF417-BARCODE-GEN:tests:debug")

chai.use( require('chai-integer') )

let {getRndInteger} = require('../src/util.js')

describe('PDF417.js', async () => {

beforeEach(async () => {

})

describe('getRndInteger(', async () => {

    it('Should return a random integer', async () => {
      getRndInteger(2,5).should.be.an.integer()
    })
    
})

afterEach(async () => {

})

})
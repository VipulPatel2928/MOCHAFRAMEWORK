// To run the test cases your folder name should be "Test" or "test" if not then user will get the error "Error: No test files found: "test"

var should = require('chai').should()
var expect = require('chai').expect  // Note that this is not a function, if you use as function then get an error TypeError: expect is not a function
var assert = require('chai').assert  // Note that this is not a function, if you use as function then get an error TypeError: assert is not a function

const name = 'vipul'

const { beforeEach, afterEach } = require('mocha')
// import the function isElementPresent from "ElementPresentValidation.cy.js"

const { isElementPresent } = require('./ElementPresentValidation.cy.js')

// create log constant for console.log for simplicity

log = console.log

// Use of function key word
before(function () {
    log('<=========== OUTSIDE Before Hook is Executed ===========>')
})

//use of lambda ()=>
after(() => {
    log('<=========== OUTSIDE After Hook is Executed ===========>')
})

// Use of function key word
beforeEach(function () {
    log('<=========== Before Each Block is Executed ===========>')
})

//use of lambda ()=>
afterEach(() => {
    log('<=========== After Each Block is Executed ===========>')
})


describe('Chai Should Expect and Assert Pass', function () {
   
    before(function () {
        log('<------------------------------------------------------------------------------------------>')
        log('<=========== Chai Should Expect and Assert Pass Before Hook is Executed ===========>')
    })
    after(() => {
        log('<=========== Chai Should Expect and Assert Pass After Hook is Executed ===========>')
        log('<------------------------------------------------------------------------------------------>')
    })
    it('Should Pass', function () {
        name.should.to.equal('vipul')
        name.should.to.lengthOf(5)
        log(isElementPresent())
        if (isElementPresent().should.to.true) {
            log('Should, Function has return the "Value" true')
        }
    })
    it('Expect Pass', function () {
        expect(name).to.equal('vipul')
        expect(name).to.lengthOf(5)
        if (expect(isElementPresent()).to.true) {
            log('Expect, Function has return the "Value" true')
        }
    })
    it('Assert Pass', function () {
        assert.equal(name, 'vipul')
        assert.lengthOf(name, 5)
        assert.equal(isElementPresent(), true)
    })
})

describe('Chai Should Expect and Assert Fail Equal', function () {
    before(function () {
        log('<------------------------------------------------------------------------------------------>')
        log('<=========== Chai Should Expect and Assert Fail Equal Before Hook is Executed ===========>')
    })
    after(() => {
        log('<=========== Chai Should Expect and Assert Fail Equal After Hook is Executed ===========>')
        log('<------------------------------------------------------------------------------------------>')
    })
    
    it('Should Fail Equal', function () {
        name.should.to.equal('vipul Patel')
    })
    it('Expect Fail Equal', function () {
        expect(name).to.equal('vipul Patel')
    })
    it('Assert Fail Equal', function () {
        assert.equal(name, 'vipul Patel')
    })
})
describe('Chai Should Expect and Assert Fail Length', function () {
    before(function () {
        log('<------------------------------------------------------------------------------------------>')
        log('<=========== Chai Should Expect and Assert Fail Length Before Hook is Executed ===========>')
    })
    after(() => {
        log('<=========== Chai Should Expect and Assert Fail Length After Hook is Executed ===========>')
        log('<------------------------------------------------------------------------------------------>')
    })
    
    it('Should Fail Length', function () {
        name.should.to.lengthOf(10)
    })
    it('Expect Fail Length', function () {
        expect(name).to.lengthOf(10)
    })
    it('Assert Fail Length', function () {
        assert.lengthOf(name, 10)
    })
})

describe('Chai Should Expect and Assert Fail Function Return', function () {
    before(function () {
        log('<------------------------------------------------------------------------------------------>')
        log('<=========== Chai Should Expect and Assert Fail Function Return Before Hook is Executed ===========>')
    })
    after(() => {
        log('<=========== Chai Should Expect and Assert Fail Function Return After Hook is Executed ===========>')
        log('<------------------------------------------------------------------------------------------>')
    })
    it('Should Fail Function Return', function () {
        if (isElementPresent().should.to.false) {
            log('Should, Function has return the "Value" true')
        }
        else
            log('Should, Function has return the "Value" true')
    })

    it('Expect Fail Function Return', function () {
        if (expect(isElementPresent()).to.false) {
            log('Expect, Function has return the "Value" true')
        }
        else
            log('Should, Function has return the "Value" true')
    })

    it('Assert Fail Function Return', function () {
        assert.equal(isElementPresent(), false)
    })
})

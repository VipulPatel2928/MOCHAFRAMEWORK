// To run the test cases your folder name should be "Test" or "test" if not then user will get the error "Error: No test files found: "test"

var should = require('chai').should()
var expect = require('chai').expect  // Note that this is not a function, if you use as function then get an error TypeError: expect is not a function
var assert = require('chai').assert  // Note that this is not a function, if you use as function then get an error TypeError: assert is not a function

const name = 'vipul'

// import the function isElementPresent from "ElementPresentValidation.cy.js"

const{isElementPresent} = require('./ElementPresentValidation.cy.js')

// create log constant for console.log for simplicity

log = console.log


describe('Chai Should Expect and Assert', function(){
it('Should Pass', function(){
    name.should.to.equal('vipul')
    name.should.to.lengthOf(5)
    log(isElementPresent())
    if(isElementPresent().should.to.true){
        log('Should, Function has return the "Value" true')
    }
})
it('Expect Pass', function(){
    expect(name).to.equal('vipul') 
    expect(name).to.lengthOf(5)
    if(expect(isElementPresent()).to.true){
        log('Expect, Function has return the "Value" true')
    }
})
it('Assert Pass', function(){
    assert.equal(name,'vipul')
    assert.lengthOf(name,5)
    assert.equal(isElementPresent(),true)
})

it('Should Fail Equal', function(){
    name.should.to.equal('vipul Patel')
})
it('Expect Fail Equal', function(){
    expect(name).to.equal('vipul Patel') 
})
it('Assert Fail Equal', function(){
    assert.equal(name,'vipul Patel')
})

it('Should Fail Length', function(){
    name.should.to.lengthOf(10)
})
it('Expect Fail Length', function(){ 
    expect(name).to.lengthOf(10)
})
it('Assert Fail Length', function(){
    assert.lengthOf(name,10)
})

it('Should Fail Function Return', function(){
    if(isElementPresent().should.to.false){
        log('Should, Function has return the "Value" true')
    }
    else
    log('Should, Function has return the "Value" true')
})

it('Expect Fail Function Return', function(){
    if(expect(isElementPresent()).to.false){
        log('Expect, Function has return the "Value" true')
    }
    else
    log('Should, Function has return the "Value" true')
})

it('Assert Fail Function Return', function(){
    assert.equal(isElementPresent(),false)
})
})
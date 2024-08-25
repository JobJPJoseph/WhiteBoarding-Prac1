const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const { logBetween, logBetweenStepper, printReverse, fizzBuzz, isPrime, maxValue,
    myIndexOf
} = require('../lib/whiteboarding-problems1');

describe('logBetween' , function () {

    it('should return an array from lowNum to highNum, inclusive', function () {
        expect(logBetween(-1, 2)).to.deep.equal([-1, 0, 1, 2]);
        expect(logBetween(14, 6)).to.deep.equal([]);
        expect(logBetween(4, 6)).to.deep.equal([4, 5, 6]);

    });

});

describe('logBetweenStep', function () {

    it('should return an array of numbers between min and max at step intervals.', function () {
        expect(logBetweenStepper(5, 9, 1)).to.deep.equal([5, 6, 7, 8, 9]);
        expect(logBetweenStepper(-10, 15, 5)).to.deep.equal([-10, -5, 0, 5, 10, 15]);
    });

});

describe('printReverse', function () {

    it('should return an array of all numbers from max to min (exclusive), in reverse order.', function () {
        expect(printReverse(13, 18)).to.deep.equal([17, 16, 15, 14]);
        expect(printReverse(90, 94)).to.deep.equal([93, 92, 91]);
    });

});

describe('fizzBuzz', function () {

    it('should takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.', function () {
        expect(fizzBuzz(20)).to.deep.equal([3, 5, 6, 9, 10, 12, 18]);
    });

});

describe('isPrime', function () {

    it('should returns true if number is prime. Otherwise, false. Assume number is a positive integer.', function () {
        expect(isPrime(2)).to.be.true;
        expect(isPrime(10)).to.be.false;
        expect(isPrime(11)).to.be.true;
        expect(isPrime(9)).to.be.false;
        expect(isPrime(2017)).to.be.true;
    });

});

describe('maxValue', function () {

    it('should return the largest value in array. Assume array is an array of numbers', function () {
        expect(maxValue([12, 6, 43, 2])).to.equal(43);
        expect(maxValue([])).to.be.null;
        expect(maxValue([-4, -10, 0.43])).to.equal(0.43);
    });

});

describe('myIndexOf', function () {
    let spyArrayIndexOf;
    let spyArrayIncludes;

    beforeEach(function () {
        spyArrayIndexOf = chai.spy.on(Array.prototype, 'indexOf');
        spyArrayIncludes = chai.spy.on(Array.prototype, 'includes');
    });

    afterEach(function () {
        chai.spy.restore(Array.prototype, 'indexOf');
        chai.spy.restore(Array.prototype, 'includes');
    });

    it('should return the index value of the target if it is present in the array or -1 if it is not present', function () {
        let result1 = myIndexOf([1, 2, 3, 4], 4);
        let result2 = myIndexOf([5, 6, 7, 8], 2);

        expect(spyArrayIndexOf).to.not.have.been.called.with(4);
        expect(spyArrayIncludes).to.not.have.been.called.with(4);
        expect(spyArrayIndexOf).to.not.have.been.called.with(2);
        expect(spyArrayIncludes).to.not.have.been.called.with(2);

        expect(result1).to.equal(3);
        expect(result2).to.equal(-1);
    });

});

const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const { logBetween, logBetweenStepper, printReverse, fizzBuzz, isPrime, maxValue,
    myIndexOf, factorArray, oddRange, reverseHyphenString, intersect, mirrorArray,
    abbreviate, adults, countScores
} = require('../lib/whiteboarding-problems1');
const { interfaces } = require('mocha');

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

describe('factorArray', function () {

    it('should return an array of all the factors', function () {
        expect(factorArray([2,3,4,5,6], 20)).to.deep.equal([2,4,5]);
        expect(factorArray([2,3,4,5,6], 35)).to.deep.equal([5]);
        expect(factorArray([10,15,20,25], 5)).to.deep.equal([]);
    });

});

describe('oddRange', function () {

    it('should return an array containing all positive odd numbers up to end', function () {
        expect((oddRange(13))).to.deep.equal([1,3,5,7,9,11,13]);
        expect(oddRange(6)).to.deep.equal([1,3,5]);
    });

});

describe('reverseHyphenString', function () {

    it('should return a hyphenated string reversed', function () {
        expect(reverseHyphenString(`Go-to-the-store`)).to.equal('store-the-to-Go');
        expect(reverseHyphenString(`Jump,-jump-for-joy`)).to.equal('joy-for-jump-Jump,');
    });

});

describe('intersect', function () {

    it('should return a new array containing the elements common to both arr1 and arr2', function () {
        expect(intersect(['a','b','c','d'], ['b','d','e'])).to.deep.equal(['b','d']);
        expect(intersect(['a','b','c'], ['x','y','z'])).to.deep.equal([]);
    });

});

describe('mirrorArray', function () {

    it('should return a new array mirrored as shown in the examples', function () {
        expect(mirrorArray([1,2,3])).to.deep.equal([1,2,3,3,2,1]);
        expect(mirrorArray(['a', 'b', 'c', 'd'])).to.deep.equal([ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]);
    });

});

describe('abbreviate', function () {

    it('should return a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters.', function () {
        expect(abbreviate('the bootcamp is fun')).to.equal('the btcmp is fun');
        expect(abbreviate('programming is fantastic')).to.equal('prgrmmng is fntstc');
        expect(abbreviate('hello world')).to.equal('hll wrld');
        expect(abbreviate('how are you')).to.equal('how are you');
    });

});

describe('adults', function () {

    it('should return an arrat containing the names of those who have an age of 18 or higher.', function () {
        expect(adults([
            {name: 'John', age: 20},
            {name: 'Jim', age: 13},
            {name: 'Jane', age: 18},
            {name: 'Bob', age: 7}
        ])).to.deep.equal(['John', 'Jane']);
    });

});

describe('countScores', function () {

    it('should return an object that has key-value pairs where each name is a key and the value is their total score.', function () {
        expect(countScores([
            { name: "Anthony", score: 10 },
            { name: "Fred", score : 10 },
            { name: "Anthony", score: -8 },
            { name: "Winnie", score: 12 }
        ])).to.deep.equal({ Anthony: 2, Fred: 10, Winnie: 12 });

        expect(countScores([
            { name: "Anthony", score: 2 },
            { name: "Winnie", score: 2 },
            { name: "Fred", score: 2 },
            { name: "Winnie", score: 2 },
            { name: "Fred", score: 2 },
            { name: "Anthony", score: 2 },
            { name: "Winnie", score: 2 }
        ])).to.deep.equal({ Anthony: 4, Fred: 4, Winnie: 6 });
    });

});

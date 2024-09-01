const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const { logBetween, logBetweenStepper, printReverse, fizzBuzz, isPrime, maxValue,
    myIndexOf, factorArray, oddRange, reverseHyphenString, intersect, mirrorArray,
    abbreviate, adults, countScores, firstNPrimes, peakFinder, divisibleByThreePairSum,
    zipArray, twoDimensionalTotal, countInnerElement, twoDiff, arrayDiff, valueCounter,
    elementCount, nextTwoPrimes, pairProduct, twoDimensionalSize, longWordCount
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

describe('firstNPrimes', function () {

    it('should return an array of the first n prime numbers.', function () {
        expect(firstNPrimes(0)).to.deep.equal([]);
        expect(firstNPrimes(1)).to.deep.equal([2]);
        expect(firstNPrimes(4)).to.deep.equal([2, 3, 5, 7]);
    });

});

describe('peakFinder', function () {

    it('should return an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. fi it is first or last element, it is a peak if it is greater than its one neighbor.', function () {
        expect(peakFinder([1, 2, 3, 2, 1])).to.deep.equal([2]);
        expect(peakFinder([2, 1, 2, 3, 4, 5])).to.deep.equal([0, 5]);
        expect(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])).to.deep.equal([2, 6, 8]);
    });

});

describe('divisbleByThreePairSum', function () {

    it('should return an array of all the pairs of indices, whose elements sum to a multiple of three', function () {
        expect(divisibleByThreePairSum([1, 6, 3, 4, 2, 0])).to.deep.equal([[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]);
        expect(divisibleByThreePairSum([8, 3, 5, 9, 2])).to.deep.equal([[1, 3]]);

    });

});

describe('zipArray', function () {

    it('should takes in two arrays and zips them together by return a single 2D-array', function () {
        expect(zipArray(['a', 'b', 'c', 'd'], [10, 20, 30, 40])).to.deep.equal([ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]);
    });

});

describe('twoDimensionalTotal', function () {

    it('should return the total sum of all elements', function () {
        expect(twoDimensionalTotal([
            [5, 2, 5, 3],
            [12, 13]
        ])).to.equal(40);

        expect(twoDimensionalTotal([
            [2],
            [1, 9],
            [1, 1, 1]
        ])).to.equal(15);

    });

});

describe('countInnerElement', function () {

    it('should return an object that counts how many times each element in each sub array repeats', function () {
        expect(countInnerElement([
            [1, 2, 4, 5],
            [2, 7, 4],
            [1, 4, 5, 2, 7]
        ])).to.deep.equal({1: 2, 2: 3, 4: 3, 5: 2, 7: 2});

        expect(countInnerElement([
            ['a','b','c','d'],
            ['a','b'],
            ['a','c','d','a']
        ])).to.deep.equal({a: 4, b: 2, c: 2, d: 2});
    });

});

describe('twoDiff', function () {

    it('should return a 2-D array, where each of the sub array are indices of the two numbers such that their difference is 2. If there are no such numbers, return an empty array', function () {
        expect(twoDiff([2, 3, 4, 6, 1, 7])).to.deep.equal([[0, 2], [1, 4], [2, 3]]);
        expect(twoDiff([0, 2, 4, 3, 5])).to.deep.equal([[0, 1], [1, 2], [3,4]]);
        expect(twoDiff([])).to.deep.equal([]);

    });

});

describe('arrayDiff', function () {

    it('should return a new array, containing the elements of arr1 that are not also in arr2', function () {
        expect(arrayDiff([1, 23, 2, 43, 3, 4], [3, 23])).to.deep.equal([1, 2, 43 ,4]);
        expect(arrayDiff(['a', 'ab', 'c', 'd', 'c'], ['d'])).to.deep.equal(['a', 'ab', 'c', 'c']);
    });

});

describe('valueCounter', function () {

    it('should return the number of times val repeats as a value in obj.', function () {
        expect(valueCounter({ 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }, 'Anne')).to.equal(3);
        expect(valueCounter({ Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }, 88)).to.equal(0);
        expect(valueCounter({ Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }, 'Roman')).to.equal(2);

    });

});

describe('elementCount', function () {

    it('should return a object. Each key corresponds to an element in the array and the value corresponds to how many times that element appeats in the array.', function () {
        expect(elementCount(["a", "a", "b", "b"])).to.deep.equal({ "a" : 2, "b" : 2 });
        expect(elementCount(['c', 'a', 'c', 'a', 'b'])).to.deep.equal({ "c": 2, "a": 2, "b": 1 });
    });

});

describe('nextTwoPrimes', function () {

    it('should returns the next two prime numbers greater than num', function () {
        expect(nextTwoPrimes(2)).to.deep.equal([ 3, 5 ]);
        expect(nextTwoPrimes(3)).to.deep.equal([ 5, 7 ]);
        expect(nextTwoPrimes(7)).to.deep.equal([ 11, 13 ]);

        expect(nextTwoPrimes(8)).to.deep.equal([ 11, 13 ]);
        expect(nextTwoPrimes(20)).to.deep.equal([ 23, 29 ]);
        expect(nextTwoPrimes(97)).to.deep.equal([ 101, 103 ]);
    });

});

describe('pairProduct', function () {

    it('should return pairs of indices whose elements multiple to num. No pair should appear twice in the result.', function () {
        expect(pairProduct([1, 2, 3, 4, 5], 4)).to.deep.equal([ [ 0, 3 ] ]);
        expect(pairProduct([1, 2, 3, 4, 5], 8)).to.deep.equal([ [ 1, 3 ] ]);
        expect(pairProduct([1, 2, 3, 12, 8], 24)).to.deep.equal([ [ 1, 3 ], [ 2, 4 ] ]);
    });

});

describe('twoDimensionalSize', function () {

    it('should return the total number of elements in the 2D-array', function () {
        expect(twoDimensionalSize([
            [1, 2, 3],
            [4, 5],
            [6, 7, 8, 9]
        ])).to.equal(9);

        expect(twoDimensionalSize([
            ['a'],
            ['b', 'c', 'd', 'e']
        ])).to.equal(5);
    });

});

describe('longWordCount', function () {

    it('longWordCount', function () {
        expect(longWordCount("")).to.equal(0);
        expect(longWordCount("short words only")).to.equal(0);
        expect(longWordCount("one reallylong word")).to.equal(1);
        expect(longWordCount("two reallylongwords inthisstring")).to.equal(2);
        expect(longWordCount("allwordword longwordword wordswordword")).to.equal(3);
        expect(longWordCount("severty schfifty five")).to.equal(1);

    });

});

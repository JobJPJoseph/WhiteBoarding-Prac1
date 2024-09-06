const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const { logBetween, logBetweenStepper, printReverse, fizzBuzz, isPrime, maxValue,
    myIndexOf, factorArray, oddRange, reverseHyphenString, intersect, mirrorArray,
    abbreviate, adults, countScores, firstNPrimes, peakFinder, divisibleByThreePairSum,
    zipArray, twoDimensionalTotal, countInnerElement, twoDiff, arrayDiff, valueCounter,
    elementCount, nextTwoPrimes, pairProduct, twoDimensionalSize, longWordCount, factorial,
    lcm, hipsterfyWord, hipsterfy, objectToString, shortestWord, greatestCommonFactor, isPassing,
    valueConcat, threeInARow, variableNameify, threeIncreasing, reverse2D, reverb, countRepeats,
    pairsToString, countAdjacentSums, signFlipCount, powerSequence, collapseString, oddWordsOut,
    mindPsAndQs, commonFactors, commonPrimeFactors, splitHalfArray, threeUniqueVowels, vowelShift
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

describe('factorial', function () {

    it('should return the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.', function () {
        expect(factorial(1)).to.equal(1);
        expect(factorial(4)).to.equal(24);
        expect(factorial(5)).to.equal(120);
        expect(factorial(10)).to.equal(3628800);
    });

});

describe('lcm', function () {

    it('should return the lowest number which is a multiple of both num1 and num2', function () {
        expect(lcm(2, 3)).to.equal(6);
        expect(lcm(6, 10)).to.equal(30);
        expect(lcm(24, 26)).to.equal(312);
    });

});

describe('hipsterfyWord', function () {

    it('should the string with the last vowel removed.', function () {
        expect(hipsterfyWord('proper')).to.equal('propr');
        expect(hipsterfyWord('tonic')).to.equal('tonc');
        expect(hipsterfyWord('PANTHER')).to.equal('PANTHR');
        expect(hipsterfyWord('BACKWARDS')).to.equal('BACKWRDS');

    });

});

describe('hipsterfy', function () {

    it('should remove the last vowel from each word', function () {
        expect(hipsterfy('proper')).to.equal('propr');
        expect(hipsterfy('proper tonic panther')).to.equal('propr tonc panthr');
        expect(hipsterfy('towel flicker banana')).to.equal('towl flickr banan');
        expect(hipsterfy('runner anaconda')).to.equal('runnr anacond');
        expect(hipsterfy('turtle cheeseburger fries')).to.equal('turtl cheeseburgr fris');
    });

});

describe('objectToString', function () {

    it('should return a string represent the counts of each character', function () {
        expect(objectToString({ a : 2, b: 4, c: 1 })).to.equal('aabbbbc');
        expect(objectToString({ b: 1, o: 2, t: 1 })).to.equal('boot');
    });

});

describe('shortestWord', function () {

    it('should return the shortest word of a sentence.', function () {
        expect(shortestWord('app academy is cool')).to.equal('is');
        expect(shortestWord('programming bootcamp')).to.equal('bootcamp');
    });

});

describe('greatestCommonFactor', function () {

    it('should return the largest number that is divides both num1 and num2', function () {
        expect(greatestCommonFactor(15, 25)).to.equal(5);
        expect(greatestCommonFactor(16, 24)).to.equal(8);
        expect(greatestCommonFactor(7, 11)).to.equal(1);
    });

});

describe('isPassing', function () {

    it('should return treu if the average assessment score is at least 70.', function () {
        expect(isPassing([
            { number: 1, score: 60 },
            { number: 2, score: 90 },
            { number: 3, score: 80 },
            { number: 4, score: 100 },
            { number: 5, score: 85 }
        ])).to.be.true;
    });

    it('should return false otherwise', function () {
        expect(isPassing([
            { number: 1, score: 60 },
            { number: 2, score: 20 },
            { number: 3, score: 45 }
        ])).to.be.false;
    });

});

describe('valueConcat', function () {

    it('should return a new array where each element is concatenated with its corresponding value from the object', function () {
        expect(valueConcat(['alex', 'maurice', 'meagan', 'ali'], { alex: 'bronca', ali: 'harris' })).to.deep.equal([ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]);
        expect(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })).to.deep.equal([ 'a', 'b2', 'c3' ]);
    });

});

describe('threeInARow', function () {

    it('should return true if the array contains 3 of the same number consecutively', function () {
        expect(threeInARow([4, 3, 7, 7, 7, 13, 8])).to.be.true;
    });

    it('The function should return false otherwise', function () {
        expect(threeInARow([10, 9, 20, 33, 3, 3])).to.be.false;
    });

});

describe('variableNameify', function () {

    it('should return a string representing the variable name obtained by combineding the words and capitalizing them in mixCased style', function () {
        expect(variableNameify(['is', 'prime'])).to.equal('isPrime');
        expect(variableNameify(['remove', 'last', 'vowel'])).to.equal('removeLastVowel');
        expect(variableNameify(['MaX', 'VALUE'])).to.equal('maxValue');
    });

});

describe('threeIncreasing', function () {

    it('should return true of the array contains 3 consecutive numbers in increasing order.', function () {
        expect(threeIncreasing([3, 2, 11, 12, 13, 2, 4])).to.be.true;
    });

    it('The function should return false otherwise.', function () {
        expect(threeIncreasing([7, 2, 4, 5, 2, 1, 6])).to.be.false;
    });

});

describe('reverse2D', function () {

    it('should a string representing the elements of the array in reverse order.', function () {
        expect(reverse2D([
            ['a', 'b', 'c', 'd'],
            ['e', 'f'],
            ['g', 'h', 'i']
        ])).to.equal('ihgfedcba');

        expect(reverse2D([
            ['Julian', 'Matt', 'Mike'],
            ['Oscar', 'Patrick']
        ])).to.equal('PatrickOscarMikeMattJulian');
    });

});

describe('reverb', function () {

    it('should return the word with all characters after the last vowel repeated', function () {
        expect(reverb('running')).to.equal('runninging');
        expect(reverb('wild')).to.equal('wildild');
        expect(reverb('debugged')).to.equal('debuggeded');
        expect(reverb('my')).to.equal('my');

    });

});

describe('countRepeats', function () {

    it('should return the number of letters that appear more than once in the string.', function () {
        expect(countRepeats('calvin')).to.equal(0);
        expect(countRepeats('caaaalvin')).to.equal(1);
        expect(countRepeats('pops')).to.equal(1);
        expect(countRepeats('mississippi')).to.equal(3);
        expect(countRepeats('hellobootcampprep')).to.equal(4);
    });

});

describe('pairsToString', function () {

    it('should return a string corresponding to the pairs', function () {
        expect(pairsToString([
            ['a', 3],
            ['b', 1],
            ['c', 2]
        ])).to.equal('aaabcc');

        expect(pairsToString([
            ['f', 1],
            ['o', 2],
            ['d', 1],
            ['!', 1]
        ])).to.equal('food!');
    });

});

describe('countAdjacentSums', function () {

    it('should count the number of times that two adjacent numbers in an array add up to n.', function () {
        expect(countAdjacentSums([1, 5, 1], 6)).to.equal(2);
        expect(countAdjacentSums([7, 2, 4, 6], 7)).to.equal(0);
        expect(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)).to.equal(3);
    });

});

describe('signFlipCount', function () {

    it('should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative', function () {
        expect(signFlipCount([5, 6, 10, 3])).to.equal(0);
        expect(signFlipCount([-12, 0, -3, -5])).to.equal(0);
        expect(signFlipCount([-12, 10, -3, -5])).to.equal(2);
        expect(signFlipCount([1, -2, -3, -4])).to.equal(1);
        expect(signFlipCount([-1, 11.3, -3, 100])).to.equal(3);

    });

});

describe('powerSequence', function () {

    it('should return an array containing a power sequence with the given', function () {
        expect(powerSequence(3, 4)).to.deep.equal([ 3, 9, 27, 81 ]);
        expect(powerSequence(2, 6)).to.deep.equal([ 2, 4, 8, 16, 32, 64 ]);
        expect(powerSequence(8, 3)).to.deep.equal([ 8, 64, 512 ]);
    });

});

describe('collapseString', function () {

    it('should return the string where streaks of consecutive characters are collapsed to a single character.', function () {
        expect(collapseString('apple')).to.equal('aple');
        expect(collapseString('AAAaalviiiiin!!!')).to.equal('Aalvin!');
        expect(collapseString('hello   app academy')).to.equal('helo ap academy');
    });

});

describe('oddWordsOut', function () {

    it('should returns the sentence where words with an odd number of characters are removed.', function () {
        expect(oddWordsOut('go to the store and buy milk')).to.equal('go to milk');
        expect(oddWordsOut('what is the answer')).to.equal('what is answer');
    });

});

describe('mindPsAndQs', function () {

    it('should return the length of the longest consecutive streak of the letters P and Q', function () {
        expect(mindPsAndQs('BOOTCAMP')).to.equal(1);
        expect(mindPsAndQs('APCDQQPPC')).to.equal(4);
        expect(mindPsAndQs('PQPQ')).to.equal(4);
        expect(mindPsAndQs('PPPXQPPPQ')).to.equal(5);

    });

});

describe('commonFactors', function () {

    it('should return an array that contains the common factors between both numbers. A factor is a number that divides another number with no remainder', function () {
        expect(commonFactors(12, 50)).to.deep.equal([ 1, 2 ]);
        expect(commonFactors(6, 24)).to.deep.equal([ 1, 2, 3, 6 ]);
        expect(commonFactors(11, 22)).to.deep.equal([ 1, 11 ]);
        expect(commonFactors(45, 60)).to.deep.equal([ 1, 3, 5, 15 ]);
    });

});

describe('commonPrimeFactors', function () {

    it('should return an array of all prime factors that are common between the two numbers.', function () {
        expect(commonPrimeFactors(12, 50)).to.deep.equal([ 2 ]);
        expect(commonPrimeFactors(6, 24)).to.deep.equal([ 2, 3 ]);
        expect(commonPrimeFactors(11,22)).to.deep.equal([ 11 ]);
        expect(commonPrimeFactors(45, 60)).to.deep.equal([ 3, 5 ]);
    });

});

describe('splitHalfArray', function () {

    it('should return two halves of that array split in the middle.', function () {
        expect(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f'])).to.deep.equal([ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]);
    });

    it('if the array has an odd number of elements, then the middle element should be excluded', function () {
        expect(splitHalfArray([1, 2, 3, 4, 5])).to.deep.equal([ [ 1, 2 ], [ 4, 5 ] ]);
    });

});

describe('threeUniqueVowels', function () {

    it('should return true if the string contains at least three different vowels.', function () {
        expect(threeUniqueVowels('delicious')).to.be.true;
        expect(threeUniqueVowels('the bootcamp')).to.be.true;
    });

    it('should return false if the string does not contain at least three different vowels.', function () {
        expect(threeUniqueVowels('bootcamp')).to.be.false;
        expect(threeUniqueVowels('dog')).to.be.false;
        expect(threeUniqueVowels('go home')).to.be.false;
    });

});

describe('vowelShift', function () {

    it('should return a new sentence, where every vowel is replaced with the next vowel in the alphabet', function () {
        expect(vowelShift('bootcamp')).to.equal('buutcemp');
        expect(vowelShift('hello world')).to.equal('hillu wurld');
        expect(vowelShift('on the hunt')).to.equal('un thi hant');
    });

});

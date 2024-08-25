function logBetween(lowNum, highNum) {
    // if (highNum < lowNum) return [];

    // let result = [];

    // for (let i = lowNum; i <= highNum; i++) {
    //     result.push(i);
    // }

    // return result;

    // Time: O(n) Space: O(n)
    // We can make this better

    if (highNum < lowNum) return [];

    let result = new Array((highNum - lowNum) + 1);

    let num = lowNum;

    for (let i = 0; i < result.length; i++) {
        result[i] = num;
        num++;
    }

    return result;

    // We removed Array.push() even though its insignificant. It does cause a fault error
} // Time: O(n) Space: O(n

function logBetweenStepper(min, max, step) {
    let result = [];

    for (let i = min; i <= max; i+=step) {
        result.push(i);
    }

    return result
} // Time: O(n) Space: O(n)

function printReverse(min, max) {
    let result = [];

    for (let i = max - 1; i > min; i--) {
        result.push(i);
    }

    return result;
} // Time: O(n) Space: O(n)

function fizzBuzz(max) {
    let result = [];

    for (let i = 0; i < max; i++) {
        if (!(i % 3 === 0 && i % 5 === 0) && (i % 3 === 0 || i % 5 === 0)) result.push(i);
    }

    return result;
} // Time: O(n) SpaceO(1)

function isPrime(number) {
    if (number === 2) return true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }

    return true;
} // Time: O(n) Space: O(1)

function maxValue(array) {
    if (!array.length) return null;

    let highest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (highest < array[i]) highest = array[i];
    }

    return highest;
    // return Math.max(...array);
} // Time: O(n) Space: O(1)

function myIndexOf(array, target) {

    for (let i = 0; i < array.length; i++) {
        if (target === array[i]) return i;
    }

    return -1;
} // Time: O(n) Space: O(1)

function factorArray(array, number) {
    return array.filter(function (num) {
        return number % num === 0;
    });
} // Time: O(n) Space: O(n)

function oddRange(end) {
    let result = [];

    for (let i = 0; i <= end; i++) {
        if (i % 2 !== 0) result.push(i);
    }

    return result;
} // Time: O(n) Space: O(n)

module.exports = {
    logBetween,
    logBetweenStepper,
    printReverse,
    fizzBuzz,
    isPrime,
    maxValue,
    myIndexOf,
    factorArray,
    oddRange
}

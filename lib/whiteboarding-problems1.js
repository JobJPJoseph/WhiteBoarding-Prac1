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
    if (number < 2) return false;
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

function reverseHyphenString(string) {
    let splitString = string.split('-');
    let result = [];


    for (let i = splitString.length - 1; i >= 0; i--) {
        result.push(splitString[i]);
    }

    return result.join('-');
} // Time: O(n) Space: O(n)

function intersect(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let charOne = arr1[i];

        for (let j = 0; j < arr2.length; j++) {
            let charTwo = arr2[j];

            if (charOne === charTwo) result.push(charOne);
        }

    }
    return result;
} // Time: O(n^2) Space: O(n)

function mirrorArray(array) {
    let result = new Array(array.length * 2);

    for (let i = 0; i < array.length; i++) {
        let reverseReference = (((array.length * 2) - i) - 1);
        result[i] = array[i];
        result[reverseReference] = array[i];
    }

    return result;
} // Time: O(n) Space: O(n)

function abbreviate(sentence) {
    let sent = sentence.split(" ");
    let result = new Array(sent.length);
    const VOWELS = ['a','e','i','o','u'];

    for(let i = 0; i < sent.length; i++) {
        let word = sent[i];
        let newWord = "";

        if (word.length < 4) {
            result[i] = word;
        } else {

            for (let j = 0; j < word.length; j++) {
                let char = word[j];

                if (!(VOWELS.includes(char))) newWord += char;
            }

            result[i] = newWord;
        }

    }

    return result.join(' ');
} // Time: O(n^3) Space: O(n), Needs refactoring!!!

function adults(ppl) {
    let result = [];

    for (let i = 0; i < ppl.length; i++) {
        let obj = ppl[i];

        if (obj.age >= 18) result.push(obj.name);
    }

    return result;
} // Time: O(n) Space: O(n)

function countScores(people) {
    let result = {};

    for (let i = 0; i < people.length; i++) {
        let {name, score} = people[i];

        if (result[name] === undefined) {
            result[name] = score;
        } else {
            result[name] += score;
        }

    }

    return result;
} // Time: O(n) Space: O(n)

function firstNPrimes(n) {
    let result = [];
    let length = result.length;
    let num = 0;

    while(length < n) {

        if (isPrime(num)) {
            result.push(num);
            length++;
        }

        num++;
    }

    return result;
}

module.exports = {
    logBetween,
    logBetweenStepper,
    printReverse,
    fizzBuzz,
    isPrime,
    maxValue,
    myIndexOf,
    factorArray,
    oddRange,
    reverseHyphenString,
    intersect,
    mirrorArray,
    abbreviate,
    adults,
    countScores,
    firstNPrimes
}

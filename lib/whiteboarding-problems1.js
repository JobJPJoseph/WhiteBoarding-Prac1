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
} // Time: O(n^2) Space: O(n)

function peakFinder(array) {
    // Assume a length >= 2
    // We will start at index 1
        // We will grab the index to the left and right of it. Then test if it is a isInteger and is it smaller than current
        // If true, it is a peak

    let result = [];

    for (let i = 0; i < array.length; i++) {
        let left = array[i - 1];
        let right = array[i + 1];
        let current = array[i];

        if (i === 0) {
            if (current > right) result.push(i);
        }

        if (i > 0  && i < array.length - 1) {
            if (current > left && current > right) result.push(i);
        }

        if (i === array.length - 1) {
            if (current > left) result.push(i);
        }

    }

    return result;
} // Time: O(n) Space: O(n)

function divisibleByThreePairSum(array) {
    /*
        This needs to a 2-d loop
        We need to iterate thru the indices and references the elements
        The goal is to see if the elements and of to a multiple of three.
            if true, add the pair to the reuslt

        Note: Since we need to constantly need to loop for a multiple, we can cache them.
    */

    let result = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let num = array[j];
            let sum = element + num;

            if (sum % 3 === 0) result.push([i, j]);
        }
    }

    return result;
} // Time: O(n^2) Space: O(n^2)

function zipArray(arr1, arr2) {
    // Assume both are the same length;
    let result = new Array(arr1.length);

    for (let i = 0; i < arr1.length; i++) {
        result[i] = [arr1[i], arr2[i]];
    }

    return result;
} // Time: O(n) Space: O(n)

function twoDimensionalTotal(array) {
    let sums = 0;

    for (let i = 0; i < array.length; i++) {
        let arr = array[i];

        for (let j = 0; j < arr.length; j++) {
            let num = arr[j];

            sums += num;
        }

    }

    return sums;
} // Time: O(n^2) Space: O(1)

function countInnerElement(array) {
    let result = {};

    for (let i = 0; i < array.length; i++) {
        let subArr = array[i];

        for (let j = 0; j < subArr.length; j++) {
            let element = subArr[j];

            if (result[element] === undefined) {
                result[element] = 1;
            } else {
                result[element]++;
            }

        }

    }

    return result
} // Time: O(n^2) Space: O(n)

function twoDiff(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let element = array[j];

            let sums = num - element;
            if (Math.abs(sums) === 2) result.push([i, j]);
        }

    }

    return result;
} // Time: O(n) Space: O(n^2)

function arrayDiff(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i];

        if (!arr2.includes(num)) result.push(num);
    }

    return result;
} // Time: O(n^2) Space: O(n)

function valueCounter(obj, val) {
    let result = 0;

    for (let pair in obj) {
        let value = obj[pair];

        if (value === val) result++;
    }

    return result;
} // Time: O(n) Space: O(1)

function elementCount(array) {
    let result = {};

    for (let i = 0; i < array.length; i++) {
        let char = array[i];

        if (result[char] === undefined) {
            result[char] = 1;
        } else {
            result[char]++;
        }

    }

    return result;
} // Time: O(n) Space: O(n)

function nextTwoPrimes(num) {
    let count = 2;
    let result = [];
    let index = num + 1;

    while (count > 0) {
        if (isPrime(index)) {
            result.push(index);
            count--;
        }
        index++;
    }

    return result;
} // Time: O(n^2) Space: O(n)

function pairProduct(arr, num) {
    let result = [];
    let outer = 0;

    while (outer < arr.length) {
        let inner = outer + 1;
        let number = arr[outer];

        while (inner < arr.length) {
            let element = arr[inner];
            if (number * element === num) result.push([outer, inner]);
            inner++;
        }

        outer++;
    }

    return result;
} // Time: O(n^2) Space: O(n)

function twoDimensionalSize(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        count += array[i].length;
    }

    return count;
} // Time: O(n) Space: O(1)

function longWordCount(string) {
    // longger than 7 characters
    let count = 0;
    let arr = string.split(" ");

    for(let i = 0; i < arr.length; i++) {
        if (arr[i].length > 7) count++;
    }

    return count;
} // Time: O(n) Space: O(n)

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
} // Time: O(n) Space: O(1)

function lcm(num1, num2) {
    let result = (num1 * num2);
    if (result / 2 === num2 || result / 2 === num1) {
        return result;
    } else {
        return result / 2;
    }
} // Time: O(1) Space: O(1)

function hipsterfyWord(string) {
    let word = "";
    const VOWELS = {a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'};
    let remove = false;

    for (let i = string.length - 1; i >= 0; i--) {
        let char = string[i];

        if (remove) {
            word = char + word;
        } else {

            if(VOWELS[char.toLowerCase()]) {
                remove = true;
            } else {
                word = char + word;
            }

        }

    }

    return word;
} // Time: O(n) Space: O(n)


function hipsterfy(sentence) {
    let sent = sentence.split(' ');
    let result = new Array(sent.length);

    for (let i = 0; i < sent.length; i++) {
        let word = sent[i];

        result[i] = hipsterfyWord(word);
    }

    return result.join(' ');
} // Time: O(n^2) Space: O(n^2)

function objectToString(letterObj) {
    let letter = "";

    for (let char in letterObj) {
        let count = letterObj[char];

        for (let i = 0; i < count; i++) {
            letter += char;
        }

    }

    return letter;
} // Time: O(n^2) Space: O(1)

function shortestWord(sentence) {
    let references;
    let sent = sentence.split(' ');

    for (let i = 0; i < sent.length; i++) {
        let word = sent[i];
        if (references) {
            if (sent[references].length > word.length) references = i;
        } else {
            references = i;
        }
    }

    return sent[references];
} // Time: O(n) Space: O(n)

function greatestCommonFactor(num1, num2) {
    // We can cut the first num in half and start from there
    let gcf = 1;

    for (let i = 1; i < num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) gcf = i;
    }

    return gcf;
} // Time: O(n) Space: O(1)

function isPassing(assessments) {
    let avg = 0;

    for (let i = 0; i < assessments.length; i++) {
        let { score } = assessments[i];
        avg += score;
    }

    let result = (avg / assessments.length)

    return Math.round(result) > 70;
} // Time: O(n) Space: O(1)

function valueConcat(arr, obj) {
    let result = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];

        if (obj[key]) {
            result[i] = key + obj[key];
        } else {
            result[i] = key;
        }

    }

    return result;
} // Time: O(n) Space: O(n)

function threeInARow(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        let current = arr[i];
        let left = arr[i - 1];
        let right = arr[i + 1];

        if (current === left && current === right) return true;
    }

    return false;
} // Time: O(n) Space: O(1)

function variableNameify(words) {
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (i === 0) {
            result += word.toLowerCase();
        } else {
            result += (word[0].toUpperCase() + word.substr(1).toLowerCase());
        }
    }

    return result;
} // Time: O(n^2) Space: O(1)

function threeIncreasing(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        let left = arr[i - 1];
        let current = arr[i];
        let right = arr[i + 1];

        if (current - left === 1 && right - current === 1) return true;
    }

    return false;
} // Time: O(n) Space: O(1)

function reverse2D(array) {
    let result = "";

    for (let i = array.length - 1; i >= 0; i--) {
        let arr = array[i];

        for (let j = arr.length - 1; j >= 0; j--) {
            let letter = arr[j];

            result += letter;
        }

    }

    return result;
} // Time: O(n^2) Space: O(1)

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
    firstNPrimes,
    peakFinder,
    divisibleByThreePairSum,
    zipArray,
    twoDimensionalTotal,
    countInnerElement,
    twoDiff,
    arrayDiff,
    valueCounter,
    elementCount,
    nextTwoPrimes,
    pairProduct,
    twoDimensionalSize,
    longWordCount,
    factorial,
    lcm,
    hipsterfyWord,
    hipsterfy,
    objectToString,
    shortestWord,
    greatestCommonFactor,
    isPassing,
    valueConcat,
    threeInARow,
    variableNameify,
    threeIncreasing,
    reverse2D
}

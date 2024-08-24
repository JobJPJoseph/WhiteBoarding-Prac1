const { expect } = require('chai');
const { logBetween, logBetweenStepper,
    printReverse
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


});

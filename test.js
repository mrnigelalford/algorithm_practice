"use strict";
exports.__esModule = true;
var assert = require('assert');
var prep_1 = require("./prep");
var chai_1 = require("chai");
describe('arrayManip', function () {
    it('should return 200', function () {
        var v1 = [
            [1, 2, 100],
            [2, 5, 100],
            [3, 4, 100],
        ];
        assert.equal(200, prep_1.Prep.arrayManip(5, v1));
    });
    it('should return 10', function () {
        var v2 = [
            [1, 5, 3],
            [4, 8, 7],
            [6, 9, 1],
        ];
        assert.equal(10, prep_1.Prep.arrayManip(10, v2));
    });
    it('should return 31', function () {
        var v3 = [
            [2, 6, 8],
            [3, 5, 7],
            [1, 8, 1],
            [5, 9, 15],
        ];
        assert.equal(31, prep_1.Prep.arrayManip(10, v3));
    });
    it('should return 6314', function () {
        var arr = [
            [19, 28, 419],
            [4, 23, 680],
            [5, 6, 907],
            [19, 33, 582],
            [5, 9, 880],
            [10, 13, 438],
            [21, 39, 294],
            [13, 18, 678],
            [12, 26, 528],
            [15, 30, 261],
            [8, 9, 48],
            [21, 23, 131],
            [20, 21, 7],
            [13, 40, 65],
            [13, 23, 901],
            [15, 15, 914],
            [14, 35, 704],
            [20, 39, 522],
            [10, 18, 379],
            [16, 27, 8],
            [25, 40, 536],
            [5, 9, 190],
            [17, 20, 809],
            [8, 20, 453],
            [22, 37, 298],
            [19, 37, 112],
            [2, 5, 186],
            [21, 29, 184],
            [23, 30, 625],
            [2, 8, 960],
        ];
        assert.equal(6314, prep_1.Prep.arrayManip(40, arr));
    });
});
describe('triplet comparison', function () {
    it('should return an array length of 2', function () {
        var A = [17, 28, 30];
        var B = [99, 16, 8];
        assert.equal(2, prep_1.Prep.compareTriplets(A, B).length);
    });
    it('should yield a tie', function () {
        var A = [17, 28, 30];
        var B = [99, 16, 8];
        chai_1.expect([2, 1]).to.eql(prep_1.Prep.compareTriplets(A, B));
        chai_1.expect([1, 0]).to.not.eql(prep_1.Prep.compareTriplets(A, B));
    });
});
describe('stats - mean, median, mode', function () {
    var a = '64630 11735 14216 99233 14470 4978 73429 38120 51135 67060';
    it('should return a 3 long array', function () {
        chai_1.expect(prep_1.Prep.statDay0(a).length).to.eql(3);
    });
    it('should return a mean of 43900.6', function () {
        chai_1.expect(prep_1.Prep.statDay0(a)[0]).to.eql(43900.6);
    });
    it('should return a median of 44627.5', function () {
        chai_1.expect(prep_1.Prep.statDay0(a)[1]).to.eql(44627.5);
    });
    it('should return a mode of 4978', function () {
        chai_1.expect(prep_1.Prep.statDay0(a)[2]).to.eql(4978);
    });
});

const assert = require('assert');
import { Prep } from './prep';
import {expect} from 'chai';

describe('arrayManip', () => {
	it('should return 200', () => {
		const v1 = [
			[1, 2, 100],
			[2, 5, 100],
			[3, 4, 100],
		];
		assert.equal(200, Prep.arrayManip(5, v1));
	});

	it('should return 10', () => {
		const v2 = [
			[1, 5, 3],
			[4, 8, 7],
			[6, 9, 1],
		];

		assert.equal(10, Prep.arrayManip(10, v2));
	});

	it('should return 31', () => {
		const v3 = [
			[2, 6, 8],
			[3, 5, 7],
			[1, 8, 1],
			[5, 9, 15],
		];

		assert.equal(31, Prep.arrayManip(10, v3));
	});

	it('should return 6314', () => {
		const arr = [
			[19,28,419],
			[4,23,680],
			[5,6,907],
			[19,33,582],
			[5,9,880],
			[10,13,438],
			[21,39,294],
			[13,18,678],
			[12,26,528],
			[15,30,261],
			[8,9,48],
			[21,23,131],
			[20,21,7],
			[13,40,65],
			[13,23,901],
			[15,15,914],
			[14,35,704],
			[20,39,522],
			[10,18,379],
			[16,27,8],
			[25,40,536],
			[5,9,190],
			[17,20,809],
			[8,20,453],
			[22,37,298],
			[19,37,112],
			[2,5,186],
			[21,29,184],
			[23,30,625],
			[2,8,960]];

		assert.equal(6314, Prep.arrayManip(40, arr));
	});

});


describe('triplet comparison', () => {
	it('should return an array length of 2', () => {
		const A = [17,28,30];
		const B = [99,16,8];
		assert.equal(2, Prep.compareTriplets(A, B).length)
	})

	it('should yield a tie', () => {
		const A = [17,28,30];
		const B = [99, 16, 8];
		expect([2,1]).to.eql(Prep.compareTriplets(A, B));
		expect([1,0]).to.not.eql(Prep.compareTriplets(A, B));
	})
})
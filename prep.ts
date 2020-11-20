// TODO: return the lowest index at which a value should be inserted into an array once it has been sorted. The returned value should be a number
// first pass
const getIndexToInsert = (Arr: Array<number>, Num: number) => {
	Arr.push(Num);
	Arr.sort((a: number, b: number) => a - b);
	return Arr.indexOf(Num);
};
let testArray = [20, 3, 5, 30, 10, 2];
/*
 * console.log('starting array: ', testArray);
 * console.log('index is: ', getIndexToInsert(testArray, 4));
 * console.log('final array: ', testArray);
 */

// second pass
const getIndex = (Arr: Array<number>, Num: number) =>
	[...Arr, Num].sort((a: number, b: number) => a - b).indexOf(Num);

//////////////////////////////////////////////////////////////////////////////////////////

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

const initalArray = [0, 10, 20, 50, 80, 6, 13, 7];

function destroyerFn(arr) {
	// @ts-ignore
	const Obj = Object.values(arguments).slice(1);

	return arr.filter((item) => !Obj.find((x) => x === item));
}
// @ts-ignore
// console.log('destoy: ', destroyerFn(initalArray, 20));

function destroyerV2(arr) {
	return arr.filter(
		(item) =>
			// @ts-ignore
			!Object.values(arguments)
				.slice(1)
				.find((x) => x === item)
	);
}

//////////////////////////////////////////////////////////////////////////////////////////

// TODO: When Olivia blows out the candles, she’ll only be able to blow out the tallest ones.
// Your task is to find out how many candles she can successfully blow out.
// Ex. Olivia is turning 4 years old, the cake will have 4 candles of height 3, 3, 1, 2, how many will she able to blow out

// 1. map the candles
// 2. check each number
// 3. look for any numbers that are greater than or equal to that candle
// 4. return new array of possibilities

function getTallest(candles: Array<number>, age: number) {
	if (candles.length !== age) return false;
	return candles
		.sort()
		.filter((candle) => candle >= candles[candles.length - 1]).length;
}

const candles_olivia = [3, 3, 1, 2];
// console.log('olivia can blow out: ', getTallest(candles_olivia, 4));

// Result: returned wrong data. Why? Missed last part of question

//////////////////////////////////////////////////////////////////////////////////////////

/*
 * Given a range of numbered days,[i...j] and a number k
 * Determine the number of days in the range that are beautiful.
 * Beautiful numbers are defined as numbers where |i - reverse(i)| is evenly divisible by k.
 * If a day's value is a beautiful number, it is a beautiful day.
 * GOAL: Print the number of beautiful days in the range.
 *
 */

// reverse numbers in the array
// iterate over array, if array is divisible y k, push that number into new array
// return length of new array

function beautifulDays(start: number, end: number, possibles: number) {
	var reverse = (num) => {
		var reversedNum = parseInt(num.toString().split('').reverse().join(''));
		return Math.abs(num - reversedNum);
	};

	let perfDays = 0;

	for (let day = start; day <= end; day++) {
		const revD = reverse(day);
		if (revD % possibles === 0) {
			perfDays++;
		}
	}

	return perfDays;
}

// console.log('bd: ', beautifulDays(20, 23, 6));

//////////////////////////////////////////////////////////////////////////////////////////

function countBrackets(brackets: string) {
	const open = [];
	let clear = false;
	let counter = 0;

	for (var i = 0; i < brackets.length; i++) {
		const pos = brackets[i];

		if (pos === '(' || pos === '{' || pos === '[') {
			counter += 1;
			open.push(pos);
		}

		const last = open[open.length - 1];
		switch (pos) {
			case ')':
				last === '(' ? (counter -= 1) : (counter += 1);
				open.pop();
				break;
			case '}':
				last === '{' ? (counter -= 1) : (counter += 1);
				open.pop();
				break;
			case ']':
				last === '[' ? (counter -= 1) : (counter += 1);
				open.pop();
				break;
		}
	}
	console.log('counter: ', counter);
	return counter === 0 ? 'YES' : 'NO';
}

// const Y1 = document.createTextNode(countBrackets('(())'));
// const Y2 = document.createTextNode(countBrackets('{[()]}'));
// const Y3 = document.createTextNode(countBrackets('{(([])[])[]}'));

// const N1 = document.createTextNode(countBrackets('(()))'));
// const N2 = document.createTextNode(countBrackets('{[(])}'));
// const N3 = document.createTextNode(countBrackets('{{)[](}}'));
// const N4 = document.createTextNode(countBrackets('{(([])[])[]]}'));

// document.getElementById('Y1').appendChild(Y1);
// document.getElementById('Y2').appendChild(Y2);
// document.getElementById('Y3').appendChild(Y3);

// document.getElementById('N1').appendChild(N1);
// document.getElementById('N2').appendChild(N2);
// document.getElementById('N3').appendChild(N3);
// document.getElementById('N4').appendChild(N4);

//////////////////////////////////////////////////////////////////////////////////////////

//TODO: Write a function that accepts an array of 10 integers (between 0 and 9)
// that returns a string of those numbers in the form of a phone number.
//Example:
// CreatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function linearSearch(data, query) {
	let result = -1;
	data.forEach((num, position) => {
		if (num === query) {
			result = data[position];
		}
	});
	return result;
}

// build a test array of zeros to match desired length using input
// read the 2d array
// for every child array update the test array
// return maximum value in array

/// compare the triplets

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.

// RETURN int[2]: Alice's score is in the first position, and Bob's score is in the second.

function ct(a, b) {
    const arr = [0,0];
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) arr[0]++;
      if (a[i] < b[i]) arr[1]++;
    }
  
    return arr;
}

function dayZero(input: string) {
  let numbers = input.split('\n')[0].split(' ').map(i => Number(i));
  const asc = numbers.sort((a,b) => a - b);
  const mean = asc.reduce((a,b) => a+b,0)/asc.length

  let median = 0;
  const mid = Math.floor(asc.length/2);

  let mode = null;
  let countMap = new Map();
  let maxFreq = 0;
  for(const item of asc){
      let freq = countMap.has(item) ? countMap.get(item) : 0;
      freq++;
      countMap.set(item, freq);
      if (freq > maxFreq){
          maxFreq = freq;
          mode = item;
      }
  }

  median = asc.length%2 === 0 ? (asc[mid] + asc[mid-1])/2 : asc[mid]

  const scale = (num) => Math.round(num*10) / 10
  console.log(scale(mean));
  console.log(scale(median));
  console.log(scale(mode));

  return [mean, median, mode]
}


export module Prep {
	// return the maximum number of items after manipulating an array based on 2d array
	export const arrayManip = (n: number, queries: number[][]): number => {
		//@ts-ignore
		let diffs = new Array(n + 1).fill(0);

		queries.forEach((query) => {
			const [range_start, range_end, addend] = query;

			diffs[range_start - 1] += addend;

			diffs[range_end] -= addend;
		});

		return diffs.reduce(
			(acc, cur) => {
				return {
					running_total: acc.running_total + cur,
					max: Math.max(acc.max, acc.running_total + cur),
				};
			},
			{ running_total: 0, max: 0 }
		).max;
	};

  export const compareTriplets = ct;
  
  export const statDay0 = dayZero;
}

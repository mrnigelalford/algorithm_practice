"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Prep = void 0;
// TODO: return the lowest index at which a value should be inserted into an array once it has been sorted. The returned value should be a number
// first pass
var getIndexToInsert = function (Arr, Num) {
    Arr.push(Num);
    Arr.sort(function (a, b) { return a - b; });
    return Arr.indexOf(Num);
};
var testArray = [20, 3, 5, 30, 10, 2];
/*
 * console.log('starting array: ', testArray);
 * console.log('index is: ', getIndexToInsert(testArray, 4));
 * console.log('final array: ', testArray);
 */
// second pass
var getIndex = function (Arr, Num) {
    return __spreadArrays(Arr, [Num]).sort(function (a, b) { return a - b; }).indexOf(Num);
};
//////////////////////////////////////////////////////////////////////////////////////////
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
var initalArray = [0, 10, 20, 50, 80, 6, 13, 7];
function destroyerFn(arr) {
    // @ts-ignore
    var Obj = Object.values(arguments).slice(1);
    return arr.filter(function (item) { return !Obj.find(function (x) { return x === item; }); });
}
// @ts-ignore
// console.log('destoy: ', destroyerFn(initalArray, 20));
function destroyerV2(arr) {
    return arr.filter(function (item) {
        // @ts-ignore
        return !Object.values(arguments)
            .slice(1)
            .find(function (x) { return x === item; });
    });
}
//////////////////////////////////////////////////////////////////////////////////////////
// TODO: When Olivia blows out the candles, she’ll only be able to blow out the tallest ones.
// Your task is to find out how many candles she can successfully blow out.
// Ex. Olivia is turning 4 years old, the cake will have 4 candles of height 3, 3, 1, 2, how many will she able to blow out
// 1. map the candles
// 2. check each number
// 3. look for any numbers that are greater than or equal to that candle
// 4. return new array of possibilities
function getTallest(candles, age) {
    if (candles.length !== age)
        return false;
    return candles
        .sort()
        .filter(function (candle) { return candle >= candles[candles.length - 1]; }).length;
}
var candles_olivia = [3, 3, 1, 2];
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
function beautifulDays(start, end, possibles) {
    var reverse = function (num) {
        var reversedNum = parseInt(num.toString().split('').reverse().join(''));
        return Math.abs(num - reversedNum);
    };
    var perfDays = 0;
    for (var day = start; day <= end; day++) {
        var revD = reverse(day);
        if (revD % possibles === 0) {
            perfDays++;
        }
    }
    return perfDays;
}
// console.log('bd: ', beautifulDays(20, 23, 6));
//////////////////////////////////////////////////////////////////////////////////////////
function countBrackets(brackets) {
    var open = [];
    var clear = false;
    var counter = 0;
    for (var i = 0; i < brackets.length; i++) {
        var pos = brackets[i];
        if (pos === '(' || pos === '{' || pos === '[') {
            counter += 1;
            open.push(pos);
        }
        var last = open[open.length - 1];
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
    var result = -1;
    data.forEach(function (num, position) {
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
    var arr = [0, 0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i])
            arr[0]++;
        if (a[i] < b[i])
            arr[1]++;
    }
    return arr;
}
function dayZero(input) {
    var numbers = input.split('\n')[0].split(' ').map(function (i) { return Number(i); });
    var asc = numbers.sort(function (a, b) { return a - b; });
    var mean = asc.reduce(function (a, b) { return a + b; }, 0) / asc.length;
    var median = 0;
    var mid = Math.floor(asc.length / 2);
    var mode = null;
    var countMap = new Map();
    var maxFreq = 0;
    for (var _i = 0, asc_1 = asc; _i < asc_1.length; _i++) {
        var item = asc_1[_i];
        var freq = countMap.has(item) ? countMap.get(item) : 0;
        freq++;
        countMap.set(item, freq);
        if (freq > maxFreq) {
            maxFreq = freq;
            mode = item;
        }
    }
    median = asc.length % 2 === 0 ? (asc[mid] + asc[mid - 1]) / 2 : asc[mid];
    var scale = function (num) { return Math.round(num * 10) / 10; };
    console.log(scale(mean));
    console.log(scale(median));
    console.log(scale(mode));
    return [mean, median, mode];
}
var Prep;
(function (Prep) {
    // return the maximum number of items after manipulating an array based on 2d array
    Prep.arrayManip = function (n, queries) {
        //@ts-ignore
        var diffs = new Array(n + 1).fill(0);
        queries.forEach(function (query) {
            var range_start = query[0], range_end = query[1], addend = query[2];
            diffs[range_start - 1] += addend;
            diffs[range_end] -= addend;
        });
        return diffs.reduce(function (acc, cur) {
            return {
                running_total: acc.running_total + cur,
                max: Math.max(acc.max, acc.running_total + cur)
            };
        }, { running_total: 0, max: 0 }).max;
    };
    Prep.compareTriplets = ct;
    Prep.statDay0 = dayZero;
})(Prep = exports.Prep || (exports.Prep = {}));

const moment = require('moment');
const lodash = require('lodash');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format('MMM Do YY'));
console.log(moment('2020-01-01').isValid());
console.log(moment('2020-14-01').isValid());
console.log(moment().add(7, 'days'));
console.log(moment().add(7, 'months'));
console.log(moment().add(7, 'years'));
console.log(moment().subtract(7, 'days'));  
console.log(moment().subtract(7, 'months'));
console.log(moment().subtract(7, 'years'));

//Different between following dates

const a = moment([2014,11,11]);
const b = ([2015,09,11]);
console.log(a.diff(b,'days'));

const c = moment([2014,11,27]);
const d = moment([2015,09,16]);
console.log(c.diff(d, 'days'));

console.log(moment('2020-01-01').isBefore('2018-01-01'));

console.log(moment('2010-01-01').isBefore('2018-01-01'));

console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());

//1 chunk

let arr = [1,2,3,4,5];
console.log(lodash.chunk(arr,2));

//2 concat

let arr2 = ['a','b','c'];

console.log(lodash.concat(arr,arr2));

//3 fill

console.log(lodash.fill(arr, '*', 1, 3));

//4 findIndex

let arrNum = [1,2,3,4,5,6,7,8,9,10];
console.log(lodash.findIndex(arrNum, function(elm){return elm >= 4},0));

//5 indexOf

console.log(lodash.indexOf(arrNum,5,0));

/********* COLLECTIONS **********/

//1 every

console.log(lodash.every(arrNum, function(elm){return elm > 5}));

//2 forEach

lodash.forEach([{name: 'sumit'},{lastname: 'chahar'},{age: '22'}], function(elm){console.log(elm[Object.keys(elm)])});

//3 forEachRight

lodash.forEachRight([{name: 'sumit'},{lastname: 'chahar'},{age: '22'}], function(elm){console.log(elm[Object.keys(elm)])})

//4 reduce

console.log(lodash.reduce(arrNum, function(acc,curr){return acc + curr}));

//5 reject

console.log(lodash.reject(arrNum, function(elm){return elm % 2 === 0}));
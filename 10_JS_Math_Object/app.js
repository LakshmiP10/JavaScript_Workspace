/*
Math Object given by JS
following are Math object functions:
sqrt,pow,min,max,random,round.
*/

console.log('Math Object functions');
console.log(` sqrt\n pow \n random \n round \n min \n max `);
//sqrt
let sqrt = Math.sqrt(144);
console.log(`sqrt of 144 is : ${sqrt}`)
//pow
let pow = Math.pow(2,5);
console.log(`Power of 2 ^ 5 is : ${pow}`);
//min
let min = Math.min(22,33,44,11,1,55,77,66,88,99);
console.log(`Minimumm num is : ${min}`);
//max
let max = Math.max(22,33,44,11,1,55,77,66,88,99);
console.log(`Minimumm num is : ${max}`);
//random
let random = Math.random();
console.log(`random number is : ${random}`);
let random4DigitSeq = Math.round(Math.random()*10000) ;
console.log(`random 4 digit number : ${random4DigitSeq}`);
//floor
let floor = Math.floor(Math.random());
console.log(`floor number is : ${floor}`);
let ceil = Math.ceil(Math.random());
console.log(`ceil number is: ${ceil}`)



//for more math functions refer javascript math in mdn

//variable declarations
/*
let ->  keyword introduced in ES6
a -> variable name / reference variable
=  -> is assign operator
10  -> data /value
; -> end of the statement
*/

let a = 10;
let b = 20;
let sum = a + b;

console.log('sum of a and b is '+ sum);
// ES5 feature '' + for append string and variable value
console.log('sum of '+a+' and '+b+' is '+sum);

//ES6 template Literal/ TemplateString `` back tic symbol
console.log(`sum of ${a} and ${b} is ${sum}`);
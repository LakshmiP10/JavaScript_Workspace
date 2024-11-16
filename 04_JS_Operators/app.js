/*
JS Operators:
---------------
assignment operator:  =
arithmetical operator:  + - / * %
shorthand operators:  += -+ *= /=
unary operator:  ++  --
conditionl operator:  < , > <= >= ==
Ternary operator:  ? :
Logical operator:   && || ^
Equality operator:  == ===
*/

//assignment operator:  =
let test = 10 ;
console.log(test);
// arithmetical operator:  + - / * %
let num1 = 10;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mult : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

//find the number is even or odd
let number = 11;
if(number % 2 === 0){
    console.log(`${number} is an even number`);
} else{
    console.log(`${number} is an odd number`);
}

// shorthand operators:  += -+ *= /=
let a= 30; 
let b= 20;
let add = 10;
// add = add + (a + b);
add += (a + b);
console.log(add);
/*
sub -= (a + b); => sub = sub- (a + b)
mul *= (a * b)  => mul = mul * (a * b)
div /= (a + b) => div = div / (a +b )
*/

//conditionl operator:  < , > <= >= ==
let marks = 68;
if(marks <=35){
    console.log(`you failed the Test`);
}
else{
    console.log(`You cleared the Test`);
}
//unary operator:  ++  --
let count = 10;
count = count + 1;  //10+1
count += 1;     //11+1
count ++;       //12+1
console.log(count);

//Logical operator:   && || ^
let x = 24;
let y = 25;
let z = 26;
if( (x>y) && (x>z)){
    console.log(`${x} x is big number`);
}
else if ((y>z) && (y>z)){
    console.log(`${y} y is big`);
}
else{
    console.log(`${z} z is big`)
}
//Logical operator:   && || ^
let inRelation = true;
let parentAgreed = false;
if(inRelation && parentAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until the parent Agreed')
}
//Ternary operator:  ? :
marks =76;
let message = '';
(marks<=35)? message = `you failed the Test`: message = `you cleared the Test`;
console.log(message);

//Equality operator:  == ===
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are not Equal');

}




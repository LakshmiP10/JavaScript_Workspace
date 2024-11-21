/* Funtion is a block of statemens. which takes set of parameters.
 it does some process and returns some Result.
 function funName(param1,param2){
    satement1 ;stmt2;
    return result;
 }
 */
//Printing numbers 0-10
function printNumbers(){
    let result = '';
    for(let i=0;i<=10;i++){
        result += `${i} `
    }
    console.log(result)
}
printNumbers();

//PrintingNumber stratIndex endIndex and Incr
function printingNumbersCustom(stratIndex,endIndex,Increment){
    let result = '';
    for(i=stratIndex;i<=endIndex;i += Increment){
        result += `${i} `
    }
    console.log(result)
}
printingNumbersCustom(10,50,5);
printingNumbersCustom(2,20,2);
/*
functions can define in 3 ways
 1.isolated functions no params and no return value
 2.function with parameters and without reurn value
 3.functioon with parameters and with return value
*/
//Isolated functions
//function without parameters without return values
function greet(){
    console.log("Good Morning");
}
greet();

//Function expression
let greetMe = function(){
    console.log("Good Eveninng");
};
console.log(greetMe);
greetMe();
//function with parameters
let wishMe = function (name,age){
    let message = `Hello ${name} You are ${age} yrs old`;
    console.log(message);
}
wishMe('Sharavan',20);

//Note: if  you are not passing any value for parameters it takes undefined as defaul value.
wishMe();   //undefined undefined

//function with parameters and with return type
let sum = function(a,b){
    let result = 2* (a + b);
    return result;
};
let output = sum(10,20);
console.log(output)
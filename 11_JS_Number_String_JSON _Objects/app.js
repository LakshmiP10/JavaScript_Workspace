console.log("JS Obejcts Number String JSON :")
//Number 
console.log(`Number Object functions:`);
//MIN_SAFE_INTEGER()
console.log(`Number.MIN_SAFE_INTEGER is : ${Number.MIN_SAFE_INTEGER}`);
//max
console.log(`Number.MAX_SAFE_INTEGER is : ${Number.MAX_SAFE_INTEGER}`);
//pos infinity
console.log(`Number.POSITIVE_INFINITY is : ${Number.POSITIVE_INFINITY}`);
//negetive infinity
console.log(`Number.NEGATIVE_INFINITY is : ${Number.NEGATIVE_INFINITY}`);
//convert string to number type
let str1 = '100.145';
//parseInt
let num1 = Number.parseInt(str1)
console.log(`${typeof str1} => ${typeof num1}`);
//parseFloat
let str2 = '100.145';
let num2 = Number.parseFloat(str2);
console.log(`${typeof str2}=> ${typeof num2}`);
console.log(`parseFloat of str2 : ${num2}`);
//tostring
let num3 = 100;
let numString = num3.toString();
console.log(`${typeof num3} => ${typeof numString}`);
//toFixed
let amount = 524;
console.log(amount.toFixed(2));

/* String functions:
length is property of string
toLowerCase()
toUpperCase()
substr(startIndex,no.of chars)
substring(startIndex,endIndex) returns new string including startIndex and excluding endIndex
charAt(indexNo); => returns character for the given indexNo
charCodeAt(indexNo) => returns Ascii code for for the given indexNumber
*/
//let msg = String('Good Morning');
let msg = 'Good Morning';
//lenght
console.log(msg.length);    //12
//toLowerString
console.log(msg.toLowerCase()); //good morning
// toUpperCase
console.log(msg.toUpperCase()); //GOOD MORNING
// substring
console.log(msg.substring(0,4));    //Good
//substr
console.log(msg.substr(0,4));   //Good
//substr
console.log(msg.substr(5,7));   //Morning
//substr
console.log(msg.substr(5)); //Morning
//charAt(indexNo)
console.log(msg.charAt(5)); //M
//charCodeAt(indexNo) => returns Ascii code for the given indexed character
console.log(msg.charCodeAt(5)); //77

/* JSON Object : used to convert string to an object and vice versa An object to string format
  String => Object parse()
  object => String : stringify()
 */
let student = {
    name:'Lakshmi',
    age: 20,
    course: 'MCA'
}
console.log(student);   //{name: 'Lakshmi', age: 20, course: 'MCA'}
//object to String
let studentStr = JSON.stringify(student);   
console.log(studentStr);    //{"name":"Lakshmi","age":20,"course":"MCA"}
//string to Object
let newStudent = JSON.parse(studentStr);
console.log(newStudent);    //{name: 'Lakshmi', age: 20, course: 'MCA'}










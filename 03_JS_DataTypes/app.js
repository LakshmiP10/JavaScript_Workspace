/*
Data Types: we can assign a type of data to a variable
 string
 number
 boolean
 undefined
 null object type
*/
//string
let employeeName ='Lakshmi';
console.log(`value : ${employeeName} Type : ${typeof employeeName}`);
//number
let employeeAge = 35;
console.log(`value : ${employeeAge} Type : ${typeof employeeAge}`);
//boolean
let isManager = true;
console.log(`value : ${isManager} Type : ${typeof isManager}`);
//undefined
let eName;
console.log(`value : ${eName} Type : ${typeof eName}`);
//null
let middleName = null;
console.log(`value : ${middleName} Type : ${typeof middleName}`);

//re-assignment can be possible
let studentName = 'Sharavan';
console.log(`value : ${studentName} Type : ${typeof studentName}`);
//
studentName =40;    
console.log(`value : ${studentName} Type : ${typeof studentName}`);
studentName = false;
console.log(`value : ${studentName} Type : ${typeof studentName}`);
studentName = null;
console.log(`value : ${studentName} Type : ${typeof studentName}`);
studentName = undefined;
console.log(`value : ${studentName} Type : ${typeof studentName}`);
/*for one variable re-assignment can be possible. allowed all datatypes for one variable.
this is drawback of JS. that's why to avoid thid problem TypeScript is introduced.
*/




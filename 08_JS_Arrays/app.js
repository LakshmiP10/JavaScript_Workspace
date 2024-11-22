/*
Array: An array is a collection o elements/values.
elements can be objects/numbes/string/boolean/arrays.
Array is an indexed (based) collection of elements.
arrya type is object. javascript internally 
stored array elements in object format index starting from 0.
array represents with square brackets []
ex: var numbers = [10,20,30];
basic for loop throug the elements of an array
for -in loop through the index of an array elemnts
for-of loop through elements of an array
forEach() loop through array elements
map loop through array elemetns and return array
filter return results based on condition
*/
//creation of an array
let numbers = [10,20,30,40,50];
console.log(numbers);   //[10, 20, 30, 40, 50]
// access the Elements of an array
console.log(numbers[2]);    //30
//accessing non-existing (indexed) elements.now you got undefined
console.log(numbers[5]);    //undefined

//Iteration of array elements
//for loop
let result = '';
for(let i=0;i<numbers.length;i++){
    console.log();
    result += `${numbers[i]} `;
}
console.log(result);    //10 20 30 40 50

//for-in
result ='';
for(let number in numbers){
    result += `${[number]} `
}
console.log(result);    //0 1 2 3 4 
//for-in to print array values
result = '';
for(let number in numbers){
    result += `${numbers[number]} `
}
console.log(result);    //10 20 30 40 50

//for-of to print array elements
result = '';
for(let number of numbers){
    result += `${number} `
}
console.log(result);    //10 20 30 40 50

//forEach()
 result = '';
 numbers.forEach(function(number){
    result += `${number} `;
 });
 console.log(result);   //10 20 30 40 50
 //forEach(arrowFunction)
 result = '';
 numbers.forEach((number)=>{
    result += `${number} `
 })
 console.log(result);   //10 20 30 40 50

 //filter
 result ='';
 numbers.filter((number)=>{
    if(number>20)
    result+= `${number} `;
 });
 console.log(result);   //30 40 50

 //map()
 let newArray = [];
 newArray=numbers.map((number)=>{
    return number
 });
 console.log(newArray);

 let colors = ['White','black','yellow','Red','blue','green'];
 result = '';
for(let i = 0; i<=colors.length-1;i++){
 result += `${colors[i]} `
}
console.log(result);

//for-of from ES6
result = '';
for(let color of colors ){
    result += `${color} `
}
console.log(result);

//for-in loop upto ES5
result = '';
for(let index in colors){
    result += `${colors[index]} `;
}
console.log(result);

//forEach() function upto ES5
result = '';
colors.forEach((color)=>{
    result += `${color} `
});
console.log(result);
//forEach() with arrow function from ES6
result ='';
colors.forEach((color)=>{
    result += `${color} `
});
console.log(result);

//Array of objects
let employees = [
    {
        id:1,
        name:'Pavan',
        age:23,
        designation:'Junior Engineer',
        isActive:false
    },
 
    {
        id:2,
        name:'Srikanth',
        age:24,
        designation:'Software Engineer',
        isActive:true
    },
    {
        id:3,
        name:'Satya',
        age:23,
        designation:'Software Engineer',
        isActive:true
    },
    {
        id:4,
        name:'Lakshmi',
        age:33,
        designation:'Java Consultant',
        isActive:true
    },
    {
        id:5,
        name:'Brahma',
        age:35,
        designation:'Team Lead',
        isActive:false
    },
    {
        id:6,
        name:'Suneetha',
        age:22,
        designation:'Web Designer',
        isActive:true
    },
    
];

//access all the employees
console.log(employees);
result = '';
employees.forEach((employee)=>{
    result += `${employee.name} `
})
console.log(result)

//filter the eployess based on condition: age<=30
// I am not using filter funtion here.using just condition to filter array elements
let juniorEmployees = [];
for(let employee of employees){
    if(employee.age<=30)
    juniorEmployees.push(employee)
}
console.log(juniorEmployees)

//filter active employees
result = '';
let activeEmployees = [];
for(let employee of employees){
    if(employee.isActive === true){
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);





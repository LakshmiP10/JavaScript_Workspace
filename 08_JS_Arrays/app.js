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

//filter the employess based on condition: age<=30
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

//Array Built-in functions
    /*
    shift() : To remove the first elements from an array 
    unshift(): To add the first element to an array
    push() : add the last last element to an array
    pop() : To remove the last element from an array
    sort() : To sort the array elements in ascending order
    reverse() : To reverse an array elements
    splice() : To remove/replace (/add) elements from an array
    join() : To join an array elements to string
    split(): To split string to an array elements
    slice() : To create a new copy of an array
    forEach(): to run loop through the elements
    find() : find an exact element based on condition from an array
    filter() : to filter the array elements based on condition
    */
   // shift() : To remove the first elements from an array 
   console.log('-----------------------shift()-----------------------');
   let technologies = ['html','css','javascript','jquery','bootstrap'];
   console.log(technologies);
   technologies.shift();
   console.log(technologies);

   //   unshift(): To add the first element to an array
   console.log('-----------------------unshift()-----------------------');
    technologies = ['html','css','javascript','jquery','bootstrap'];
   console.log(technologies);
   technologies.unshift('node js');
   console.log(technologies);
   //    push() : add the last last element to an array

console.log('-----------------------push()-----------------------');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.push('node js');
console.log(technologies);

//    pop() : To remove the last element from an array
console.log('-----------------------pop()-----------------------');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);
//    sort() : To sort the array elements in ascending order based on character
console.log('-----------------------sort()-----------------------');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);
// reverse() : To reverse an array elements
console.log('-----------------------reverse()-----------------------');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);
//  reverse order(/descending order) use sort() and reverse() functions combination to get descending order array
console.log('-----------------------reverse order-----------------------');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);
// splice() : To remove/replace (/add) elements from an array
//case1 :  splice(index) - to removes all the elements from the given index
console.log('-----------------------splice(index)-----------------------');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

//case2 :  splice(startIndex,deleteCount) - It removes the given no of elements from the given index
console.log('-----------------------splice()-----------------------');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,2);   //from the index no two, deleteCount 2 elements removed
console.log(technologies);
//case3 :  splice(startIndex,(deleteCount)1,replaceElement) - It replaces the given element at the given index
console.log('-------splice(startIndex,1,replaceElement)------');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(3,0,'reactJs','typescript');   //from the index no 3, deleteCount 1 element removed and replaced with reactJS in the given index
console.log(technologies);
//case4 : splice(startIndex,deleteCount 0,addElements) from the given index to remove 0 elements and add total no of elements in the given index
console.log('-------splice(startIndex,0,addElement(s))------');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(3,0,'reactJs','typescript');   //from the index no 3, deleteCount 0 element removed and add elements from the given index
console.log(technologies);
//    join() : To join an array elements to string
console.log('---------------join()------------');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
let newAtString = technologies.join('@')   
console.log(newAtString);

let newSlashJoinStr = technologies.join('/');
console.log(newSlashJoinStr);

let techString = technologies.join(' - ');
console.log(techString);


//    split(): To split string to an array elements
console.log('-------------split()-------------');
console.log(techString);
let newTechs = techString.split(' - ');
console.log(newTechs);

//    forEach(): to run loop through the elements
console.log('-----------------forEach(fun)--------------------')
let weekDays = ['sunDay','monDay','tuesDay','wednesDay','thursDay','friDay','saturDay'];
console.log(weekDays);
let resultDays = '';
weekDays.forEach(day => {
resultDays += `${day} `;
});
console.log(resultDays);

//    filter() : to filter the array elements based on condition
console.log('------junior employees age<=30------')
juniorEmployees = [];
for(let employee of employees){
    if(employee.age<=30)
    juniorEmployees.push(employee)
}
console.log(juniorEmployees);
//junior employees using filter() method
console.log("------Junior employees using filter()------")
let jrEmployees = employees.filter(function(employee){
return employee.age <= 30;
});
console.log(jrEmployees);


//filter() active employees using if condition
console.log('-----------active employees using if condition---------')
result = '';
 activeEmployees = [];
for(let employee of employees){
    if(employee.isActive === true){
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);
//filter activeEmployees using filter() method
console.log('---------active employees filter()----------')
let actEmployees = employees.filter((employee)=>{
    return employee.isActive;
});
console.log(actEmployees);



















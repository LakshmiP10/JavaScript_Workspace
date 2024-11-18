/*
Object: any real world entity/thing is an object
syntax:
let objName = {};
example given below
let cameraBrand='Canon';
let cameraColor='Black';
let cameraPrice= 30000;
instead of writing these many variables belongs to only one thing we acan rewrite as
 one object camera and given properties for that object
    let camera = {
    brand:'Canon',
    price: 30000,
    mfg:2019
    };
    Note: we can access static properties with dot notation 
    and access dynamic properties with [] notation.
*/
let camera = {
    brand: 'Canon',
    price: 30000,
    color: 'Black',
    mfg: 2021
};
//printing object
console.log(camera);
//access an existing properties of an object
console.log(camera.color);  //Black
console.log(camera.brand);  //Canon
//accessing a non-existing properties
console.log(camera.megaPixels);     //undefined
//for dynamic properties . and [] notations why not using . for dynamic prop
let prop = 'color';
console.log(camera[prop]);  //Black
console.log(camera.prop);   //undefined
//because you are accessing non existing property in camera so got undefined as result

//nested objects
let student = {
    name: 'Sharavan Sai',
    age:30,
    address:{
        street:'Ameerpet',
        city:'Hyderabad',
        state:'TS'
    }
};
//accessing direct object
console.log(student);   //name: 'Sharavan Sai', age: 30, address: {…}}

//accessing nested object
console.log(student.address);   //{street: 'Ameerpet', city: 'Hyderabad', state: 'TS'}
//accessing nested object property
console.log(student.address.city);  //Hyderabad

//CRUD operatios with object
//create object
let mobile= {};
console.log(mobile);
//add properties to object
mobile.brand = 'Apple';
mobile.price= 40000;
mobile.color = 'Silver';
mobile.isInsured = false;

//read operation 
console.log(mobile);
console.log(mobile.brand);  //Apple
console.log(mobile);
//update operation
console.log(mobile.price);  //40000
mobile.price = 60000;
console.log(mobile);    

//delete property from an object
delete mobile.isInsured;
console.log(mobile);



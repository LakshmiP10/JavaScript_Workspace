/*
For Loop
    for(initialization;condition check; Incr/Decr){
        set of statements to execute
    }
*/
/*  Printing values from 0-10 using for loop
    0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10
*/
let result = " ";
for (let i = 0; i <= 10; i++) {
  if (i <= 9) {
    result += `${i} , `;
  } else {
    result += `${i}`;
  }
}
console.log(result);
/*Printing numbers from 20 to 0 Decr by 2
20  18  16  14  12  10  8   6   4   2   0
*/
result = '';
for ( let i = 20; i>= 0 ; i-= 2){
    if(i>0){
        result += `${i} , ` ;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);
/*  Printing 5 stars like below using for loop
    *
    *   *
    *   *   *
    *   *   *   *
    *   *   *   *   *
*/
console.log(`Printing stars 1 to 5`);
result = '';
for(let i = 1; i<=5; i++){
    for(let j =1; j<=i; j++){
        result += `* `;
    }
    result += `\n`;
}
console.log(result);
/* Printing stars like below 5 to 1 star using for loop
    *   *   *   *   *
    *   *   *   *   
    *   *   *   
    *   *   
    *   
*/
result = '';
console.log(`printing stars reverse 5 to 1`)
for(let i = 5; i>=1; i--){
    for(let j =i; j>=1; j--){
        result += `* `;
    }
    result += `\n`;
}
console.log(result);



/*  Printing numbers using for loop
    1
    1   2
    1   2   3
    1   2   3   4
    1   2   3   4   5
*/
result = '';
let number = 5;
for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= i; j++) {
    result += `${j} `;
  }
  result += `\n`;
}
console.log(result);

/*  Printing numbers using for loop
    1
    2   2
    3   3   3
    4   4   4   4
    5   5   5   5   5
*/
result = "";
number = 5;
for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= i; j++) {
    result += `${i} `;
  }
  result += `\n`;
}
console.log(result);
/*  Printing numbers using for loop
    5   5   5   5   5
    4   4   4   4
    3   3   3
    2   2
    1
*/
result = "";
number = 5;
for (let i = number; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    result += `${i} `;
  }
  result += `\n`;
}
console.log(result);




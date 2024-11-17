/* syntax:
Initialization;
while(condition){
    Statments;
    Incr/Decr  (always ata lst line )
}
*/
//Printing values from 0 to 10 incr by 1
let i = 0;
let result = '';
while(i<=10){
    if(i<=9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
console.log(result);
/*Printing numbers from 20 to 0 Decr by 2 using while loop
20  18  16  14  12  10  8   6   4   2   0
*/
result = '';
i = 20;
while(i>= 0){
    if(i>0){
        result += `${i} , ` ;
    }
    else{
        result += `${i}`;
    }
i-= 2 ;
}
console.log(result);
/*  Printing numbers using while loop
    1
    1   2
    1   2   3
    1   2   3   4
    1   2   3   4   5
*/
result = '';
let number = 5;
i = 1
while(i <= number){
    let j = 1;
    while(j <= i){
        result += `${j} `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);

/*  Printing numbers using while loop
    1
    2   2
    3   3   3
    4   4   4   4
    5   5   5   5   5
*/
result = '';
i=1;
while(i<=5){
 let j =1;
 while(j<=i){
    result +=`${i} `;
    j++;
 }
 result += `\n`;
    i++;
}
console.log(result);
/*  Printing numbers using for loop
    5   5   5   5   5
    4   4   4   4
    3   3   3
    2   2
    1
*/
result = '';
i = 5;
while(i>=1){
    let j=1;
    while(j<=i){
        result += `${i} `
        j++;
    }
    result += `\n`;
    i--;
}
console.log(result)
/* Printing 5 stars like below
    *
    *   *
    *   *   *
    *   *   *   *
    *   *   *   *   *
*/
i=1;
result = '';
while(i<=5){
    let j =1;
    while(j<=i){
        result += `* `;
        j++;
    }
    result += `\n`;
    i++;
}
console.log(result);




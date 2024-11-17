/*  syntax for do-while
initialization;
do{
statments;
Ince/Decr;
}while(condition);

console.log(result);
*/
/* Printing numbers from 0 to 10 using do-while loop
0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10
*/
let result = '';
let i =0;
do{
    if(i<=9){
        result += `${i} , `;
    }else{
        result += `${i}`;
    }
    i++;
}while(i<=10);
console.log(result);
/* Printing values from 20 to 0 decr by 2 
20 18   16  14  12  10  8   6   4   2   0
*/
result = '';
i = 20;
do{
    if(i>0){
        result += `${i} , `;
    }else{
        result += `${i}`;
    }
    i -= 2;
}while(i>=0);
console.log(result);

/* Printing 1 to 5  stars
    *
    *   *
    *   *   *
    *   *   *   *
    *   *   *   *   *
*/
result = '';
i = 1;
do{
let j = 1;
do{
result += `* `;
j++;
}while(j<=i);
result += `\n`;
i++;
}while(i<=5);
console.log(result);
/* Print values from 1 to 5 using do-while loop
1
1   2
1   2   3
1   2   3   4
1   2   3   4   5
*/
result = "";
i = 1;
do {
  let j = 1;
  do {
    result += `${j} `;
    j++;
  } while (j <= i);
  result += `\n`;
  i++;
} while (i <= 5);
console.log(result);
/* Print values from 1 to 5 using do-while loop
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 
*/
result = "";
i = 1;
do {
  let j = 1;
  do {
    result += `${i} `;
    j++;
  } while (j <= i);
  result += `\n`;
  i++;
} while (i <= 5);
console.log(result);
/* Print values from 5 to 1 reverse using do-while loop
5 5 5 5 5 
4 4 4 4
3 3 3 
2 2 
1 
*/
console.log(`Printing values 5 to 1 reverse order`)
result = '';
i = 5;
do{
    let j =1;
    do{
        result += `${i} `;
        j++;
    }while(j<=i);
    result += `\n`;
    i--;
}while(i>=1);
console.log(result)

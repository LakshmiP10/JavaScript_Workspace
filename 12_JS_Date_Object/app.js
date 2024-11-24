console.log('Javascript Date Object functions ');
//date
let date = new Date();
console.log(`IST Time : ${date}`);

//date
let currDate = new Date().getDate();
console.log(`currDate : ${currDate}`);
//proper Date India
console.log(`---------India Date & Time-----`);
let currentDate = new Date().toLocaleDateString();
console.log(`currenDate : ${currentDate}`);
//proper Time India
let currentTime = new Date().toLocaleTimeString();
console.log(`currentTime : ${currentTime}`);

//USA  Date & time 
console.log(`------USA Date  & Time--------`)
let options = { timeZone : 'America/New_york'}
//USA Date
let usaDate = new Date().toLocaleDateString('en-US',options);
console.log(`USA Date: ${usaDate}`) ;
//USA Time
let usaTime = new Date().toLocaleTimeString('en-US',options);
console.log(`usa Time : ${usaTime}`);

//getDay() day starts from 0 -6
let day = new Date().getDay();
let toDay = '';
switch(day){
    case 0 : toDay = "SunDay";
        break;
    case 1 : toDay = "MonDay";
        break;    
    case 2 : toDay = "TuesDay";
        break;   
    case 3 : toDay = "WednesDay";
        break;    
    case 4 : toDay = "ThursDay";
        break;  
    case 5 : toDay = "FriDay";
        break;    
    case 6 : toDay = "SaturDay";
        break;
    default : toDay = 'Please enter proper Day';
        break;
}
console.log(toDay);

//getMonth() month strat from 0 to 11
let currentMonth = new Date().getMonth();
console.log(currentMonth);
//getFullYear()
let currentYear = new Date().getFullYear();
console.log(currentYear);

//custom date
let c_date = new Date().getDate();
let c_month = new Date().getMonth() +1;
let c_year = new Date().getFullYear();
console.log('custom Dates formats :');
console.log(`${c_date}-${c_month}-${c_year}`);
console.log(`${c_date}.${c_month}.${c_year}`);
console.log(`${c_date}/${c_month}/${c_year}`);
console.log(`${c_month}${toDay}${c_year}`);
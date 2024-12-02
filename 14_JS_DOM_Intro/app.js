/*
<nav></nav>

css => nav{ };
JS  => document.querySelector('nav');
JQuery =>$('nav');

<nav id='test'></nav>

css -> #test{ };
JS -> document.querySelector('#test');
JQuery - > $('#test');

<nav class='container'></nav>
css -> .container{ };
JS -> document.querySelector('.container');
JQuery -> $('.container');
 
*/
//document
console.log(document);

//head
console.log(document.head);

//title
console.log(document.title);
document.title = 'DS technologies'

//body
console.log(document.body);

//nav
 let navTag = document.querySelector('nav');
 console.log(navTag);

 //anchor tag
let anchorTag = document.querySelector('nav a');
console.log(anchorTag);
 
//innerText
let theText = anchorTag.innerText;
console.log(theText);

//change the innerText
anchorTag.innerText = 'Lakshmi Peddinti';

// h1 Tag
let h1Tag = document.querySelector('#msg');
 h1Tag.innerText = 'Good Evening';

 //styles
 h1Tag.style.backgroundColor = 'limegreen';
 h1Tag.style.color = 'white';
 h1Tag.style.textAlign = 'center';
 h1Tag.style.padding='10px';
 h1Tag.style.fontSize = '40px';
 h1Tag.style.boxShadow = '0 0 10px black';


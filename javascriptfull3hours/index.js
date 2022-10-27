console.log('hello from javascript!!!');

var number = 6; // in-line comment
console.log(number);
/* 
this is a multi-line comment
*/

var myName = "Moo";
myName  = 4;
console.log(myName);

let ourName = "weee";
ourName = 7;
console.log(ourName);

const pi = 3.14 ; // const variable  cannot be changed 

var a;
var b = 5;
console.log(a);  // null? undefined
a = 1;
b = a++;
c = "I am a ";
console.log(a);

console.log(a+1);
console.log(b*8);
console.log(c+"string");

var studyCapVar;
var properCamelCase;
var titleCaseOver;

var sum = 10 + 0; //adding numbers
console.log("sum = " + sum);

var difference = 4 - 1; //sustracting numbers
console.log("difference = " + difference);

var product = 6 * 3//multiplying numbers
console.log("product = " + product);

var quotient = 66 / 33; //dividing numbers
console.log("quotient = " + quotient);  

var myVar = 8; //incrementing numbers
myVar++;
console.log(myVar);

var myVar = 11;//decrementing numbers
myVar-- ;
console.log(myVar);

var ourDecimal = 5.8;//decimal numbers
var myDecimal = 0.009;
console.log(ourDecimal,myDecimal);

var product = 2.5 * 2.0;//multiply decimals
console.log(product);

var quotient = 8.8 / 2.2;//divide decimals
console.log(quotient);

var remainder = 11;//finding a remainder
remainder = 50 % 3;
console.log(remainder); // when remainder =0 means its even -- or odd

var f = 7; // += or -= or *= or /=
f+=3;
console.log(f);

var firstName = "Omar";// declare strings
var myLastName = 'WOKO'; // single or double quotation marks or   backticks

var myStr = "I am a \"double quoted\" string inside \"double quotes\""; // Escaping literal quotes in strings
console.log(myStr);  //    \" means " in js

var myStr = `'<a href="http://www.youtube.com" target="_blank">Link</a>'`; // use single quote'' or backtick ``
console.log(myStr);

/****
Escape Sequences in strings

\'  single quote
\"  double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
  
 ******/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine\n\tFourthLine";
console.log(myStr);

var myStr = "This is the first. " + "This is the second.";// Concatenating strings with plus operator
console.log(myStr);

var ourStr = "This is start. "
ourStr += "This is end"
console.log(ourStr);

var myName = "Mickey mouse";
var myStr = "My name is " + myName + ", and i am well.";
console.log(myStr);

var someAdjective = "Excellent!";  // find length of strings
var myStr = "You are "
myStr += someAdjective;
console.log(myStr);
console.log(myStr.length);
console.log(myStr[0]);

var firstLetterOfName = ""; // Bracket notation to find first character in string
var name = "Swaroski";
var firstLetterOfName = name[0];
var lastLetterOfNmae = name[name.length - 1];
var thirdToLastLetterOfName = name[name.length - 3];

console.log(firstLetterOfName);
console.log(lastLetterOfNmae);  
console.log(thirdToLastLetterOfName);// Nth to last character

var str = "Jello world"; // string are immutable !!!!! cannot be altered once created !!!!
console.log(str);//str[0] = "H"; error  CANNOT CHANGE a letter in a string ???  becuz immutability of strings
str = "Hello world";
console.log(str);

// word blank
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " there " + myAdverb +"!";
    return result;
}

console.log(wordBlanks("girl","white","jump","suddenly"));

var myArray =[[1,2,3],[4,5,6],[7,8,9]]
myArray[0] =[0,1,2,3]// modify array data with index  but ! no modify for string!
var myData = myArray[0][0];// access multi- dimensionnal or array of array with bracket
console.log(myData);

// nested Arrays   myArray[0][2]

/* 
array.push  --- add at the end
array.pop   --- remove the last element   myArray = ourArray.pop()
array.shift --- remove the first element 
array.unshift -- add a new first element at the beginning

*/

var myList = [["cereal", 1],["apple",5],["eggs",12],["banana",6]];//shopping list

function ourFunction(){
    console.log("Heyyya, world");
}

ourFunction();
ourFunction(); // call the function 2 times

/* passing values to functions with arguments */
function myFunctionWithArgs(a,b){
    console.log(a*b);
}

myFunctionWithArgs(6,5);

/* Global Scopes and functions  */
var myGlobal = 70;
// console.log(myGlobal);
function fun1(){
   oopsGlobal = 8;    // no var make it global   with var gonna scope to this function
}

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);

}

fun1();
fun2();



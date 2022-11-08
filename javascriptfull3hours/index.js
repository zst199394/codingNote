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
    console.log(a*b); // 
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
        output += " oopsGlobal: " + oopsGlobal;// if put var line176 in fun1 then here oppsGlobal is undefined
    }
    console.log(output);

}

fun1();
fun2();

/* local scope and functions*/
function myLocalScope(){
    var myVarHere = 2; // myVarHereis  ONLY visiable in localscope 
    console.log(myVarHere);
}

myLocalScope();

// console.log(myVarHere);   this will error---- not defined ! cannot access outside of the function

/* local and global scope in functions
local and global variables can be same name 
When u do this, the local variable takes precedent over the global variables */

var outerWear = "T-Shirt"; // global var

function myOutfit(){
    var outerWear = "sweater"; // local var took over global var
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

/* Return a value from a function */

function minusSeven(num){
    return num - 7;
}

console.log(minusSeven(10));

function timesSix(num){
    return num * 6;
}
console.log(timesSix(2));

/* Understanding undefined value returned from a function */
var sum = 0 ;
function addFour(){
    sum = sum + 4 ;
    //return sum;   /* without this return console log:undefined ;9 with this 4; 9 */
}

console.log(addFour()); // undefined cuz didn't return a value

function addFive(){
    sum += 5;
    return sum;
}

console.log(addFive());

/* Assignment with a returned value */

var changed = 0;

function change(num){
    return (num + 5) / 2;
}

changed = change(15);
console.log(changed);

var processed = 0;

function processArg(num){
    return (num * 2)/ 4;
}

processed = processArg(8);
console.log(processed);

/* Stand in line 
Cue is an abstract data structure wherer items are kept in order
wR ARE here Simulate some of the functionality of a cue using nextInLine function*/
function nextInLine(arr, item){
    arr.push(item); //new items can be added to the back of the cue
    return arr.shift();  // old items can be removed from the front of the cue
}

/* this function gonna add an item to the array and return the fist item on the list
shift()remove the first item and return the first item */

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); //change array into a string
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));

/* Boolean Values */
function welcomeToBooleans(){
     return true;
}

console.log("WelcomeToBoolean : " + welcomeToBooleans());

/* Use Conditional Logic with If Statements */
function ourTrueOrFalse(isItTrue){
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No, its's false";
}
console.log(ourTrueOrFalse(false));

function trueOrFalse(wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(trueOrFalse(true));

/* Comparison with the equality == operator
Double== means checking if the value of this val equals 12;    single = is a assignment operator that is setting  this val to equal 12*/

function testEqual(val){
    if (val == 12){
        return "Equal 12";
    }
    return "Not equal 12";
}

console.log("testEqual12 : " + testEqual(10)); // both will be true 12 or '12'


/* Comparison with the strict Equality === Operator 

 == attempts to convert both values being compared to a common type
 === does not do the type conversion */

function testStrict(val){
    if (val === 3){
        return "Equal 3";
    }
    return "Not equal 3";
}
console.log("testEqual12 : " + testStrict(3)); // true
console.log("testEqual12 : " + testStrict('3'));//false

/* Comparing different values 
*/
function compareEqual(a,b){
    if (a == b){
        return "Equal";
    }
    return "Not Equal";
}
console.log("compareEqual :" + compareEqual(10, "10"));// checking number10 and string 10 are equal

function compareStrict(a,b){
    if (a === b){
        return "Equal";
    }
    return "Not Equal";
}
console.log("compareStrict :" + compareStrict(10, "10")); 
/* number is not equal to  a string cuz it's not converting the types */


/* Comparison with the inequality Operator */
function testNotEqual(val){
    if(val != 99){
        return "Not Equal";
    }
    return "Equal";
}
console.log("TESTnoteqaul: " + testNotEqual(96));

/* Comparison with the Strict Inequality Operator */
function testStrictNotEqual(val){
    if(val !== 3){
        return "Not Equal";
    }
    return "Equal";
}
console.log("testStrictNotEqual: " + testStrictNotEqual('3'));

/* Comparison with the Greater Thasn > Operator */
function testGreaterThan(val){
    if (val > 100){
        return "Over 100";
    }

    if (val > 50){
        return "Over 50";
    }
    return "50 or under! ";
}
 console.log("testGreaterThan: " + testGreaterThan(66));

 /* Comparison with the Greater Than or Equal >= To Operator */
 function testGreaterThanOrEqual(val){
    if (val >= 20){
        return "20 or Over";
    }

    if (val >= 10){
        return "10 or Over";
    }
    return "Less than 10! ";
}
 console.log("testGreaterThanOrEqual: " + testGreaterThanOrEqual(10));

 /* Comparison with the Less Than < Operator */
function testLessThan(val){
    if (val < 25){
        return "Under 25";
    }

    if (val < 55){
        return "Under 55";
    }
    return "55 or over! ";
}
 console.log("testLessThan: " + testLessThan(66));

 /* Comparison with the Lerss Than or Equal <= To Operator */
 function testLessThanOrEqual(val){
    if (val <= 12){
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24){
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24 ";
}
 console.log("testLessThanOrEqual: " + testLessThanOrEqual(10));

 /* Comparisons with the Logical And && Operator */
function testLogicalAnd(val){ //use and&& instead using nested if statementto check 2 
    if (val <= 50 && val >=25){ //put 2 ampersands&& means and 
        return "Yes !"
    }

    return "No!"
}
console.log("testLogicalAnd: " + testLogicalAnd(40));


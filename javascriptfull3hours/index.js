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

/* Comparison with the Greater Than > Operator */
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

 /* Comparisons with the Logical Or || Operator */
 function testLogicalOr(val){ //use and&& instead using nested if statementto check 2 
    if (val < 10 || val > 20){ //put 2 ampersands&& means and 
        return "Outside!"
    }

    return "inside!"
}
console.log("testLogicalOr: " + testLogicalOr(40));

/* Else Statements  */
function testElse(val){
    var result = ""
    if (val > 5) { //WITHOUT Else nothing will happen if the statement is false
        result= "Bigger than 5"
    } else {
        result = "5 or Smaller";
    }

    return result;
}

console.log("testELSE: " + testElse(4));

/* Else If Statements   if--else if-else*/
function testElseIf(val){
    if (val > 10) { 
        return "Greater than 10"
    } else if (val < 5){
        return "Smaller than 5 ";
    } else {
        return "Between 5 and 10"

    }
}

console.log("testElseIf: " + testElseIf(8));

/* Logical Order in If Else Statements */
function orderLogic(val){
    if (val < 10){         // Wrong xxx order !!!!!!!!!!!
        return "Less than 10";
    } else if (val < 5){
        return "Less thsan 5";
    } else {
        return "Greater than or equal to 10"
    }
}
console.log("orderLogic: " + orderLogic(2));  //will return "Less than 10" 

function orderMyLogic(val){
    if (val < 5){         // √√√√√ order !
        return "Less than 5";
    } else if (val < 10){
        return "Less thsan 10";
    } else {
        return "Greater than or equal to 10"
    }
}
console.log("orderMyLogic: " + orderMyLogic(2));  //will return "Less than 5"

/* Channing if Else statements  
chained if/else if statements to fulfill the diferent conditions:<5 <10 <15....*/
function testSize(num){
    if (num < 5){
        return "Tiny";
    }else if (num < 10){
        return "Small";
    }else if (num < 15){
        return "Medium";
    }else if (num < 20){
        return "Large";
    }else {                  // anything else ....
        return "Huge";
    }

}
console.log("testSize:  " + testSize(88));


/* Golf Code  */
var names = ["Hole-in-one!","Eagel","Birdie","Par","Bogey","Double Bogey","GO HOME! "];
function golfScore(par, strokes){
    if ( strokes == 1){
        return names[0]
    } else if(strokes <= par -2){
        return names[1]
    } else if(strokes == par -1){
        return names[2]
    } else if(strokes == par){
        return names[3]
    } else if(strokes == par +1){
        return names[4]
    } else if(strokes == par +2){
        return names[5]
    } else if(strokes == par +3){
        return names[6]
    }

}
console.log("golfScores : " + golfScore(5,2));

/* Switch Statements 
instead of using chained else if statements ~ can use a Switch statement! 
A switch statement tests a value and can have many case statements which define various possible values
----
Write a switch statement which tests val and sets answer for the following conditions: ....   */
function caseinSwitch(val){
    var answer = "";
    switch(val){
        case 1:   //val === 1
            answer = "alpha";
            break;  // without break statement will run to next case---
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    
        
    }

     return answer;
    }
console.log("caseinSwitch: "+ caseinSwitch(2));


/* Default Option in Switch Statements  */

function switchOfStuff(val){
    var answer = ""; // ------
    switch(val){
        case "a":
          answer = "apple";
          break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:  // if we pass sth else ---  without this line: answer =""
            answer = "stuff!";
            break;
    }
    return answer;
}
console.log("switchOfStuff: " + switchOfStuff(2));


/* Multiple Identical Options in Switch Statements 
 sometimes you want a switch statement where multiple inputs give the same output--
 --by omitting the break statement */
function sequentialSizes(val){
    var answer = "";
    switch(val){
        case 1:  // without break between the cases automaticlly go to the  next one
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default :
        answer = "Stuff ?";
        
    }
     return answer;
}

console.log("sequentialSizes:  " + sequentialSizes(4));



/* Replacing If Else Chains with Switch  */
function chainToSwitch(val){
    var answer = "";

    if (val === "bob") {  // the chain of If Else statement
        answer = "Marley";
    } else if (val === 42 ) {
        answer = "The Answer";
    } else if (val === 1 ) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }

    return answer;
}
console.log("chainToSwitch: " + chainToSwitch(1));

function chainToSwitch(val){
    var answer = "";

    switch(val){ // a switch statement
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
      case 8:
        answer = "888888...";
        break;
        default :
        answer = "Stuff ?";
    }

    return answer;
}
console.log("chainToSwitch: " + chainToSwitch(8));

/* Returning Boolean(true/false value) values from Functions 
--a trick when u want a function to return a Boolean,a true or false value:
 All comparison operators return a Boolean true or false value !!
*/
function isLess(a,b){
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
console.log(isLess(10,15));

function isLess(a,b){
    return a < b;     // comparison operator will return Boolean !
}
console.log(isLess(10,15));

/* Return Early pattern from Functions  */

function abTest(a,b){
    if (a < 0 || b < 0) {
        return undefined;  //u can leave the function anytime with a return statement
    }


    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}

console.log(abTest(2,2));

/** Counting Cards
 * create a blackjack card counting function
*/

var count = 0;

function cC(card) {
    


    return "Change Me !";
}


//cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cC(4));  // "Change Me!"


var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
    }
    
    var holdbet = "Hold"
    if (count > 0){
        holdbet = 'Bet'
    }


    return count + " " + holdbet;
}
 
cc(2); cc(3); cc(7); cc('K'); cc('A'); // there is no case7
console.log(cc(4));  //  1 Bet

//Practice*** 
var count = 0;
function dd(card){
    switch(card){
        case 3:
        case 4:
        case 7:
            count ++;
            break;
        case "A":
            count --;
            break;
        default:
            count + 0;
            break;
        
    }

    var holdbet = "Hold";
    if (count > 0 ){
        holdbet = 'Bet';
    }

     return count + " -- " + holdbet;
}

dd(3); dd(4); dd(7); dd('K'); dd('A');  // there is no case2 or caseK
console.log(dd(2));  


/*  Build JavaScript Objects */
var ourDog = {
    "name": "Didi", //use properties to access data instead of indexes (arrays)
    "legs": 4,     // property: value(can be :strings/numbers/arrays/any datatype in javascript)
    "tails": 1,
    "friends": ["everything !"]
};
console.log(ourDog);

var myDog = {
    "name": "Ken",
    "legs": 3,
    "tails": 1,
    "friends": []
};
console.log(myDog);

/*  Accessing Object Properties with Dot Notation  */

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var shoesValue = testObj["shoes"];
console.log("hatValue: " + hatValue);
console.log("shirtValue: " + shirtValue);
console.log("shoesValue: " + shoesValue);


/**  Accessing Object Properties with Bracket Notation 
 Can use [] anytime but it requires when the name has a space in it
*/
var testObj = {
    "an entree": "pizza", // have to use bracket to get the value
    "my side": "veggies",  
    "the drink": "soda water"
};

var entreeValue = testObj["an entree"];  //[the name of the property]
var drinkValue = testObj['the drink'];   // '' or ""
console.log(entreeValue);
console.log(drinkValue);


/** Accessing Object Properties with Variables  */

var testObj = {
    12: "Nike",
    16: "Montana",
    19: "Uno"
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log("player: " + player);

/** Updating Object Properties 
 *  Delete properties from an object
 */


var ourDog = {
    "name": "Doubi",
    "legs":4,
    "tails":1,
    "friends":["hahahahaha"]
}

ourDog.bark = "bow bow";
console.log(ourDog);
delete ourDog.tails;
console.log(ourDog);

var myDog = {
    "name": "Papi",
    "legs":4,
    "tails":1,
    "friends":["Lee","Doubi"]
}

myDog['bark'] = "Woof! ";
console.log(myDog);
delete myDog["friends"];
console.log(myDog);   // 1:55:54


/** Using objects for Lookups **/

function phoneticLookup(val){
    var result = "";

    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
    }

    return result;
}
console.log(phoneticLookup("bravo"));


function myLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver"
    };
    result = lookup[val];

    return result;
}
console.log("myLookup: " + myLookup("delta"));

/** Testing Objects for Properties  */
var myObj = {
    gift: "watch",
    pet: "dog",
    bed: "sleigh"
};
console.log(myObj.gift);

var newObj = {
    gift: "ring",
    pet: "cat",
    bed: "mattress"
};

function checkObj(checkProp) {
    if (newObj.hasOwnProperty(checkProp)) {
        return newObj[checkProp];

    }else {
        return "Not Found !"
    }

}
console.log(checkObj("b"));


/** Manipulating Complex Objects 
 inside the array are objects ----
  inside the objects are all key value pairs with the strings and the numbers and so on
   each object holds data and a property which is the key value format ----similar to JSON
*/

 var myMusic = [
    {
        "artist": "Bruno Marz",
        "title": "Uptown Funk",
        "release_year": 2015
    },
    {
        "artist": "Micheal Bubly",
        "title": "Home",
        "release_year": 2004

    },
    {
        "artist": "Sherom",
        "title": "love",
        "release_year": 2034

    }
 ];
 console.log(myMusic[2]);

/*** Accessing Nested Objects  */
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    },
    "closet": "clothes"
};
console.log(myStorage.car.outside.trunk);

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

/** Accessing Nested Arrays */
var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
        ]
    },
    {
      type: "trees",
      list:[
        "fir",
        "pine",
        "birch"
      ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);


/** Record Collection  */
var collection = {
    "2548": {
        "album": "Red River Blue",
        "artist": "Blake Shelton",
        "tracks": [
            "Home",
            "HONEY BEE"
        ]
    },
    "2468": {
        "album": "Californiacation",
        "artist": "Red Hot Chili Peppers",
        "tracks": [
            "Otherside",
            "Californiacation"
        ]
    },
    "1245": {
        "album": "Blood Sugar Sex Magik",
        "artist": "Red Hot Chili Peppers",
        "tracks": [
            "Give It Away",
            "Suck My Kiss",
            "Under The Bridge"
        ]
    },
    "2344": {
        "album": "It's Time",
        "artist": "Michael Bublé",
        "tracks": [
            "Home",
            "Feeling Good",
            "Quando,Quando,Quando"
        ]
    },
    "2345": {
        "album": "My Music"
    },
    "5439": {
        "artist": "Prince",
        "tracks": [ ]
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy);

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];  // delete if there is no value for this property
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || []; // make sure tracks will be array -exist or nor exist yet
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

updateRecords(2345, "tracks", "test...");
updateRecords(5439,"tracks","1234....");
console.log(updateRecords(5439,"album","ABCD"));


/*** Iterate with While Loops 
 # While loop ---runs while a specified condition is true and stops once it's no longer true
*/

var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);  [0,1,2,3,4]


/* Iterate With For Loops */
var ourArray =[];

for (var i = 0; i < 8; i++) {
    ourArray.push(i);
}

console.log("ourAray:");
console.log(ourArray);

/** Iterate Odd Numbers With a For LOOP */
var oddArray = [];

for (var i = 0; i < 11; i += 2) {
    oddArray.push(i);
} 

console.log("oddArray: ");
console.log(oddArray);


/** Count Backwards with a For Loop */




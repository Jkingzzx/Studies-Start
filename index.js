/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/
// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
//DATATYPES//
//1.In java you can insert numbers like this//
var myNumber (8)
//2.You can insert a string to put in a sentence you'd like//
console.log ("I"+' '+ "am"+' '+ "great")
//Always keep in mind thatthe spaces in the strings of the sentence are always counted as their own character.
//3. Booleans are binary variables that contain two values of possibility that are either "true" or "false".
boolean gokuIsStronger = True
boolean vegetaIsStronger = False
//4. Arrays are a great way to make lists when coding in programming//
var myArray = ['Eggs', 'Chicken', 'Waffles']
//5.functions are blocks of code that are reasuable that work with inputs, they go on and operate those inputs, then they return new data.
function name(parameter){
 <function body>
 <function body>
}
//6. Undefined properties indicates that a variable has not been assigned a value, or not declared at all//
//7. The definition of Nan properties means "not a number"
//8. Infinity is when a number goes over a certain number of 1.797693134862315E + 308.
//-Infinity would be the negative values of this.

//9. Primitive Datatypes are much more optimal than complex datatypes. Even so, Complex Datatypes have much more than primitive Datatypes
/*OPERATORS*/
//1. The assignment Operators assign values toits left and only operand based off of the right operand.
x=y
x+=y
x-+y
x*=y
x/+y
x%=y
//2. Arithemtic operators are symbols used to do equations
x + y
x * y
x / y
x % y
//3. Comparison operators are used to compare only two values
x == y //equal
x != y //not equal
x === y //strictly equal
// 4. A logical operator is used with two or more boolean values and only evaluates to true if all operands are truthy. ;)
//|| = OR 
//&& = AND 
//! = NOT 
( x < 10 && y > 1) //true 
( x == 5 || y == 5) //false 
!( x==y) //true 

/*STRING MANIPULATION*;)/
//1. With operators
"Sushi" === ("A" + "Best")
//2. String method
"Sushi" / ("A" + "Legend")
/*CONTROL FLOW*/
//1. If statements are the type of statements that use "if" to look for specific conditions/ :)
if (hour < 11){
  "Good Night"
}
console.log ('this code ran')
//2.Statements that have an additional other statement, which specifies a new condition if first condition is false
if (hour < 9){
  greeting = "Good morning"
} else if (hour < 24){
  greeting = "Good afternoon"
}
//3. The types of statements that specify a blockade of code to be completed if the condition is false
if (hour < 9){
  greeting = "Good morning"
} else if (hour < 24){
  greeting = "Good afternoon"
} else{
  greeting = "Good evening"
}
/*LOOPS*/
//1. While loops are loops that repeat a specific block of coding, as long as the condition is true
while (i < 8) {
  text += "The number is" + i; 
  i++;
}
var i;
for (var myCounting = 0; my myCounting < 100; myCounting++){
  console.log(Ruler);
}
//Backward myCounting//
for (var countingBack = 100; countingBack > 0; countingBack -+){
  console.log(Metric)
}
/*Functions*/
//1. There are two phases onto using functions, you first start off by naming the function. You then can complete a function by naming the parameters
//2. The parameter of a function defines the limitations that a function has to being true.
//3. A syntax for a named function is called "function_name"
//4. How do we assign a function to a variable?
var myFunction = function(/*name of function*/){
  //a piece of code
}
//5. You explain or define the inputs and outputs by adding parameters that state what should and shouldn't be an input or output. 

//Those are the essential things you should know about coding and javascript, hope this find you helpful. :)
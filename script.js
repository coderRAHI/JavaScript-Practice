//  Topic 1st VARIABLES
var number = 18;
console.log( "var variable number is :", number);
console.log("type of var variable is :", typeof number);

let Number = 19;
console.log("let variable number is : " ,Number);
console.log("type of let variable is :" , typeof Number);

const title = 'himanshu';
console.log("const title namer is :",title);
console.log("type of const variable is :" , typeof title);

// topic 2nd DATATYPES

// 1 Number Datatype

let NUMBER = 12;
console.log("Number is :",NUMBER);
console.log("type variable is :" , typeof NUMBER);

// 2 string Datatype

let string='Himanshu Gangwar';
console.log("String is: ",string);
console.log("type variable is :" , typeof string);

// 3 boolean Datatype

let isAdult=true;
let isCool=false;

console.log("Boolean is :",isAdult);
console.log("type variable is :" , typeof isAdult);


console.log("Boolean is :",isCool);
console.log("type variable is :" , typeof isCool);

// 4. Null Datatype

let variable = null;
console.log("number is :", null);
console.log("type variable is :" , typeof variable);

//  5. Undefined Datatype

let VARIABLE = undefined;
console.log("number is :", undefined);
console.log("type variable is :" , typeof VARIABLE);

// Topic 3rd Operators

// Arithematic Operators.
let num1 = 5;
num2 = 2;

console.log("The Given Num1 And Num2 resp is:" , num1 , num2);
console.log("Addition of two number is : " ,num1 + num2);
console.log("subtraction of two number is : " ,num1 - num2);
console.log("Multiplication of two number is : " ,num1 * num2);
console.log("Division of two number is : " ,num1 / num2);
console.log("Modulus of two number is : " ,num1 % num2);
console.log("Exponentiation of two number is : " ,num1 ** num2);

// Comparision Operators 

let a = 2;
b = 5;
console.log("The Given values of 'a' And 'b' resp is:" , a , b);
console.log("a is equal to b :", a===b);
console.log("a is equal to b :", a!==b);
console.log("a is greater than b :", a>b);
console.log("a is less than b :", a<b);
console.log("a is greater than equal to b :", a>=b);
console.log("a is less than equal to b :", a<=b);


// Logical operators

let x = 2;
y = 5;

console.log("The Given values of 'x' And 'y' resp is:" , x , y);
console.log("The Logical AND Operator is here both condition true then the value of AND operator is:", x < y && x === 2);
// In the logical AND operator if both the condition is true then only the result is true otherwise it gives false.

console.log("The Logical OR Operator is here both condition is true then the value of OR operator is:", x < y || x !== 2);
// In logical Or operator if the both codition is false then only the result is false otherwise the results is true in each case.

console.log("The Logical NOT Operator which can change the result means if the original result is true then it make it false :", !(x < y) );
// The Logical NOT operator makes the original result opposite , means if the original result is true then the NOT operator makes it false and its vice versa .


// Assignment operators 

let p = 3;
 q = 10 ; 
 r = 2;
console.log("the given two numbers p , q and r are respectively :" , p , q , r);
console.log("Assignment operator q += 5 means q = q + 5  is :", q += 5);
console.log("Assignment operator p -= 2 means p = p - 2  is :", p -= 2);
console.log("Assignment operator r *= 5 means r = r * 5  is :", r *= 5);
console.log("Assignment operator q /= 5 means q = q / 5  is :", q /= 2);
console.log("Assignment operator q %= 5 means q = q % 5  is :", q %= 5);
console.log("Assignment operator r **= 5 means r = r ** 5  is :", r **= 5);


// Topic 4th CONDITIONAL STATEMENTS 

// 1. if Statement
   
let age = 20 ; 
if(age >= 18){
    console.log("You are Adult because your age is : ", age)
}


// 2. if-else statement

let Age = 16 ;
 if(Age >= 18){
    console.log("You Are eligible for vote because your age is :", Age);
 }
 else{
    console.log("You Are Not eligible for vote because your age is :", Age);
 }
 

// 3. if-else-if statements

let mode = "dark" ;
let color ;

if(mode === "dark"){
    color = "black";
   
}else if(mode === "light"){
    color = "white";
}else{
    color = "Mode of Screen is Not defined."
}

console.log("color of screen is :",color);

// 4. Switch Case 

let dayNumber = 7; // maan lo 1 = Monday, 2 = Tuesday, etc.

switch (dayNumber) {
  case 1:
    console.log(" 1st day of week is Monday");
    break;
  case 2:
    console.log(" 2nd day of week is Tuesday");
    break;
  case 3:
    console.log("3rd day of week is Wednesday");
    break;
  case 4:
    console.log("4th day of week is Thursday");
    break;
  case 5:
    console.log("5th day of week is Friday");
    break;
  case 6:
    console.log("6th day of week is Saturday");
    break;
  case 7:
    console.log("7th day of week is Sunday");
    break;
  default:
    console.log("Invalid day number!");
}


 //    OR second method by taking input value with the help of prompt.

let AGE = prompt("Enter Your Age");
if(AGE >= 18){
     console.log("You Are eligible for vote because your age is :", AGE);
}   
else{
    console.log("You Are Not eligible for vote because your age is :", AGE);
}             


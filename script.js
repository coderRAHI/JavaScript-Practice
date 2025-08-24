//  Topic 1st VARIABLES
var number = 18;
console.log("var variable number is :", number);
console.log("type of var variable is :", typeof number);

let Number = 19;
console.log("let variable number is : ", Number);
console.log("type of let variable is :", typeof Number);

const title = "himanshu";
console.log("const title namer is :", title);
console.log("type of const variable is :", typeof title);

// topic 2nd DATATYPES

// 1 Number Datatype

let NUMBER = 12;
console.log("Number is :", NUMBER);
console.log("type variable is :", typeof NUMBER);

// 2 string Datatype

let string = "Himanshu Gangwar";
console.log("String is: ", string);
console.log("type variable is :", typeof string);

// 3 boolean Datatype

let isAdult = true;
let isCool = false;

console.log("Boolean is :", isAdult);
console.log("type variable is :", typeof isAdult);

console.log("Boolean is :", isCool);
console.log("type variable is :", typeof isCool);

// 4. Null Datatype

let variable = null;
console.log("number is :", null);
console.log("type variable is :", typeof variable);

//  5. Undefined Datatype

let VARIABLE = undefined;
console.log("number is :", undefined);
console.log("type variable is :", typeof VARIABLE);

// Topic 3rd Operators

// Arithematic Operators.
let num1 = 5;
num2 = 2;

console.log("The Given Num1 And Num2 resp is:", num1, num2);
console.log("Addition of two number is : ", num1 + num2);
console.log("subtraction of two number is : ", num1 - num2);
console.log("Multiplication of two number is : ", num1 * num2);
console.log("Division of two number is : ", num1 / num2);
console.log("Modulus of two number is : ", num1 % num2);
console.log("Exponentiation of two number is : ", num1 ** num2);

// Comparision Operators

let a = 2;
b = 5;
console.log("The Given values of 'a' And 'b' resp is:", a, b);
console.log("a is equal to b :", a === b);
console.log("a is equal to b :", a !== b);
console.log("a is greater than b :", a > b);
console.log("a is less than b :", a < b);
console.log("a is greater than equal to b :", a >= b);
console.log("a is less than equal to b :", a <= b);

// Logical operators

let x = 2;
y = 5;

console.log("The Given values of 'x' And 'y' resp is:", x, y);
console.log(
  "The Logical AND Operator is here both condition true then the value of AND operator is:",
  x < y && x === 2
);
// In the logical AND operator if both the condition is true then only the result is true otherwise it gives false.

console.log(
  "The Logical OR Operator is here both condition is true then the value of OR operator is:",
  x < y || x !== 2
);
// In logical Or operator if the both codition is false then only the result is false otherwise the results is true in each case.

console.log(
  "The Logical NOT Operator which can change the result means if the original result is true then it make it false :",
  !(x < y)
);
// The Logical NOT operator makes the original result opposite , means if the original result is true then the NOT operator makes it false and its vice versa .

// Assignment operators

let p = 3;
q = 10;
r = 2;
console.log("the given two numbers p , q and r are respectively :", p, q, r);
console.log("Assignment operator q += 5 means q = q + 5  is :", (q += 5));
console.log("Assignment operator p -= 2 means p = p - 2  is :", (p -= 2));
console.log("Assignment operator r *= 5 means r = r * 5  is :", (r *= 5));
console.log("Assignment operator q /= 5 means q = q / 5  is :", (q /= 2));
console.log("Assignment operator q %= 5 means q = q % 5  is :", (q %= 5));
console.log("Assignment operator r **= 5 means r = r ** 5  is :", (r **= 5));

// Topic 4th CONDITIONAL STATEMENTS

// 1. if Statement

let age = 20;
if (age >= 18) {
  console.log("You are Adult because your age is : ", age);
}

// 2. if-else statement

let Age = 16;
if (Age >= 18) {
  console.log("You Are eligible for vote because your age is :", Age);
} else {
  console.log("You Are Not eligible for vote because your age is :", Age);
}

// 3. if-else-if statements

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "light") {
  color = "white";
} else {
  color = "Mode of Screen is Not defined.";
}

console.log("color of screen is :", color);

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

// let AGE = prompt("Enter Your Age");
// if(AGE >= 18){
//      console.log("You Are eligible for vote because your age is :", AGE);
// }
// else{
//     console.log("You Are Not eligible for vote because your age is :", AGE);
// }

// PROBLEM QUESTIONS AND SOLUTION

// Problem 1. Create a variable name  and print your name after assign your name in it .
let name = "Himanshu";
console.log("My Name Is:", name);


// Problem 2. Create a variable DOB and print your DOB after assign your DOB in years value in it .
let DOB = 21;
console.log("Your Age is :", DOB);


// problem 3. Declare two variables firstName and lastName, store your name, and print full name.
let firstName = "Himanshu";
let lastName = "Gangwar";
console.log("Your Full Name is:", firstName, lastName);


// problem 4. Declare three variables for marks of subjects and print their total.
let numb1 = 75;
let numb2 = 60;
let numb3 = 90;
let total = numb1 + numb2 + numb3;
console.log("Total marks of three subjects are:", total);


// problem 5. Store city and country in variables, print "I live in Delhi, India".
let city = "Delhi";
let country = "India";
console.log("I Live in", city, ",", country);


// problem 6. Declare a variable for your favorite color and print a message with it.
let favColor = "pink";
console.log("MY FAVORITE COLOR IS :", favColor);


// problem 7. Store a product name , price and discount in variables, print "the details of the product" and "The price of product is ₹X".
let product = {
  name: "Ball Pen",
  price: 10,
  discount: 20,
};
console.log("The Details of the products is :", product);
console.log("The price of the product is in Rs :", product["price"]);


// problem 8. Store temperature in Celsius in a variable and print it.
let temperature = 98.4 ;
console.log("The temperture in celcius is:",temperature);

// problem 9. declare the variable name book and give the details like name , price , isAvailable , discount and for standard.
let book = {
  name : 'Science',
  price : 249,
  isAvailable : true,
  discount : 20,
  standard : 'B.Sc'
};
console.log("The details of the book are as follow :",book);
console.log("The standard of book in which it is used :",book['standard']);


// problem 10. Swap the values of two variables and print before/after.
let f = 10;
let g = 20;

console.log("Before Swap: f =", f, " g =", g);

let temp = f;
f = g;
g = temp;

console.log("After Swap: f =", f, " g =", g);

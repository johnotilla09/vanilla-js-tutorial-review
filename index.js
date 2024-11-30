/* BASIC OF JAVASCRIPT */

// Print Text in console in inspector
// console.log("Hello John C. Otilla");
// console.log("I Like Pizza");

// Alert in js
// alert("This is an alert!");
// alert("I Like Pizzas");

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I Like Javascript";

// This is a comment

/*
    This
    is
    a
    multi
    line 
    comment
*/

/* VARIABLES */

// Variables - A container that stores a value,
//             Behaves as it were the value it contains.

// 1. declaration int x;
// 2. assignment  x = 100

// This is for intetger, float or double
// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(`You are ${age} years old`);
// console.log(`The price is $${price} `);
// console.log(`Your GPA is $${price} `);
// console.log("Age type is " + typeof age);
// console.log("Price type is " + typeof price);
// console.log("GPA type is " + typeof gpa);

// This is for string
// let firstName = "John";
// let favoriteFood = "sushi";
// let email = 'john@gmail.com'

// console.log("Age type is " + typeof age);
// console.log(`Hello my name is ${firstName}`);
// console.log("Favorite food type is " + typeof favoriteFood);
// console.log(`My faorite food is ${firstName}`);
// console.log("email is " + typeof email);
// console.log(`My email is ${firstName}`);

// This is for Boolean
// Boolean iether true of false
// let online = true;
// let forSale = true;
// let isStudent = true;

// console.log(`John is ${online}`);
// console.log(`Is this car for sale:  ${online}`);
// console.log(`Enrolled:  ${isStudent}`);

// let fullName = "John";
// let age = "22";
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

/* ARITHMETIC OPERATORS */

// arithmetic operators - operatots (values, variables, etc)
//                        operators (+ - * /)
//                        ex: 11 = x + 5

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 2;
// students = students ** 2; // This is exponent
// letExtraStudents = students % 2;

// Augmented Assignment Operators
// students += 1;
// students -= 1;
// students *= 1;
// students /= 1;
// students **= 2;
// students %= 7; // This is a modulos operator to get the remainder

// Increment and Decrement Operators
// students++;
// students--;

// console.log(students);

/**
   Operator Precedence or PEMMDAS Rule
 * Parenthesis ()
 * Exponents
 * Multiplication & Division & Modulo
 * Addition and Subtract Operators
 */

// let result = 1 + 2 * 3 + 4 ** 2;
// let result = (12 % 5) + 8 / 2;

// console.log(result);

/* ACCEPT USER INPUT */

// 1. Easy Way - Window Prompt
// 2. Professional Way - HTML TextBox

// let userName;

// userName = window.prompt("What is your usernmame? ");

// console.log(userName);

// let userName;
// document.getElementById("mySubmit").onclick = function () {
//     userName = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${userName}`;
// };

/* TYPE CONVERSION */

//Type Conversion = change the datatypeof a value to another
//                  (string, number, boolean)

// let age = window.prompt("How old are you? ");
// age = Number(age);
// age += 1;

// console.log(age, typeof age);

// let x = "0";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

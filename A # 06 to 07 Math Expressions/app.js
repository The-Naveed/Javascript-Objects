// Chapter 06 to 09

// 1. Write a program to take a number in a variable, 
// do the required arithmetic to display the following result in your browser:

// var a = 10;
// document.write(a);

// ++a;
// document.write(a);

// a++;
// document.write(a);

// --a;
// document.write(a);

// 2. What will be the output in variables a, b & result after execution of the following script:

// how ?

// var a = 2;
// var b = 1;

// var result = --a - --b + ++b + b--;
// alert(result);

// 3. Write a program that takes input a name from user & greet the user.

// var userName = prompt("Enter Your Name","Enter Your Name");
// alert("Welcome" + " " + userName);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. 
// If user does not enter a new number, multiplication 
// table of 5 should be displayed by default.

// var tableNum = +prompt("Enter Your Table Value",5);

// for(var table = 1 ; table <= 10 ; table++){
//     document.write(tableNum + " X " + table + " = " + (tableNum*table) +"<br>")
// }

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subjectOne = prompt("Enter First Subject");
var subjectTwo = prompt("Enter Second Subject");
var subjectThree = prompt("Enter Third Subject");
var totalMarks = 100;
var subjectOneObtain = +prompt("Enter First Subject");
var subjectTwoObtain = +prompt("Enter Second Subject");
var subjectThreeObtain = +prompt("Enter Third Subject");
// Task 1: Alerts

alert("Hello Sarfaraz")

// Task 2: Variables for Strings
var favoriteFood = "Pizza";
console.log("My favorite food is: " + favoriteFood);

// Task 3: Variables for Numbers
var num1 = 10;
var num2 = 5;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// Task 4: Variable Names Legal and Illegal
// Legal variable names: snake_case, camelCase, PascalCase
// Illegal variable names: 123variable (cannot start with a number), variable-name (cannot contain hyphens), var (reserved keyword)
// var 123variable = "Illegal"; // This will cause an error
// var variable-name = "Illegal"; // This will cause an error
// var var = "Illegal"; // This will cause an error
var snake_case_variable = "Legal";
var camelCaseVariable = "Legal";
var PascalCaseVariable = "Legal";

// Task 5: Math Expressions: Familiar Operators (BODMAS rule)
var result = (num1 + num2) * num1 - num2 / num1;
console.log("Result:", result);

// Task 6: Math Expressions: Unfamiliar Operators
// Modulus operator (%) returns the remainder of a division operation
// Example: 10 % 3 returns 1, because 10 divided by 3 equals 3 with a remainder of 1
console.log("Modulus:", 10 % 3);

// Increment operators: post-increment & pre-increment
var num = 5;
var postIncrement = num++;
console.log("Post Increment:", postIncrement); // Outputs: 5
console.log("x after post increment:", x); // Outputs: 6

var num3 = 5;
var preIncrement = ++num3;
console.log("Pre Increment:", preIncrement); // Outputs: 6
console.log("y after pre increment:", num3); // Outputs: 6

// Task 7: Concatenating Text Strings
var firstName = "Sarfaraz";
var lastName = "Fida";
var fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Task 8: Prompts
var userAge = prompt("Please enter your age:");
console.log("User Age:", userAge);

// Task 9: if statements
var number = prompt("Enter a number:");
var result = number % 2
if ( result === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Task 10: if...else and else if statements
var grade = prompt("Enter your numerical grade:");
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;


// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);
// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.// Finally, log the results.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
// Check if all numbers are divisible by 5. Cache the result in a variable.
let allNumbersDivisableByFive = (n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0);
console.log(allNumbersDivisableByFive);
// Check if the first number is larger than the last. Cache the result in a variable.
let allNumbersBeGreaterThan = (n1 > n4);
console.log(allNumbersBeGreaterThan);

let lessThan25 = (n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25);
console.log(lessThan25);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
let num1 = (n2 - n1);
console.log(num1);
// Multiply the result by the third number.
let num2 = (num1 * n3);
console.log(num2);
// Find the remainder of dividing the result by the fourth number.
let num3 =(num2 % n4);
console.log (num3);
// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(isUnder25);


// These are all arbitrary problems, but they demonstrate the simplicity of working with arithmetic and comparisons in programming. No matter the complexity of the task in front of you, you will always use these core operators to accomplish it.
// Before continuing, go back through your code and add console log statements for each check. Use string concatenation or template literals to format the outputs in a reasonable way.
// For example, instead of console.log(isValid), we could write console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`) or something similar.

// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:


// How many gallons of fuel will you need for the entire trip?
const Gallons1 = 1500 / 30;
console.log(Gallons1 + "gallons to cover 1,500 miles at 55 MPH.");
const Gallons2 = 1500 / 28;
console.log(Gallons2 + "gallons to cover 1,500 miles at 60 MPH.");
const Gallons3 = 1500 / 23;
console.log(Gallons3 + "gallons to cover 1,500 miles at 75 MPH.");

// Will your budget be enough to cover the fuel expense?
const budget1 = Gallons1 * 3;
console.log(budget1 + "needed to cover expenses.");
const budget2 = Gallons2 * 3;
console.log(budget2 + "needed to cover expenses.");
const budget3 = Gallons3 * 3;
console.log(budget3 + "needed to cover expenses.");

// How long will the trip take, in hours?
const timetaken1 = 1500 / 55;
console.log(timetaken1 + "hours to drive the whole trip at 55 MPH.");
const timeTaken2 = 1500 / 60;
console.log(timeTaken2 + "hours to drive the whole trip at 60 MPH.");
const timeTaken3 = 1500 / 75;
console.log(timeTaken3 + "hours to drive the whole trip at 75 MPH.");


// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
const result1 = 175 - budget1;
const result2 = 175 - budget2;
const result3 = 175 - budget3;

console.log ("at 55 MPH the fuel cost is $" + budget1 + "and will take" + timetaken1 + "hours");
console.log ("that left a remainder of $" + result1 + "dollars in the budget");
console.log ("at 60 MPH the fuel cost is $" + budget2 + "and will take" + timetaken2 + "hours");
console.log ("that left a remainder of $" + result2 + "dollars in the budget");
console.log ("at 75 MPH the fuel cost is $" + budget3 + "and will take" + timetaken3 + "hours");
console.log ("that left a remainder of $" + result3 + "dollars in the budget");

console.log (" the best trip within budget is 60 MPH");


// Log the results of your calculations using string concatenation or template literals.













































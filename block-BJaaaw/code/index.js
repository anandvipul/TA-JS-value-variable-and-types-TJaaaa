// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt("Enter a Number: "));
let rem = num / 2;

switch (rem) {
  case 0:
    alert("Number is Even!");
    break;

  default:
    alert("Number is odd");
    break;
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = Number("Enter a Number: ");
let num2 = Number(prompt("Enter Another Number"));
if (num2 > num1) {
  alert("The Second Number is Greater.");
} else {
  alert("First Number is greater");
}

// 3. Convert the above code using`?` terniary operator

num1 > num2
  ? alert("First Number is greater")
  : alert("Second Number is greater");

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

switch (prompt("Enter Your House Name: ")) {
  case "stark":
    alert("Winter is Coming");
    break;

  case "lannister":
    alert("A lannister always pays his debt");
    break;

  default:
    alert("All men must die");
    break;
}

// 5. Convert the above code using`?` terniary operator
let houseName = prompt("Enter name of Your House: ");
houseName == "stark" || houseName == "lannister"
  ? houseName == "stark"
    ? alert("WInter is Coming")
    : alert("A Lannister always pays his debt")
  : alert("All Men Must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month = Number(prompt("Enter the number of Month"));

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("31 Days");
    break;

  case 2:
    alert("28 Days");
    break;

  default:
    alert("30 days");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salary_indivdual = Number(prompt("Enter salary of the Individual: "));
if (salary_indivdual <= 20000) {
  alert(`Salary is ${0.9 * salary_indivdual}`);
}
if (salary_indivdual <= 40000) {
  alert(`Salary of Individual is ${0.8 * salary_indivdual}`);
}
if (salary_indivdual > 50000) {
  alert(`Salary of the Individual is ${0.7 * salary_indivdual}`);
} else {
  alert("Enter Proper Salary");
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt("Enter Your Marks: "));
switch (true) {
  case marks >= 30 || marks <= 50:
    alert("Grade C");
    break;

  case marks >= 50 || marks <= 60:
    alert("Grade B");
    break;

  case marks >= 80 || marks < 100:
    alert("Grade A");
    break;

  default:
    alert("Grade D");
    break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("Weather Condition?");
switch (weather) {
  case "sunny":
    alert("Wear a T-Shirt");
    break;

  case "rainy":
    alert("Don't forget to take your raincoat.");
    break;

  case "hot":
    alert("Get a hanky");
    break;

  case "freezing":
    alert("Get your sweater on");
    break;

  default:
    alert("Not a valid Input!");
    break;
}

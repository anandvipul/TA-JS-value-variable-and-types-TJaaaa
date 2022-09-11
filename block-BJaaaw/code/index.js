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

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

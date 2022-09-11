//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
for (i = 1; i <= 10; i++) {
  console.log(`Current Itteration ${i} !`);
}

// Using `console.log` log all the evan values from 1 to 10.

for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`Current Itteration ${i} !`);
  }
}

// Using `console.log` log all the od values from 1 to 10.

for (i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(`Current Itteration ${i} !`);
  }
}

// Calculate the sum of all numbers from 1 to 10.

let sum = 0;
for (i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Log all the values from 1 to 10 using while loop
let i = 1;
while (i < 11) {
  console.log(`Current Iteration ${i}`);
  i+=1;
}
